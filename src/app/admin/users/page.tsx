"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";

import { getUsersCreatedBy } from "@/api/userManagement";
import UserTable from "@/app/components/table/UserTable";
import { ApartmentOutlined } from "@ant-design/icons";

const Users = () => {
  const [userList, setUserList] = useState(null);
  const [open, setOpen] = useState(false);
  const [parentId, setParentId] = useState(0);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const _userinfo = await getUsersCreatedBy(0);
    setUserList(_userinfo);
  };

  const getChildren = async (username: string, id: number) => {
    const _childrenInfo = await getUsersCreatedBy(id);
    const _newUserList = addUserList(userList, username, _childrenInfo);
    console.log(_newUserList);
    const _nextUserInfo = [..._newUserList];
    setUserList(_nextUserInfo);
  };

  const removeChildren = (username: string, id: number) => {
    const _newUserList = removeUserList(userList, username, id);
    console.log(_newUserList);
    const _nextUserInfo = [..._newUserList];
    setUserList(_nextUserInfo);
  }

  const removeUserList = (userInfo_: any[], username: string, id: number) => {
    for (let i = 0;i < userInfo_.length;i++) {
      if (Array.isArray(userInfo_[i]) === true) {
        if (userInfo_[i][0].createdBy === String(id))
          userInfo_.splice(i, 1);
        else
          removeUserList(userInfo_[i], username, id);
        break;
      }
    }
    return userInfo_;
  }

  const addUserList = (
    userInfo_: any[],
    username: string,
    _childrenInfo: any[]
  ) => {
    for (let i = 0; i < userInfo_.length; i++) {
      if (Array.isArray(userInfo_[i]) === true) {
        addUserList(userInfo_[i], username, _childrenInfo);
        break;
      }
      if (userInfo_[i].username === username) {
        userInfo_.splice(i + 1, 0, _childrenInfo);
        break;
      }
    }
    // console.log(userInfo_)
    return userInfo_;
  };

  const createTable = (child: any, open: boolean, parentId: number) => {
    return (
      <>
        {open === true && (
          <UserTable
            parentId_={parentId}
            child={child}
            createTable={createTable}
            getChildren={getChildren}
            removeChildren={removeChildren}
          />
        )}
      </>
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
                <th scope="col" className="py-1.5 border border-gray-600">
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
              {Array.isArray(userList) === true &&
                (userList as unknown as any[])?.map(
                  (item: any, index: number) => {
                    return (
                      <tr key={index} className="bg-brand-table text-white">
                        {Array.isArray(item) === true && createTable(item, open, parentId+1)}
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
                                >
                                  Transfer
                                </button>
                                <button
                                  type="button"
                                  className={clsx("text-brand-button-text hover:text-white px-2 md:px-4 h-8 border border-black", open && parentId === item._id-1 ? "bg-brand-clicked-button" : "bg-brand-button")}
                                  onClick={() => {
                                    console.log(parentId, item._id-1, open);
                                    if (parentId === item._id-1 && !open)
                                      getChildren(item.username, item._id);
                                    else
                                      removeChildren(item.username, item._id);
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
                  }
                )}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Users;
