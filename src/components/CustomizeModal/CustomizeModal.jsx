// Path: src/components/CustomizeModal/CustomizeModal.jsx
// Purpose: Multi-step customize modal with autosave to localStorage and api.saveCustomization stub

import React, { useEffect, useState, useRef } from 'react';
import { useModal } from '../../contexts/ModalContext';
import { saveCustomization, uploadIdProof } from '../../utils/api';

const STORAGE_KEY = 'wtp_customize_draft';

function initialDraft(payload = null) {
  return {
    id: null,
    traveler: { fullName: '', email: '', travellers: 1, dates: { from: '', to: '' } },
    destination: payload?.destination ? { id: payload.destination.id, name: payload.destination.name } : { id: '', name: '' },
    preferences: { duration: 1, budget: '', activities: [] },
    accommodation: { mode: '', stayType: '', roomType: '', idProofUrl: '' },
    addons: { meals: false, guidedTour: false, insurance: false, pickup: false },
    notes: '',
    status: 'draft',
    lastSaved: null,
  };
}

export default function CustomizeModal() {
  const { closeModal, payload } = useModal();
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return saved ? saved : initialDraft(payload);
    } catch { return initialDraft(payload); }
  });
  const [saving, setSaving] = useState(false);
  const debounceRef = useRef(null);

  // Autosave to localStorage and API (debounced)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setSaving(true);
      try {
        const res = await saveCustomization(draft);
        setDraft(prev => ({ ...prev, id: res.data.id, lastSaved: res.data.savedAt || new Date().toISOString() }));
      } catch (err) {
        // In production queue retry
        console.error('autosave failed', err);
      } finally {
        setSaving(false);
      }
    }, 800);

    return () => clearTimeout(debounceRef.current);
  }, [draft]);

  function update(path, value) {
    setDraft(prev => {
      const next = { ...prev };
      const parts = path.split('.');
      let cur = next;
      for (let i = 0; i < parts.length - 1; i++) {
        cur = cur[parts[i]];
      }
      cur[parts[parts.length - 1]] = value;
      return next;
    });
  }

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const res = await uploadIdProof(file);
    if (res?.url) update('accommodation.idProofUrl', res.url);
  }

  function canProceed() {
    // basic validation per step
    if (step === 0) {
      return draft.traveler.fullName.trim() && draft.traveler.email.trim();
    }
    if (step === 1) return draft.destination.name.trim();
    return true;
  }

  function next() {
    if (!canProceed()) return alert('Please complete required fields on this step.');
    setStep(s => Math.min(s + 1, 3));
  }
  function prev() { setStep(s => Math.max(s - 1, 0)); }

  async function saveAndClose() {
    setSaving(true);
    try {
      await saveCustomization(draft);
      localStorage.removeItem(STORAGE_KEY);
      closeModal();
      // show toast if you have
    } catch (err) {
      console.error(err);
      alert('Failed to save customization. Try again.');
    } finally {
      setSaving(false);
    }
  }

  function resetAll() {
    if (!confirm('Reset all fields?')) return;
    const fresh = initialDraft(payload);
    setDraft(fresh);
    localStorage.removeItem(STORAGE_KEY);
  }

  // focus trap simple approach
  const modalRef = useRef();
  useEffect(() => {
    const first = modalRef.current?.querySelector('input,button,select,textarea');
    first?.focus();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" role="dialog" aria-labelledby="customize-title">
      <div ref={modalRef} className="bg-white rounded-2xl p-6 w-full max-w-3xl shadow-lg">
        <div className="flex items-center justify-between">
          <h3 id="customize-title" className="text-lg font-semibold">Customize Your Trip</h3>
          <div className="text-sm text-gray-500">{saving ? 'Saving…' : draft.lastSaved ? `Saved ${new Date(draft.lastSaved).toLocaleString()}` : ''}</div>
          <button onClick={() => closeModal()} aria-label="Close modal" className="ml-4">✖</button>
        </div>

        <div className="mt-4">
          <div className="h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
            <div style={{ width: `${(step + 1) / 4 * 100}%` }} className="h-full bg-[#4CAF50] transition-all" />
          </div>

          {/* Steps */}
          <div className="mt-4">
            {step === 0 && (
              <div>
                <h4 className="font-medium">Traveler Details</h4>
                <input value={draft.traveler.fullName} onChange={(e) => update('traveler.fullName', e.target.value)} placeholder="Full Name" className="w-full border p-2 rounded mt-3" />
                <input value={draft.traveler.email} onChange={(e) => update('traveler.email', e.target.value)} placeholder="Email" className="w-full border p-2 rounded mt-3" />
                <div className="flex gap-3 mt-3">
                  <input value={draft.traveler.travellers} onChange={(e) => update('traveler.travellers', e.target.value)} type="number" min={1} className="border p-2 rounded w-32" />
                  <input value={draft.traveler.dates.from} onChange={(e) => update('traveler.dates.from', e.target.value)} type="date" className="border p-2 rounded" />
                  <input value={draft.traveler.dates.to} onChange={(e) => update('traveler.dates.to', e.target.value)} type="date" className="border p-2 rounded" />
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h4 className="font-medium">Destination Preferences</h4>
                <input value={draft.destination.name} onChange={(e) => update('destination.name', e.target.value)} placeholder="Destination (search)" className="w-full border p-2 rounded mt-3" />
                <div className="flex gap-3 mt-3">
                  <input value={draft.preferences.duration} onChange={(e) => update('preferences.duration', e.target.value)} type="number" min={1} className="border p-2 rounded w-32" />
                  <input value={draft.preferences.budget} onChange={(e) => update('preferences.budget', e.target.value)} type="number" placeholder="Budget" className="border p-2 rounded" />
                </div>
                <input value={draft.preferences.activities.join(', ')} onChange={(e) => update('preferences.activities', e.target.value.split(',').map(s => s.trim()))} placeholder="Activities (comma separated)" className="w-full border p-2 rounded mt-3" />
              </div>
            )}

            {step === 2 && (
              <div>
                <h4 className="font-medium">Accommodation & Transport</h4>
                <select value={draft.accommodation.mode} onChange={(e) => update('accommodation.mode', e.target.value)} className="w-full border p-2 rounded mt-3">
                  <option value="">Select Mode</option>
                  <option value="flight">Flight</option>
                  <option value="train">Train</option>
                  <option value="bus">Bus</option>
                </select>
                <div className="flex gap-3 mt-3">
                  <input value={draft.accommodation.stayType} onChange={(e) => update('accommodation.stayType', e.target.value)} placeholder="Stay Type (eco-lodge)" className="border p-2 rounded flex-1" />
                  <input value={draft.accommodation.roomType} onChange={(e) => update('accommodation.roomType', e.target.value)} placeholder="Room Type (double)" className="border p-2 rounded w-40" />
                </div>
                <div className="mt-3">
                  <label className="text-sm">Upload ID Proof</label>
                  <input onChange={handleFileChange} type="file" accept="image/*,application/pdf" className="block mt-2" />
                  {draft.accommodation.idProofUrl && (
                    <div className="mt-2 text-sm text-green-700">Uploaded: <a className="underline" href={draft.accommodation.idProofUrl} target="_blank" rel="noreferrer">View</a></div>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h4 className="font-medium">Additional Notes & Add-ons</h4>
                <textarea value={draft.notes} onChange={(e) => update('notes', e.target.value)} rows="4" className="w-full border p-2 rounded mt-3" placeholder="Special requests" />
                <div className="mt-3 flex gap-3">
                  <label className="inline-flex items-center gap-2"><input type="checkbox" checked={draft.addons.meals} onChange={(e) => update('addons.meals', e.target.checked)} /> Meals</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" checked={draft.addons.guidedTour} onChange={(e) => update('addons.guidedTour', e.target.checked)} /> Guided Tours</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" checked={draft.addons.insurance} onChange={(e) => update('addons.insurance', e.target.checked)} /> Insurance</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" checked={draft.addons.pickup} onChange={(e) => update('addons.pickup', e.target.checked)} /> Pickup/Drop</label>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="mt-6 flex justify-between items-center">
            <div className="flex gap-2">
              <button onClick={resetAll} className="px-4 py-2 rounded-md border">Reset</button>
              <button onClick={() => { if (step === 0) closeModal(); else prev(); }} className="px-4 py-2 rounded-md border">Back</button>
            </div>

            <div className="flex gap-2">
              {step < 3 ? (
                <button onClick={next} className="px-4 py-2 rounded-md bg-[#4CAF50] text-white">Next</button>
              ) : (
                <button onClick={saveAndClose} className="px-4 py-2 rounded-md bg-[#2E7D32] text-white">Save Customization</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
