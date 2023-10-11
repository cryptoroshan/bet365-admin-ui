import { useState } from "react";
import clsx from "clsx";

import { getBlockStatus } from "@/api/userManagement";
import { useModalContext } from "@/contexts/ModalContext";

const UserTableItem = ({
  item_,
  getChildren,
  removeChildren,
  onHandleTransfer,
  onHandleBlock,
}) => {
  const { openTransferModal, openBlockUserModal } = useModalContext();
  const [item, setItem] = useState(item_);
  const [open, setOpen] = useState(false);

  return (
    <>
      <td className="px-2 py-1.5 border border-gray-600 truncate">{item.username}</td>
      <td className="px-2 py-1.5 border border-gray-600 truncate">{item.role}</td>
      <td className="px-2 max-sm:hidden py-1.5 border border-gray-600">
        {item.balance.sports_betting +
          item.balance.casino +
          item.balance.sports_betting_bonus +
          item.balance.casino_bonus}
      </td>
      <td className="px-2 py-1.5 border border-gray-600 truncate">
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
              open ? "bg-brand-clicked-button" : "bg-brand-button", item.role === 'User' ? "hidden" : "block"
            )}
            onClick={() => {
              if (!open) getChildren(item.username, item._id);
              else removeChildren(item.username, item._id);
              setOpen(!open);
            }}
          >
            Users
          </button>
          <button
            type="button"
            className="bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 h-8 border border-black"
            onClick={async () => {
              const _blockStatus = await getBlockStatus(item._id, item.role);
              openBlockUserModal();
              onHandleBlock(item, _blockStatus);
            }}
          >
            Block
          </button>
        </div>
      </td>
    </>
  );
};

export default UserTableItem;
