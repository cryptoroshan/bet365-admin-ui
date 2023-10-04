import { useState } from "react";

import VendorTable from "./VendorTable";
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
    <div className="w-full overflow-x-scroll md:overflow-hidden">
      <table className="w-full text-sm text-white text-center">
        <thead className="text-sm bg-brand-yellow text-black uppercase">
          <tr>
            <th scope="col" className="py-1.5 border border-black"></th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              user
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              type
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              in
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              out
            </th>
            <th scope="col" className="px-2 py-1.5 border border-black">
              ggr
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
                    item.vendorsSelected === undefined && (
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
                    item.vendorsSelected !== undefined && (
                      <td colSpan={6} className="p-4 border border-black">
                        <VendorTable />
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
