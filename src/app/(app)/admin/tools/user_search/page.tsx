"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import clsx from "clsx";

import UserInfo from "@/app/(app)/components/admin/tools/UserSearch/UserInfo";
import Button from "@/app/(app)/components/ui/Button";
import { getUserById } from "@/api/userManagement";
import { useModalContext } from "@/contexts/ModalContext";

const UserSearch = ({ currentTab }: any) => {
  const { openUserInfoModal } = useModalContext();
  const { data: session } = useSession();

  const [userId, setUserId] = useState(0);
  const [loginName, setLoginName] = useState("");
  const [user, setUser] = useState("");
  const [userList, setUserList] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const onHandleSearch = async () => {
    const _userinfo = await getUserById(
      userId,
      session.user.token,
      session.user.role
    );
    const _userList = [];
    _userList.push(_userinfo);
    console.log(_userinfo);
    setUserList([..._userList]);
  };

  return (
    <section className="flex flex-col gap-4 p-4">
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
            onClick={(e) => onHandleSearch()}
          >
            Search
          </button>
        </div>
      </section>
      {userList !== null && (
        <section className="flex flex-col gap-4 pt-4">
          <div className="w-full overflow-x-scroll md:overflow-hidden">
            <table className="w-full text-sm text-white text-center">
              <thead className="text-sm bg-brand-yellow text-black">
                <tr>
                  <th scope="col" className="px-2 py-1.5 border border-black">
                    User
                  </th>
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
                {userList.map((item: any, index: number) => {
                  return (
                    <tr key={index} className="bg-[#666] border border-black">
                      <td
                        className={clsx(
                          "px-1 py-1 border border-black text-black w-14"
                        )}
                      >
                        <div
                          className="flex gap-2 p-2 border border-black w-full justify-center bg-[#333] cursor-pointer text-brand-button-text hover:text-white"
                          onClick={() => {
                            setSelectedItem(null);
                            openUserInfoModal();
                          }}
                        >
                          {item.username}
                        </div>
                      </td>
                      <td className="px-2 py-1 border border-black">{item.role}</td>
                      <td className="px-2 py-1 border border-black">{item.createdBy}</td>
                      <td className="px-2 py-1 border border-black">
                        {Date(item.createdDate)}
                      </td>
                      <td className="px-1 py-1 border border-black w-48">
                        <div className="flex gap-1 w-full justify-center">
                          <Button type="action" name="Block" />
                          <Button type="action" name="Location" />
                          <Button type="action" name="Bets" />
                          <Button type="action" name="Slots" />
                          <Button type="action" name="Casino" />
                          <Button type="action" name="Transactions" />
                          <Button type="action" name="Activity" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
      <UserInfo />
    </section>
  );
};

export default UserSearch;
