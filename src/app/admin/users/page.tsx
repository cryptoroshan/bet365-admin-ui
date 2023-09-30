"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";

import { getUsersCreatedBy } from "@/api/userManagement";
import UserTable from "@/app/components/table/UserTable";
import { useModalContext } from "@/contexts/ModalContext";
import ModalTransfer from "./ModalTransfer";
import ModalNewUser from "./ModalNewUser";
import ModalBlockUser from "./ModalBlockUser";

const Users = () => {
  const { openNewUserModal } = useModalContext();

  const [userList, setUserList] = useState(null);
  const [open, setOpen] = useState(false);
  const [parentId, setParentId] = useState(0);

  //transfer
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const _userinfo = await getUsersCreatedBy(0);
    setUserList(_userinfo);
  };

  const getChildren = async (username: string, id: number) => {
    const _childrenInfo = await getUsersCreatedBy(id);
    console.log(_childrenInfo)
    if (_childrenInfo.length !== 0) {
      const _newUserList = addUserList(userList, username, _childrenInfo);
      console.log(_newUserList);
      setUserList([..._newUserList]);
    }
  };

  const removeChildren = (username: string, id: number) => {
    const _newUserList = removeUserList(userList, username, id);
    console.log(_newUserList);
    setUserList([..._newUserList]);
  };

  const removeUserList = (userInfo_: any[], username: string, id: number) => {
    for (let i = 0; i < userInfo_.length; i++) {
      if (Array.isArray(userInfo_[i]) === true) {
        if (userInfo_[i][0].createdBy === String(id)) userInfo_.splice(i, 1);
        else removeUserList(userInfo_[i], username, id);
        break;
      }
    }
    return userInfo_;
  };

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
    return userInfo_;
  };

  const createTable = (child: any, open: boolean, parentId: number) => {
    return (
      <>
        {open === true && (
          <td colSpan={7} className="p-2 border border-gray-600">
            <UserTable
              parentId_={parentId}
              child={child}
              createTable={createTable}
              getChildren={getChildren}
              removeChildren={removeChildren}
              onHandleTransfer={(item: any) => setSelectedItem(item)}
              onHandleBlock={(item: any) => setSelectedItem(item)}
            />
          </td>
        )}
      </>
    );
  };

  return (
    <section className="flex flex-col w-full overflow-y-auto h-[calc(100vh-60px)]">
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
              onClick={() => openNewUserModal()}
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
          <UserTable
            parentId_={parentId}
            child={userList}
            createTable={createTable}
            getChildren={getChildren}
            removeChildren={removeChildren}
            onHandleTransfer={(item: any) => setSelectedItem(item)}
            onHandleBlock={(item: any) => setSelectedItem(item)}
          />
          <ModalTransfer item_={selectedItem} />
          <ModalNewUser />
          <ModalBlockUser item_={selectedItem} />
        </div>
      </section>
    </section>
  );
};

export default Users;
