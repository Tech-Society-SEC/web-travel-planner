// Path: src/contexts/ModalContext.jsx
// Purpose: Modal visibility & payload global state

import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState(null); // data passed when opening modal (e.g., destination)

  function openModal(data = null) {
    setPayload(data);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setPayload(null);
  }

  return (
    <ModalContext.Provider value={{ isOpen, payload, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
