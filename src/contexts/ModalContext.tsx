"use client";
// ModalContext.tsx
import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isEditUserModalOpen: boolean;
  openEditUserModal: () => void;
  closeEditUserModal: () => void;

  isTransferModalOpen: boolean;
  openTransferModal: () => void;
  closeTransferModal: () => void;

  isNewUserModalOpen: boolean;
  openNewUserModal: () => void;
  closeNewUserModal: () => void;

  isBlockUserModalOpen: boolean;
  openBlockUserModal: () => void;
  closeBlockUserModal: () => void;

  isLimitUserModalOpen: boolean;
  openLimitUserModal: () => void;
  closeLimitUserModal: () => void;

  isCouponModalOpen: boolean;
  openCouponModal: () => void;
  closeCouponModal: () => void;

  isUserInfoModalOpen: boolean;
  openUserInfoModal: () => void;
  closeUserInfoModal: () => void;

  isTransferAmountModalOpen: boolean;
  openTransferAmountModal: () => void;
  closeTransferAmountModal: () => void;

  isChangePasswordModalOpen: boolean;
  openChangePasswordModal: () => void;
  closeChangePasswordModal: () => void;

  isLocationModalOpen: boolean;
  openLocationModal: () => void;
  closeLocationModal: () => void;

  isSearchCouponModalOpen: boolean;
  openSearchCouponModal: () => void;
  closeSearchCouponModal: () => void;

  isDetailsModalOpen: boolean;
  openDetailsModal: () => void;
  closeDetailsModal: () => void;

  isDetailViewModalOpen: boolean;
  openDetailViewModal: () => void;
  closeDetailViewModal: () => void;

  isGameTransactionModalOpen: boolean;
  openGameTransactionModal: () => void;
  closeGameTransactionModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
  const [isBlockUserModalOpen, setIsBlockUserModalOpen] = useState(false);
  const [isLimitUserModalOpen, setIsLimitUserModalOpen] = useState(false);

  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  // User Search page
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isTransferAmountModalOpen, setIsTransferAmountModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  // Search Coupon page
  const [isSearchCouponModalOpen, setIsSearchCouponModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDetailViewModalOpen, setIsDetailViewModalOpen] = useState(false);
  // Slot Transactions
  const [isGameTransactionModalOpen, setIsGameTransactionModalOpen] = useState(false);

  const openEditUserModal = () => {
    setIsEditUserModalOpen(true);
  };

  const closeEditUserModal = () => {
    setIsEditUserModalOpen(false);
  };

  const openTransferModal = () => {
    setIsTransferModalOpen(true);
  };

  const closeTransferModal = () => {
    setIsTransferModalOpen(false);
  };

  const openNewUserModal = () => {
    setIsNewUserModalOpen(true);
  };

  const closeNewUserModal = () => {
    setIsNewUserModalOpen(false);
  };

  const openBlockUserModal = () => {
    setIsBlockUserModalOpen(true);
  };

  const closeBlockUserModal = () => {
    setIsBlockUserModalOpen(false);
  };

  const openLimitUserModal = () => {
    setIsLimitUserModalOpen(true);
  };

  const closeLimitUserModal = () => {
    setIsLimitUserModalOpen(false);
  };

  const openCouponModal = () => {
    setIsCouponModalOpen(true);
  };

  const closeCouponModal = () => {
    setIsCouponModalOpen(false);
  };

  const openUserInfoModal = () => {
    setIsUserInfoModalOpen(true);
  };

  const closeUserInfoModal = () => {
    setIsUserInfoModalOpen(false);
  };

  const openTransferAmountModal = () => {
    setIsTransferAmountModalOpen(true);
  };

  const closeTransferAmountModal = () => {
    setIsTransferAmountModalOpen(false);
  };

  const openChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  };

  const closeChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
  };

  const openLocationModal = () => {
    setIsLocationModalOpen(true);
  };

  const closeLocationModal = () => {
    setIsLocationModalOpen(false);
  };

  const openSearchCouponModal = () => {
    setIsSearchCouponModalOpen(true);
  };

  const closeSearchCouponModal = () => {
    setIsSearchCouponModalOpen(false);
  };

  const openDetailsModal = () => {
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
  };

  const openDetailViewModal = () => {
    setIsDetailViewModalOpen(true);
  };

  const closeDetailViewModal = () => {
    setIsDetailViewModalOpen(false);
  };

  const openGameTransactionModal = () => {
    setIsGameTransactionModalOpen(true);
  };

  const closeGameTransactionModal = () => {
    setIsGameTransactionModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isEditUserModalOpen,
        openEditUserModal,
        closeEditUserModal,
        isTransferModalOpen,
        openTransferModal,
        closeTransferModal,
        isNewUserModalOpen,
        openNewUserModal,
        closeNewUserModal,
        isBlockUserModalOpen,
        openBlockUserModal,
        closeBlockUserModal,
        isLimitUserModalOpen,
        openLimitUserModal,
        closeLimitUserModal,
        isCouponModalOpen,
        openCouponModal,
        closeCouponModal,
        isUserInfoModalOpen,
        openUserInfoModal,
        closeUserInfoModal,
        isTransferAmountModalOpen,
        openTransferAmountModal,
        closeTransferAmountModal,
        isChangePasswordModalOpen,
        openChangePasswordModal,
        closeChangePasswordModal,
        isLocationModalOpen,
        openLocationModal,
        closeLocationModal,
        isSearchCouponModalOpen,
        openSearchCouponModal,
        closeSearchCouponModal,
        isDetailsModalOpen,
        openDetailsModal,
        closeDetailsModal,
        isDetailViewModalOpen,
        openDetailViewModal,
        closeDetailViewModal,
        isGameTransactionModalOpen,
        openGameTransactionModal,
        closeGameTransactionModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}
