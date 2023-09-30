import { useState } from "react";
import clsx from "clsx";

import { useModalContext } from "@/contexts/ModalContext";
import ModalTransfer from "@/app/admin/users/ModalTransfer";

const UserTable = ({
  parentId_,
  child,
  createTable,
  getChildren,
  removeChildren,
  onHandleTransfer
}) => {
  const { openTransferModal } = useModalContext();

  const [open, setOpen] = useState(false);
  const [parentId, setParentId] = useState(parentId_);

  return (
    <>
      <table className="w-full text-sm text-gray-400 text-center">
        <thead className="text-sm bg-[#444]">
          <tr>
            <th scope="col" className="py-1.5 border border-gray-600 w-[20%]">
              User
            </th>
            <th
              scope="col"
              className="max-sm:hidden py-1.5 border border-gray-600"
            >
              Type
            </th>
            <th scope="col" className="py-1.5 border border-gray-600">
              Sum
            </th>
            <th scope="col" className="py-1.5 border border-gray-600"></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(child) === true &&
            child?.map((item: any, index: number) => {
              return (
                <tr key={index} className="bg-[#666] text-white">
                  {Array.isArray(item) === true &&
                    createTable(item, open, parentId + 1)}
                  {Array.isArray(item) === false && (
                    <>
                      <td className="py-1.5 border border-gray-600">
                        {item.username}
                      </td>
                      <td className="py-1.5 border border-gray-600">
                        {item.role}
                      </td>
                      <td className="max-sm:hidden py-1.5 border border-gray-600">
                        {item.balance.sports_betting +
                          item.balance.casino +
                          item.balance.sports_betting_bonus +
                          item.balance.casino_bonus}
                      </td>
                      <td className="py-1.5 border border-gray-600">
                        <div className="flex gap-2 w-full justify-center">
                          <button
                            type="button"
                            className="bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 h-8 border border-black"
                            onClick={() => {
                              openTransferModal();
                              onHandleTransfer(item);
                            }}
                          >
                            Transfer
                          </button>
                          <button
                            type="button"
                            className={clsx(
                              "text-brand-button-text hover:text-white px-2 md:px-4 h-8 border border-black",
                              open && parentId === item._id - 1
                                ? "bg-brand-clicked-button"
                                : "bg-brand-button"
                            )}
                            onClick={() => {
                              if (parentId === item._id - 1 && !open)
                                getChildren(item.username, item._id);
                              else removeChildren(item.username, item._id);
                              setOpen(!open);
                            }}
                          >
                            Users
                          </button>
                          <button
                            type="button"
                            className="bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 h-8 border border-black"
                          >
                            Block
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
