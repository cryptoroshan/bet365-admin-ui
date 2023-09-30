"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Modal } from "antd";
import { useModalContext } from "@/contexts/ModalContext";

function NewUserModal() {
  const { isNewUserModalOpen, closeNewUserModal } = useModalContext();
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onHandleRegister = () => {
    setUsername("");
    setPassword("");
    setConfirm("");
    closeNewUserModal();
  };

  const onHandleClose = () => {
    setUsername("");
    setPassword("");
    setConfirm("");
    closeNewUserModal();
  }

  return (
    <div>
      <Modal
        title="New User"
        open={isNewUserModalOpen}
        onCancel={onHandleClose}
        footer={[
          <div key="register" className="flex justify-center">
            <button
              className={clsx(
                "px-4 py-1.5 rounded-md",
                userType === "" || username === "" || password === "" || confirm === ""
                  ? "bg-brand-disabled-dialog-button"
                  : "bg-brand-dialog-button"
              )}
              disabled={(userType === "" || username === "" || password === "" || confirm === "") ? true : false}
              onClick={onHandleRegister}
            >
              Register
            </button>
          </div>,
        ]}
      >
        <section className="flex flex-col bg-brand-dialog items-center mt-6">
          <div className="flex gap-6 justify-center h-10 w-full text-white">
            <p className="w-full text-right m-auto">User Type:</p>
            <div className="w-full m-auto">
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block w-48 focus:ring-0 focus:border-gray-300" onChange={(e) => setUserType(e.target.value)}>
                {/* <option value="Deposit"></option>
                <option value="Charge"></option> */}
              </select>
            </div>
          </div>
          <div className="flex gap-6 justify-center h-10 w-full">
            <p className="w-full text-right m-auto text-white">Username:</p>
            <div className="w-full m-auto">
              <input
                type="text"
                className="bg-white border-gray-300 w-48 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-6 justify-center h-10 w-full">
            <p className="w-full text-right m-auto text-white">Password:</p>
            <div className="w-full m-auto">
              <input
                type="password"
                className="bg-white border-gray-300 w-48 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center h-10 w-full">
            <p className="w-full text-right m-auto text-white">Confirm Password:</p>
            <div className="w-full m-auto">
              <input
                type="password"
                className="bg-white border-gray-300 w-48 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}

export default NewUserModal;
