import { useState, useEffect } from "react";
import clsx from "clsx";

import { getUsersCreatedBy } from "@/api/userManagement";
import GeneralTable from "@/app/(app)/components/admin/reports/FinancialReport/GeneralTable";
import UserTable from "@/app/(app)/components/admin/reports/FinancialReport/UserTable";

const UserSearch = ({ currentTab }: any) => {
  const [userId, setUserId] = useState(0);
  const [loginName, setLoginName] = useState("");

  const [user, setUser] = useState("");

  const onHandleSearch = async () => {};

  return (
    <section
      className={clsx(
        "flex-col gap-4 p-4",
        currentTab === "Users" ? "flex" : "hidden"
      )}
    >
      <section className="flex flex-col gap-4">
        <div className="grid md:flex gap-1 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-sm text-white">User Id:</p>
            <input
              type="text"
              className="bg-white border-gray-300 w-36 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
              value={userId}
              onChange={(e) => {
                const regex = /^[0-9\b]+$/;
                if (e.target.value === "" || regex.test(e.target.value))
                  setUserId(Number(e.target.value));
              }}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-white">Login Name:</p>
            <input
              type="text"
              className="bg-white border-gray-300 w-36 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <p className="text-sm text-white">User:</p>
            <input
              type="text"
              className="bg-white border-gray-300 w-48 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="w-16 h-8 text-sm rounded-md bg-brand-dialog-button hover:bg-white"
            onClick={onHandleSearch}
          >
            Search
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-4 pt-4">
        <div className="w-full overflow-x-scroll md:overflow-hidden">
          <table className="w-full text-sm text-white text-center">
            <thead className="text-sm bg-brand-yellow">
              <tr>
                <th
                  scope="col"
                  className="px-2 py-1.5 border border-black"
                >User</th>
                <th scope="col" className="px-2 py-1.5 border border-black">
                  User Type
                </th>
                <th scope="col" className="px-2 py-1.5 border border-black">
                  Parent Id
                </th>
                <th scope="col" className="px-2 py-1.5 border border-black">
                  Last Login
                </th>
                <th scope="col" className="px-2 py-1.5 border border-black">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-brand-dark-grey border border-black">
                <td
                  className={clsx(
                    "py-1 border border-black bg-[#333] text-black w-14",
                  )}
                >
                  Pr
                </td>
                <td className="px-2 py-1 border border-black">0.00</td>
                <td className="px-2 py-1 border border-black bg-brand-plus-cell">
                  28,126.59
                </td>
                <td className="px-2 py-1 border border-black">0.00</td>
                <td className="px-2 py-1 border border-black">1,940.36</td>
                <td className="px-2 py-1 border border-black">1,311.81</td>
                <td className="px-2 py-1 border border-black bg-brand-plus-cell">
                  26,814.78
                </td>
                <td className="px-2 py-1 border border-black">26,814.63</td>
                <td className="px-2 py-1 border border-black">0.15</td>
              </tr>
              {prSelected === true && (
                <tr className="bg-brand-dark-grey border border-black">
                  <td colSpan={9} className="p-4">
                    <GeneralTable />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <UserTable
          parentId_={0}
          child={userList}
          createTable={createTable}
          getChildren={getChildren}
          removeChildren={removeChildren}
          addGeneralTable={addGeneralTable}
          removeGeneralTable={removeGeneralTable}
        />
      </section>
    </section>
  );
};

export default UserSearch;
