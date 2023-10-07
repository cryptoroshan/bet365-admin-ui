"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import clsx from "clsx";

import { useModalContext } from "@/contexts/ModalContext";
import {
  getUsersByQuery,
  getUserById,
  getUsersCreatedBy,
} from "@/api/userManagement";
import ModalGameTransaction from "@/app/(app)/components/admin/tools/SlotsTransactions/ModalGameTransaction";
import Input from "@/app/(app)/components/ui/Input";

const SlotTransactions = () => {
  const { data: session } = useSession();
  const { openGameTransactionModal } = useModalContext();

  const [startingOn, setStartingOn] = useState("");
  const [endingOn, setEndingOn] = useState("");
  const [cashout, setCashout] = useState("All");
  const [bonus, setBonus] = useState("All");
  const [betSymbol, setBetSymbol] = useState("All");
  const [betCost, setBetCost] = useState(0);
  const [winSymbol, setWinSymbol] = useState("All");
  const [winAmount, setWinAmount] = useState(0);
  const [userId, setUserId] = useState("");
  const [vendors, setVendors] = useState("All");

  const [user, setUser] = useState("");
  const [searchList, setSearchList] = useState(search_list);
  const [descendants, setDescendants] = useState([]);
  const [descendantListView, setDescendantListView] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const onHandleSearch = async () => {};

  return (
    <>
      <section className="flex flex-col gap-4 p-4">
        <section className="flex flex-col gap-4">
          <div className="grid md:flex gap-1 justify-center items-center">
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
              <p className="text-sm text-white">Bets:</p>
              <div className="flex">
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
                  onChange={(e) => setBetSymbol(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="<">&#60;</option>
                  <option value=">">&gt;</option>
                </select>
                <Input
                  className="bg-white border-gray-300 w-24 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300 text-sm"
                  placeholder="Amount"
                  value={betCost}
                  disable_value={false}
                  onHandleChange={(e: any) => {
                    const regex = /^[0-9\b]+$/;
                    if (e.target.value === "" || regex.test(e.target.value))
                      setBetCost(Number(e.target.value));
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-white">Win:</p>
              <div className="flex">
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
                  onChange={(e) => setWinSymbol(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="<">&#60;</option>
                  <option value=">">&gt;</option>
                </select>
                <Input
                  className="bg-white border-gray-300 w-24 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300 text-sm"
                  placeholder="Amount"
                  value={winAmount}
                  disable_value={false}
                  onHandleChange={(e: any) => {
                    const regex = /^[0-9\b]+$/;
                    if (e.target.value === "" || regex.test(e.target.value))
                      setWinAmount(Number(e.target.value));
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-white">User Id:</p>
              <Input
                className="bg-white border-gray-300 w-24 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300 text-sm"
                placeholder=""
                disable_value={false}
                value={userId}
                onHandleChange={(e: any) => setUserId(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-white">Vendors:</p>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
                onChange={(e) => setVendors(e.target.value)}
              >
                <option value="All">All</option>
                <option value="egt">egt</option>
                <option value="netent">netent</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <p className="text-sm text-white">User:</p>
              <div className="relative">
                <input
                  type="text"
                  className="bg-white border-gray-300 w-48 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
                  value={user}
                  onChange={async (e) => {
                    setDescendantListView(false);
                    setUser(e.target.value);
                    const _res = await getUsersByQuery(
                      e.target.value,
                      session.user.token
                    );
                    setDescendants(_res);
                    setDescendantListView(true);
                  }}
                />
                <div
                  className={clsx(
                    "absolute right-0 flex-col bg-white rounded-sm",
                    descendantListView === true ? "flex" : "hidden"
                  )}
                >
                  {descendants.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="hover:bg-red-400 px-4 cursor-pointer py-1"
                        onClick={() => {
                          setUser(item.username);
                          setDescendantListView(false);
                        }}
                      >
                        {item.username}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <button
              className="w-16 h-8 text-sm rounded-md bg-brand-dialog-button hover:bg-white"
              onClick={onHandleSearch}
            >
              Search
            </button>
          </div>
        </section>
        <section className="pt-4 w-full overflow-scroll md:overflow-hidden">
          {searchList?.length === 0 ? (
            <p className="text-lg font-bold text-center text-brand-button-text">
              No results
            </p>
          ) : (
            <table className="w-full text-sm text-gray-400 text-center">
              <thead className="text-sm bg-brand-yellow text-black">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Bet
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Win
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Balance
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Vendor
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Game
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-brand-dark-grey text-white">
                  <td className="px-2 py-1 border border-gray-600"></td>
                  <td className="px-2 py-1 border border-gray-600">Players: 36</td>
                  <td className="px-2 py-1 border border-gray-600">
                  </td>
                  <td className="px-2 py-1 border border-gray-600">
                  </td>
                  <td className="px-2 py-1 border border-gray-600">Total Bet: 31,572.69</td>
                  <td className="px-2 py-1 border border-gray-600">
                    Total Win: 32,884.40
                  </td>
                  <td className="px-2 py-1 border border-gray-600">
                    Total: -1,311.71
                  </td>
                  <td className="px-2 py-1 border border-gray-600">
                  </td>
                  <td className="px-2 py-1 border border-gray-600">
                    Games: 144
                  </td>
                </tr>
                {searchList.map((item: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      className="text-white bg-[#777] hover:cursor-pointer"
                      onClick={() => {
                        setSelectedItem(item);
                        openGameTransactionModal();
                      }}
                    >
                      <td className="px-2 py-1 border border-gray-600">
                        {item.id}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.user}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.date}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.type}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.bet_amount}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.win_amount}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.balance}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.vendor}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.game}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </section>
      </section>
      <ModalGameTransaction item={selectedItem} />
    </>
  );
};

export default SlotTransactions;

const search_list = [
  {
    id: "17179924",
    user: "cryptoRoshan",
    date: "07/09 12:31:56",
    type: "BETWIN",
    bet_amount: "0.20",
    win_amount: "0.18",
    balance: "7.20",
    vendor: "ekko",
    game: "9k Yeti"
  },
  {
    id: "17179924",
    user: "cryptoRoshan",
    date: "07/09 12:31:56",
    type: "BETWIN",
    bet_amount: "0.20",
    win_amount: "0.18",
    balance: "7.20",
    vendor: "ekko",
    game: "9k Yeti"
  }
];
