import { useState, useEffect } from "react";
import clsx from "clsx";

import { getUsersCreatedBy } from "@/api/userManagement";
import VendorTable from "@/app/(app)/components/admin/reports/Slots/VendorTable";
import UserTable from "@/app/(app)/components/admin/reports/Slots/UserTable";

const Slots = ({ currentTab }: any) => {
  const [startingOn, setStartingOn] = useState("");
  const [endingOn, setEndingOn] = useState("");
  const [provider, setProvider] = useState("All");
  const [vendor, setVendor] = useState("All");
  const [bonus, setBonus] = useState("Without Bonus");
  const [user, setUser] = useState("");

  const [vendorsSelected, setVendorsSelected] = useState(false);
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const _userinfo = await getUsersCreatedBy(0);
    setUserList(_userinfo);
  };

  const getChildren = async (username: string, id: number) => {
    const _childrenInfo = await getUsersCreatedBy(id);
    if (_childrenInfo.length !== 0) {
      const _newUserList = addUserList(userList, username, _childrenInfo);
      setUserList([..._newUserList]);
    }
  };

  const removeChildren = (username: string, id: number) => {
    const _newUserList = removeUserList(userList, username, id);
    setUserList([..._newUserList]);
  };

  const removeUserList = (userInfo_: any[], username: string, id: number) => {
    for (let i = 0; i < userInfo_.length; i++) {
      if (Array.isArray(userInfo_[i]) === true) {
        if (userInfo_[i][0].createdBy === String(id)) {
          userInfo_.splice(i, 1);
          break;
        } else {
          removeUserList(userInfo_[i], username, id);
          if (i === userInfo_.length - 1) break;
        }
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
        if (i === userInfo_.length - 1) break;
      }
      if (userInfo_[i].username === username) {
        userInfo_.splice(i + 1, 0, _childrenInfo);
        break;
      }
    }
    return userInfo_;
  };

  const addGeneralTable = (username: string) => {
    const _newUserList = _addGeneralTable(userList, username);
    console.log(_newUserList);
    setUserList([..._newUserList]);
  };

  const _addGeneralTable = (userInfo_: any[], username: string) => {
    for (let i = 0; i < userInfo_.length; i++) {
      if (Array.isArray(userInfo_[i]) === true) {
        _addGeneralTable(userInfo_[i], username, { vendorsSelected: false });
        if (i === userInfo_.length - 1) break;
      }
      if (userInfo_[i].username === username) {
        userInfo_.splice(i + 1, 0, { vendorsSelected: false });
        break;
      }
    }
    return userInfo_;
  };

  const removeGeneralTable = (username: string, id: number) => {
    const _newUserList = _removeGeneralTable(userList, username, id);
    setUserList([..._newUserList]);
  };

  const _removeGeneralTable = (
    userInfo_: any[],
    username: string,
    id: number
  ) => {
    for (let i = 0; i < userInfo_.length; i++) {
      if (Array.isArray(userInfo_[i]) === true) {
        if (userInfo_[i][0].createdBy !== String(id)) {
          _removeGeneralTable(userInfo_[i], username, id);
          if (i === userInfo_.length - 1) break;
        }
      } else {
        if (userInfo_[i]._id === id) {
          if (userInfo_[i + 1].vendorsSelected === undefined)
            userInfo_.splice(i + 2, 1);
          else userInfo_.splice(i + 1, 1);
        }
      }
    }
    return userInfo_;
  };

  const createTable = (child: any, parentId: number) => {
    return (
      <>
        <td colSpan={11} className="p-4 border border-black">
          <UserTable
            parentId_={parentId}
            child={child}
            createTable={createTable}
            getChildren={getChildren}
            removeChildren={removeChildren}
            addGeneralTable={addGeneralTable}
            removeGeneralTable={removeGeneralTable}
          />
        </td>
      </>
    );
  };

  const onHandleSearch = async () => {};

  return (
    <section
      className={clsx(
        "flex-col gap-4 pt-4 px-4",
        currentTab === "Slots" ? "flex" : "hidden"
      )}
    >
      <section className="flex flex-col gap-4">
        <div className="flex gap-1 justify-center">
          <div className="flex flex-col">
            <p className="text-sm text-white">From:</p>
            <input
              type="date"
              className="w-44 fill-blue-500 h-9 text-primary text-lg font-medium focus:outline-none border border-primary bg-white"
              value={startingOn}
              onChange={(e) => setStartingOn(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-white">To:</p>
            <input
              type="date"
              className="w-44 fill-blue-500 h-9 text-primary text-lg font-medium focus:outline-none border border-primary bg-white"
              value={endingOn}
              onChange={(e) => setEndingOn(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-white">Provider:</p>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
              onChange={(e) => setProvider(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Ekko">Ekko</option>
              <option value="Gapi">Gapi</option>
              <option value="Gbs">Gbs</option>
            </select>
          </div>
          {provider !== "All" && (
            <div className="flex flex-col">
              <p className="text-sm text-white">Vendor:</p>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
                onChange={(e) => setVendor(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Ekko">amatic</option>
                <option value="Gapi">egt</option>
                <option value="Gbs">netent</option>
              </select>
            </div>
          )}
          <div className="flex flex-col">
            <p className="text-sm text-white">Bonus:</p>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
              onChange={(e) => setBonus(e.target.value)}
            >
              <option value="Without Bonus">Without Bonus</option>
              <option value="Only Bonus">Only Bonus</option>
            </select>
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
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-semibold text-white">Vendors Summary</p>
          <table className="w-full text-sm text-white text-center">
            <thead className="text-sm text-black bg-brand-yellow uppercase">
              <tr>
                <th scope="col" className="py-1.5 border border-gray-600"></th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  vendors
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  players
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  games
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  in
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  out
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  ggr
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-brand-dark-grey border border-gray-600">
                <td
                  className={clsx(
                    "py-1 border border-gray-600 cursor-pointer hover:bg-orange-400 text-black w-14",
                    vendorsSelected === true ? "bg-orange-400" : "bg-white"
                  )}
                  onClick={() => setVendorsSelected(!vendorsSelected)}
                >
                  Pr
                </td>
                <td className="py-1 border border-gray-600">16</td>
                <td className="py-1 border border-gray-600">94</td>
                <td className="py-1 border border-gray-600">378</td>
                <td className="py-1 border border-gray-600">261,169.52</td>
                <td className="py-1 border border-gray-600">247,634.09</td>
                <td className="py-1 border border-gray-600">13,535.43</td>
              </tr>
              {vendorsSelected === true && (
                <tr className="bg-brand-dark-grey border border-gray-600">
                  <td colSpan={7} className="p-4">
                    <VendorTable />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-semibold text-white">By Agents</p>
          <UserTable
            parentId_={0}
            child={userList}
            createTable={createTable}
            getChildren={getChildren}
            removeChildren={removeChildren}
            addGeneralTable={addGeneralTable}
            removeGeneralTable={removeGeneralTable}
          />
        </div>
      </section>
    </section>
  );
};

export default Slots;
