import { useState } from "react";
import clsx from "clsx";

const UserTableItem = ({
  item_,
  getChildren,
  removeChildren,
  addGeneralTable,
  removeGeneralTable,
}) => {
  const [vendorSelected, setVendorSelected] = useState(false);
  const [item, setItem] = useState(item_);
  const [open, setOpen] = useState(false);

  return (
    <>
      <td className={clsx("border border-black !p-0", item.role !== "User" ? "w-32" : "w-20")}>
        <div className="flex">
          <div
            className={clsx(
              "text-black border border-black w-20 py-1.5 cursor-pointer hover:bg-orange-400",
              vendorSelected === true ? "bg-orange-400" : "bg-white"
            )}
            onClick={() => {
              if (!vendorSelected) addGeneralTable(item.username);
              else removeGeneralTable(item.username, item._id);
              setVendorSelected(!vendorSelected);
            }}
          >
            Vendors
          </div>
          {item.role !== "User" && (
            <div
              className={clsx(
                "bg-white text-black border border-black w-16 py-1.5 cursor-pointer hover:bg-orange-400",
                open === true ? "bg-orange-400" : ""
              )}
              onClick={() => {
                if (!open) getChildren(item.username, item._id);
                else removeChildren(item.username, item._id);
                setOpen(!open);
              }}
            >
              Users
            </div>
          )}
        </div>
      </td>
      {/* <td
        className={clsx(
          "py-1 border border-black",
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
      </td> */}
      <td className="py-1 border border-black !p-0">{item.username}</td>
      <td className="py-1 border border-black !p-0">{item.role}</td>
      <td className="py-1 border border-black !p-0">15,154.94</td>
      <td className="py-1 border border-black !p-0">18,353.67</td>
      <td className="py-1 border border-black !p-0">-3,198.73</td>
    </>
  );
};

export default UserTableItem;
