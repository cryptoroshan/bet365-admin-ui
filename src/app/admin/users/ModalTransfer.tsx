import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Modal } from "antd";
import { useModalContext } from "@/contexts/ModalContext";

function TransferModal({ id, name, balance }) {
  const { isTransferModalOpen, closeTransferModal } = useModalContext();
  const [transactionType, setTransactionType] = useState("Deposit");
  const [sum, setSum] = useState(0)

  const handleOk = () => {
    closeTransferModal();
  };

  const handleCancel = () => {
    closeTransferModal();
  };

  return (
    <div>
      <Modal
        title="Transfers"
        open={isTransferModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="flex justify-center">
            <button className={clsx("px-4 py-1.5 rounded-md", sum === 0 ? "bg-brand-disabled-dialog-button" : "bg-brand-dialog-button")} disabled={sum === 0 ? true : false}>Confirm</button>
          </div>
        ]}
      >
        <section className="flex flex-col bg-brand-dialog items-center">
          <div className="flex gap-6 justify-center h-10 w-full text-white">
            <p className="w-full text-right m-auto">Id:</p>
            <p className="w-full m-auto">{id}</p>
          </div>
          <div className="flex gap-6 justify-center h-10 w-full text-white">
            <p className="w-full text-right m-auto">Name:</p>
            <p className="w-full m-auto">{name}</p>
          </div>
          <div className="flex gap-6 justify-center h-10 w-full text-white">
            <p className="w-full text-right m-auto">Balance:</p>
            <p className="w-full m-auto">{balance}</p>
          </div>
          <div className="flex gap-6 items-center justify-center h-10 w-full text-white">
            <p className="w-full text-right m-auto">Type of Transaction:</p>
            <div className="w-full m-auto">
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block w-36 focus:ring-0 focus:border-gray-300">
                <option value="Deposit" selected>
                  Deposit
                </option>
                <option value="Charge">Charge</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center h-10 w-full">
            <p className="w-full text-right m-auto text-white">Sum:</p>
            <div className="w-full m-auto">
              <input
                type="text"
                className="bg-white border-gray-300 w-36 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
                placeholder="Sum"
                pattern="[0-9]*"
                value={sum}
                onChange={(e) => {
                  const regex = /^[0-9\b]+$/;
                  if (e.target.value === "" || regex.test(e.target.value))
                    setSum(Number(e.target.value))
                }}
              />
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}

export default TransferModal;
