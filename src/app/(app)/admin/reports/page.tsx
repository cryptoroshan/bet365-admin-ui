"use client";
import { useState, useEffect } from "react";
import { Flowbite, CustomFlowbiteTheme, Datepicker, Button } from "flowbite-react";
import clsx from "clsx";

import BetsList from "./BetsList";
import FinancialReport from "./FinancialReport";
import Slots from "./Slots";
import Casino from "./Casino";
import Transactions from "./Transactions";
import Deposit from "./Deposit";

// const customTheme: CustomFlowbiteTheme = {
//     root: {
//         input: 'bg-black'
//     }
// };

const Reports = () => {
  const [currentTab, setCurrentTab] = useState("Bets List");

  return (
    <section className="flex flex-col w-full overflow-y-auto h-[calc(100vh-60px)]">
      <p className="text-lg text-white bg-brand-title p-4">Reports</p>
      <section className="text-sm font-medium text-center text-white bg-brand-title">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Bets List" ? "border-white border-b-4" : ""
              )}
              onClick={() => setCurrentTab("Bets List")}
            >
              Bets List
            </a>
          </li>
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Financial Report"
                  ? "border-white border-b-4"
                  : ""
              )}
              onClick={() => setCurrentTab("Financial Report")}
            >
              Financial Report
            </a>
          </li>
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Slots" ? "border-white border-b-4" : ""
              )}
              onClick={() => setCurrentTab("Slots")}
            >
              Slots
            </a>
          </li>
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Casino" ? "border-white border-b-4" : ""
              )}
              onClick={() => setCurrentTab("Casino")}
            >
              Casino
            </a>
          </li>
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Transactions" ? "border-white border-b-4" : ""
              )}
              onClick={() => setCurrentTab("Transactions")}
            >
              Transactions
            </a>
          </li>
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Deposit" ? "border-white border-b-4" : ""
              )}
              onClick={() => setCurrentTab("Deposit")}
            >
              Deposit
            </a>
          </li>
        </ul>
      </section>
      <BetsList currentTab={currentTab} />
      <FinancialReport currentTab={currentTab} />
      <Slots currentTab={currentTab} />
      <Casino currentTab={currentTab} />
      <Transactions currentTab={currentTab} />
      <Deposit currentTab={currentTab} />
    </section>
  );
};

export default Reports;
