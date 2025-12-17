// Path: src/pages/CustomizePage.jsx
// Purpose: Route-based customize page (opens modal too)

import React, { useEffect } from 'react';
import { useModal } from '../contexts/ModalContext';

export default function CustomizePage() {
  const { openModal } = useModal();
  useEffect(() => {
    openModal();
  }, []);

  return (
    <div className="p-12 text-center">
      <h2 className="text-3xl text-[#2E7D32]">Customize Your Trip</h2>
      <p className="mt-3">The customize modal is open — use it to personalize your journey.</p>
    </div>
  );
}
