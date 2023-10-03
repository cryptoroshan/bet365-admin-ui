import { useState } from "react";
import clsx from "clsx";

// import UserTableItem from "./UserTableItem";
import GeneralTable from "./GeneralTable";
import UserTableItem from "./UserTableItem";

const UserTable = ({
  parentId_,
  child,
  createTable,
  getChildren,
  removeChildren,
  addGeneralTable,
  removeGeneralTable,
}) => {
  const [parentId, setParentId] = useState(parentId_);

  return (
    <>
      <table className="w-full text-sm text-white text-center">
        <thead className="text-sm bg-[#222] uppercase">
          <tr>
            <th scope="col" className="py-1.5 border border-black"></th>
            <th scope="col" className="py-1.5 border border-black">
              agent
            </th>
            <th scope="col" className="py-1.5 border border-black">
              type
            </th>
            <th scope="col" className="py-1.5 border border-black">
              tax
            </th>
            <th scope="col" className="py-1.5 border border-black">
              ggr
            </th>
            <th scope="col" className="py-1.5 border border-black">
              t.o.
            </th>
            <th scope="col" className="py-1.5 border border-black">
              bonus
            </th>
            <th scope="col" className="py-1.5 border border-black">
              converted
            </th>
            <th scope="col" className="py-1.5 border border-black">
              ngr
            </th>
            <th scope="col" className="py-1.5 border border-black">
              hands
            </th>
            <th scope="col" className="py-1.5 border border-black">
              partner
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(child) === true &&
            child?.map((item: any, index: number) => {
              return (
                <tr key={index} className="bg-brand-dark-grey">
                  {Array.isArray(item) === true &&
                    createTable(item, parentId + 1)}
                  {Array.isArray(item) === false &&
                    item.prSelected === undefined && (
                      <UserTableItem
                        item_={item}
                        getChildren={(username: string, id: number) => {
                          getChildren(username, id);
                        }}
                        removeChildren={removeChildren}
                        addGeneralTable={addGeneralTable}
                        removeGeneralTable={removeGeneralTable}
                      />
                    )}
                  {Array.isArray(item) === false &&
                    item.prSelected !== undefined && (
                      <td colSpan={11} className="p-4 border border-black">
                        <GeneralTable />
                      </td>
                    )}
                </tr>
              );
            })}
          {/* {prSelected === true && (
            <tr className="bg-brand-dark-grey border border-black">
              <td colSpan={11} className="p-4">
                <GeneralTable />
              </td>
            </tr>
          )} */}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
