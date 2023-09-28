"use client";
import { useState, useEffect } from "react";
import { getUsersCreatedBy } from "@/api/userManagement";

const Users = () => {
  const [superAgent, setSuperAgent] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const _userinfo = await getUsersCreatedBy(0);
    // console.log(_userinfo)
    setSuperAgent(_userinfo);
  };

  const getChildren = async (username: string, id: number) => {
    console.log(username, id);
    const _childrenInfo = await getUsersCreatedBy(id);
    setSuperAgent((arr: any) => [...arr, _childrenInfo] as any);
  };

  const createTable = (child: any) => {
    return (
      <td colSpan={7} className="p-2">
        <table className="w-full text-sm text-gray-400 text-center">
          <thead className="text-sm bg-[#444]">
            <tr>
              <th
                scope="col"
                className="py-1.5 border border-gray-600"
              >
                User
              </th>
              <th
                scope="col"
                className="hidden md:block py-1.5 border border-gray-600"
              >
                Type
              </th>
              <th
                scope="col"
                className="py-1.5 border border-gray-600"
              >
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
                    {Array.isArray(item) === true && createTable(item)}
                    {Array.isArray(item) === false && (
                      <>
                        <td className="py-1.5 border border-gray-600">
                          {item.username}
                        </td>
                        <td className="py-1.5 border border-gray-600">
                          {item.role}
                        </td>
                        <td className="hidden md:block py-1.5 border border-gray-600">
                          {item.balance.sports_betting +
                            item.balance.casino +
                            item.balance.sports_betting_bonus +
                            item.balance.casino_bonus}
                        </td>
                        <td className="py-1.5 border border-gray-600">
                          <div className="flex gap-2 w-full justify-center">
                            <button
                              type="button"
                              className="bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 h-9 border border-black"
                            >
                              Transfer
                            </button>
                            <button
                              type="button"
                              className="bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 h-9 border border-black"
                              onClick={() => getChildren(item.username, item._id)}
                            >
                              Users
                            </button>
                            <button
                              type="button"
                              className="bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 h-9 border border-black"
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
      </td>
    );
  };

  return (
    <section className="flex flex-col w-full">
      <p className="text-lg text-white bg-brand-title p-4">Users</p>
      <section className="flex flex-col gap-4 p-3">
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="bg-white h-8 p-2 focus:outline-none focus:ring-0"
            placeholder="Filter Children"
          />
          <div className="flex gap-2">
            <button
              type="button"
              className="bg-brand-button text-brand-button-text hover:text-white px-4 h-9 border border-black"
            >
              New user
            </button>
            <button
              type="button"
              className="bg-brand-button text-brand-button-text hover:text-white px-4 h-9 border border-black"
            >
              Transfer
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          {/* <UsersTable child={} /> */}
          <table className="w-full text-sm text-gray-400 text-center">
            <thead className="text-sm bg-brand-yellow text-black">
              <tr>
                <th
                  scope="col"
                  className="py-1.5 border border-gray-600"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="hidden md:block py-1.5 border border-gray-600"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="py-1.5 border border-gray-600"
                >
                  Sum
                </th>
                <th scope="col" className="py-1.5 border border-gray-600"></th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(superAgent) === true && 
                (superAgent as unknown as any[])?.map((item: any, index: number) => {
                  return (
                    <tr key={index} className="bg-brand-table text-white">
                      {Array.isArray(item) === true && createTable(item)}
                      {Array.isArray(item) === false && (
                        <>
                          <td className="py-1.5 border border-gray-600">
                            {item.username}
                          </td>
                          <td className="py-1.5 border border-gray-600">
                            {item.role}
                          </td>
                          <td className="hidden md:block py-1.5 border border-gray-600">
                            {item.balance.sports_betting +
                              item.balance.casino +
                              item.balance.sports_betting_bonus +
                              item.balance.casino_bonus}
                          </td>
                          <td className="py-1.5 border border-gray-600">
                            <div className="flex gap-2 w-full justify-center">
                              <button
                                type="button"
                                className="bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 h-9 border border-black"
                              >
                                Transfer
                              </button>
                              <button
                                type="button"
                                className="bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 h-9 border border-black"
                                onClick={() => getChildren(item.username, item._id)}
                              >
                                Users
                              </button>
                              <button
                                type="button"
                                className="bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 h-9 border border-black"
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
        </div>
      </section>
    </section>
  );
};

export default Users;
