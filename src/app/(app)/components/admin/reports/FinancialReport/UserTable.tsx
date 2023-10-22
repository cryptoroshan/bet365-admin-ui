import { useState } from "react";
import clsx from "clsx";

// import UserTableItem from "./UserTableItem";
import GeneralTable from "./GeneralTable";
import UserTableItem from "./UserTableItem";

const UserTable = ({
  parentId_,
  child,
  startingOn,
  endingOn,
  createTable,
  getChildren,
  removeChildren,
  addGeneralTable,
  removeGeneralTable,
}) => {
  const [parentId, setParentId] = useState(parentId_);

  return (
    <div className="w-full overflow-x-scroll md:overflow-hidden">
      <table className="w-full text-sm text-white text-center">
        <thead className="text-sm bg-[#222] uppercase">
          <tr>
            <th scope="col" className="px-2 py-1.5 border border-black"></th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              {child !== null && child[0].role === "User" ? "player" : "agent"}
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              type
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              tax
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              ggr
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              t.o.
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              bonus
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              converted
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              ngr
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              hands
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
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
                        startingOn={startingOn}
                        endingOn={endingOn}
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
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
