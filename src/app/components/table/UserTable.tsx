import { useState } from "react";
import clsx from "clsx";

import { useModalContext } from "@/contexts/ModalContext";
import ModalTransfer from "@/app/admin/users/ModalTransfer";
import UserTableItem from "./UserTableItem";

const UserTable = ({
  parentId_,
  child,
  createTable,
  getChildren,
  removeChildren,
  onHandleTransfer,
  onHandleBlock,
}) => {

  const [open, setOpen] = useState(false);
  const [parentId, setParentId] = useState(parentId_);
  const [selectedItem, setSelectedItem] = useState(false);

  return (
    <>
      <table className="w-full text-sm text-gray-400 text-center">
        <thead
          className={clsx(
            "text-sm",
            parentId === 0 ? "bg-brand-yellow text-black" : "bg-[#444]"
          )}
        >
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
                    <UserTableItem item_={item} onHandleTransfer={onHandleTransfer} onHandleBlock={onHandleBlock} getChildren={(username: string, id: number) => {
                      getChildren(username, id);
                    }} removeChildren={removeChildren} />
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
