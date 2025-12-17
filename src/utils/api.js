// Path: src/utils/api.js
// Purpose: Stubbed API functions - simulate latency & success/failure

const simulate = (data, ms = 600) =>
  new Promise((res) => setTimeout(() => res(data), ms));

export async function getDestinations({ q = '', page = 1 } = {}) {
  // return dummy data
  const items = Array.from({ length: 6 }, (_, i) => ({
    id: `dest-${page}-${i+1}`,
    name: `Green Valley ${page}-${i+1}`,
    country: 'EcoLand',
    description: 'Community-driven eco stays & responsible tours.',
    images: [`/place-${(i%6)+1}.jpg`],
    places: [
      { id: `place-${i+1}`, name: 'Forest Base', thumb: `/place-${(i%6)+1}.jpg` },
      { id: `place-${i+2}`, name: 'Lake View', thumb: `/place-${((i+1)%6)+1}.jpg` }
    ]
  }));
  return simulate({ items, page, hasMore: page < 3 }, 700);
}

export async function saveCustomization(draft) {
  // Simulate saving draft and return saved id
  const saved = { ...draft, id: draft.id || `cust_${Date.now()}`, savedAt: new Date().toISOString() };
  // store on localStorage as server-simulated copy
  localStorage.setItem(`wtp_server_custom_${saved.id}`, JSON.stringify(saved));
  return simulate({ success: true, data: saved }, 800);
}

export async function uploadIdProof(file) {
  // Simulate upload - return file key/url
  const fakeUrl = `https://example.com/uploads/${Date.now()}_${file.name}`;
  return simulate({ success: true, url: fakeUrl }, 900);
}

export async function authLogin({ email }) {
  // Accept any email as success
  const user = { id: `user_${Date.now()}`, name: email.split('@')[0], email };
  return simulate({ success: true, user }, 700);
}

export async function authSignup(payload) {
  const user = { id: `user_${Date.now()}`, name: payload.username || payload.email.split('@')[0], email: payload.email };
  return simulate({ success: true, user }, 900);
}
