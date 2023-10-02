"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Modal } from "antd";
import { useModalContext } from "@/contexts/ModalContext";
import { transferBalance } from "@/api/userManagement";

function TransferModal(props: any) {
  const { isTransferModalOpen, closeTransferModal } = useModalContext();
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactionType, setTransactionType] = useState("Deposit");
  const [balanceType, setBalanceType] = useState("casino");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (props.item_ !== null) {
      setId(props.item_._id);
      setName(props.item_.username);
      setBalance(
        props.item_.balance.sports_betting +
          props.item_.balance.casino +
          props.item_.balance.sports_betting_bonus +
          props.item_.balance.casino_bonus
      );
    }
  }, [props]);

  const onHandleConfirm = async () => {
    let _type;
    if (props.item_.role === "SuperAgent")
      _type = 7;
    else if (props.item_.role === "Type7Admin")
      _type = 7;
    else if (props.item_.role === "Type5Admin")
      _type = 5;
    else
      _type = 3;

    let _transferType;
    if (transactionType === "Deposit")
      _transferType = "increase";
    else
      _transferType = "decrease";

    await transferBalance(_type, id, _transferType, balanceType, amount);
    setTransactionType("Deposit");
    setBalanceType("casino");
    closeTransferModal();
  };

  const onHandleClose = () => {
    setTransactionType("Deposit");
    setBalanceType("casino");
    closeTransferModal();
  };

  return (
    <div>
      <Modal
        title="Transfers"
        open={isTransferModalOpen}
        onCancel={onHandleClose}
        footer={[
          <div key="confirm" className="flex justify-center">
            <button
              className={clsx(
                "px-4 py-1.5 rounded-md",
                amount === 0
                  ? "bg-brand-disabled-dialog-button"
                  : "bg-brand-dialog-button"
              )}
              disabled={amount === 0 ? true : false}
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
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block w-36 focus:ring-0 focus:border-gray-300"
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="Deposit">Deposit</option>
                <option value="Charge">Charge</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center h-10 w-full text-white">
            <p className="w-full text-right m-auto">Type of Balance:</p>
            <div className="w-full m-auto">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block w-36 focus:ring-0 focus:border-gray-300"
                onChange={(e) => setBalanceType(e.target.value)}
              >
                <option value="casino">casino</option>
                <option value="sports betting">sports betting</option>
                <option value="agent">agent</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center h-10 w-full">
            <p className="w-full text-right m-auto text-white">Amount:</p>
            <div className="w-full m-auto">
              <input
                type="text"
                className="bg-white border-gray-300 w-36 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
                placeholder="Amount"
                value={amount}
                onChange={(e) => {
                  const regex = /^[0-9\b]+$/;
                  if (e.target.value === "" || regex.test(e.target.value))
                    setAmount(Number(e.target.value));
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
