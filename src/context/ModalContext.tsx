
"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isCallbackOpen: boolean;
  openCallbackModal: () => void;
  closeCallbackModal: () => void;
  isBookingOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openCallbackModal = () => setIsCallbackOpen(true);
  const closeCallbackModal = () => setIsCallbackOpen(false);

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        isCallbackOpen,
        openCallbackModal,
        closeCallbackModal,
        isBookingOpen,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
