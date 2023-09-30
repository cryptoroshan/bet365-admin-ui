"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Modal } from "antd";
import { useModalContext } from "@/contexts/ModalContext";

function TransferModal(props) {
  const { isTransferModalOpen, closeTransferModal } = useModalContext();
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactionType, setTransactionType] = useState("Deposit");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (props.item_ !== null) {
      setId(props.item_._id);
      setName(props.item_.username);
      setBalance(props.item_.balance.sports_betting + props.item_.balance.casino + props.item_.balance.sports_betting_bonus + props.item_.balance.casino_bonus);
    }
  }, [props]);

  const onHandleConfirm = () => {
    setSum(0);
    closeTransferModal();
  };

  return (
    <div>
      <Modal
        title="Transfers"
        open={isTransferModalOpen}
        onCancel={closeTransferModal}
        footer={[
          <div key="confirm" className="flex justify-center">
            <button
              className={clsx(
                "px-4 py-1.5 rounded-md",
                sum === 0
                  ? "bg-brand-disabled-dialog-button"
                  : "bg-brand-dialog-button"
              )}
              disabled={sum === 0 ? true : false}
              onClick={onHandleConfirm}
            >
              Confirm
            </button>
          </div>,
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
                <option value="Deposit">Deposit</option>
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
                    setSum(Number(e.target.value));
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
