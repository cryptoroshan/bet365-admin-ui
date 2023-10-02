import { useState, useEffect } from "react";
import clsx from "clsx";

import { useModalContext } from "@/contexts/ModalContext";
import { getUsersCreatedBy } from "@/api/userManagement";
import ModalCoupon from "./ModalCoupon";

const FinancialReport = ({ currentTab }: any) => {
  const { openCouponModal } = useModalContext();

  const [startingOn, setStartingOn] = useState("");
  const [endingOn, setEndingOn] = useState("");

  const [betsList, setBetsList] = useState(bets_list);
  const [selectedItem, setSelectedItem] = useState(null);


  const onHandleSearch = async () => {};

  return (
    <section
      className={clsx(
        "flex-col gap-4 pt-4 px-4",
        currentTab === "Financial Report" ? "flex" : "hidden"
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
      <section className="pt-4">
          <table className="w-full text-sm text-gray-400 text-center">
            <thead className="text-sm bg-[#222] uppercase">
              <tr>
                <th scope="col" className="py-1.5 border border-gray-600">
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  tax
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  ggr
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  t.o.
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  bonus
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  converted
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  ngr
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  hands
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  to partners
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-brand-dark-grey">
                <td className="py-1 border border-gray-600 cursor-pointer">Pr</td>
                <td className="py-1 border border-gray-600">0.00</td>
                <td className="py-1 border border-gray-600">
                  28,126.59
                </td>
                <td className="py-1 border border-gray-600">
                  0.00
                </td>
                <td className="py-1 border border-gray-600">1,940.36</td>
                <td className="py-1 border border-gray-600">
                  1,311.81
                </td>
                <td className="py-1 border border-gray-600">
                  {total_info.amount}
                </td>
                <td className="py-1 border border-gray-600">
                  {total_info.pos_win}
                </td>
                <td className="py-1 border border-gray-600">
                  {total_info.bet_win}
                </td>
              </tr>
              {betsList?.map((item: any, index: number) => {
                return (
                  <tr
                    key={index}
                    className="bg-brand-red text-white hover:cursor-pointer"
                    onClick={() => {
                      setSelectedItem(item);
                      openCouponModal();
                    }}
                  >
                    <td className="py-1 border border-gray-600">{item.user}</td>
                    <td className="py-1 border border-gray-600">{item.date}</td>
                    <td className="py-1 border border-gray-600">
                      {item.coupon_id}
                    </td>
                    <td className="py-1 border border-gray-600">{item.type}</td>
                    <td className="py-1 border border-gray-600">
                      {item.pre_live}
                    </td>
                    <td className="py-1 border border-gray-600">
                      {item.status}
                    </td>
                    <td className="py-1 border border-gray-600">
                      {item.amount}
                    </td>
                    <td className="py-1 border border-gray-600">
                      {item.pos_win}
                    </td>
                    <td className="py-1 border border-gray-600">
                      {item.bet_win}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
      </section>
    </section>
  );
};

export default FinancialReport;

const bets_list = [
  {
    user: "cryptoRoshan",
    date: "03/09 03:17",
    coupon_id: "422442",
    type: "multiple",
    pre_live: "Bonus Pre",
    status: "Lost",
    amount: "20.00",
    pos_win: "0.00",
    bet_win: "0.00",
  },
  {
    user: "cryptoRoshan",
    date: "03/09 03:17",
    coupon_id: "422442",
    type: "multiple",
    pre_live: "Bonus Pre",
    status: "Lost",
    amount: "20.00",
    pos_win: "0.00",
    bet_win: "0.00",
  },
];

const total_info = {
  coupon_id: "Total: 2",
  type: "Open: 0",
  status: "Average: 20.00",
  amount: "40.00",
  pos_win: "0.00",
  bet_win: "0.00",
};
