"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";

import UserSearch from "./UserSearch";

const Tools = () => {
  const [currentTab, setCurrentTab] = useState("Users");

  return (
    <section className="flex flex-col w-full overflow-y-auto h-[calc(100vh-60px)]">
      <p className="text-lg text-white bg-brand-title p-4">Reports - {currentTab}</p>
      <section className="text-sm font-medium text-center text-white bg-brand-title">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Users" ? "border-white border-b-4" : ""
              )}
              onClick={() => setCurrentTab("Users")}
            >
              User Search
            </a>
          </li>
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Coupons"
                  ? "border-white border-b-4"
                  : ""
              )}
              onClick={() => setCurrentTab("Coupons")}
            >
              Coupons
            </a>
          </li>
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Search Coupon" ? "border-white border-b-4" : ""
              )}
              onClick={() => setCurrentTab("Search Coupon")}
            >
              Search Coupon
            </a>
          </li>
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Slot Transactions" ? "border-white border-b-4" : ""
              )}
              onClick={() => setCurrentTab("Slot Transactions")}
            >
              Slot Transactions
            </a>
          </li>
          <li className="mr-2">
            <a
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                currentTab === "Casino Transactions" ? "border-white border-b-4" : ""
              )}
              onClick={() => setCurrentTab("Casino Transactions")}
            >
              Casino Transactions
            </a>
          </li>
        </ul>
      </section>
      <UserSearch currentTab={currentTab} />
    </section>
  );
};

export default Tools;
