import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { useModalContext } from '@/contexts/ModalContext';

function TransferModal() {
  const { isTransferModalOpen, closeTransferModal } = useModalContext();

  const handleOk = () => {
    closeTransferModal();
  };

  const handleCancel = () => {
    closeTransferModal();
  };

  return (
    <div>
      <Modal
        className='rounded-none'
        title="Transfer Balance"
        open={isTransferModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default TransferModal;
