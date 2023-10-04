import { useState } from "react";
import clsx from "clsx";

const UserTableItem = ({
  item_,
  getChildren,
  removeChildren,
  addGeneralTable,
  removeGeneralTable,
}) => {
  const [prSelected, setPrSelected] = useState(false);
  const [item, setItem] = useState(item_);
  const [open, setOpen] = useState(false);

  return (
    <>
      <td
        className={clsx(
          "px-6 py-1 border border-black cursor-pointer hover:bg-brand-yellow text-black w-14",
          prSelected === true ? "bg-brand-yellow" : "bg-white"
        )}
        onClick={() => {
          if (!prSelected) addGeneralTable(item.username);
          else removeGeneralTable(item.username, item._id);
          setPrSelected(!prSelected);
        }}
      >
        Pr
      </td>
      <td
        className={clsx(
          "px-2 py-1 border border-black",
          item.role === "User" && "bg-brand-dark-grey",
          item.role !== "User" &&
            open === true &&
            "bg-brand-yellow hover:bg-brand-yellow cursor-pointer text-black",
          item.role !== "User" &&
            open === false &&
            "bg-white hover:bg-brand-yellow cursor-pointer text-black"
        )}
        onClick={() => {
          if (item.role !== "User") {
            if (!open) getChildren(item.username, item._id);
            else removeChildren(item.username, item._id);
            setOpen(!open);
          }
        }}
      >
        {item.username}
      </td>
      <td className="px-2 py-1 border border-black">{item.role}</td>
      <td className="px-2 py-1 border border-black">0.00</td>
      <td className="px-2 py-1 border border-black bg-brand-minus-cell">
        -2,785.27
      </td>
      <td className="px-2 py-1 border border-black">0.00</td>
      <td className="px-2 py-1 border border-black">629.63</td>
      <td className="px-2 py-1 border border-black">257.18</td>
      <td className="px-2 py-1 border border-black bg-brand-minus-cell">
        -3,042.45
      </td>
      <td className="px-2 py-1 border border-black">0.00</td>
      <td className="px-2 py-1 border border-black">-3,042.45</td>
    </>
  );
};

export default UserTableItem;
