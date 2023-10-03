import { useState, useEffect } from "react";
import clsx from "clsx";

import DepositTable from "@/app/components/admin/reports/Deposit/DepositTable";
import Pagination from "@/components/ui/Pagination";

const Deposit = ({ currentTab }: any) => {
  const [startingOn, setStartingOn] = useState("");
  const [endingOn, setEndingOn] = useState("");
  const [methods, setMethods] = useState("All");
  const [status, setStatus] = useState("All");

  const [pageTotalCount, setPageTotalCount] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  const onHandleSearch = async () => {};

  return (
    <section
      className={clsx(
        "flex-col gap-4 pt-4 px-4",
        currentTab === "Deposit" ? "flex" : "hidden"
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
            <p className="text-sm text-white">Methods:</p>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
              onChange={(e) => setMethods(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Skrill">Skrill</option>
              <option value="Winpin-Paypal">Winpin-Paypal</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Vpos">Vpos</option>
              <option value="VPOS Voucher">VPOS Voucher</option>
            </select>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-white">Status:</p>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Open">Open</option>
              <option value="Pending">Pending</option>
              <option value="Fail">Fail</option>
              <option value="Success">Success</option>
            </select>
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
        <DepositTable currentPage={currentPage} />
        <div className="flex flex-row justify-center">
          <Pagination
            pageCount={pageTotalCount}
            gotoPage={(page: number) => setCurrentPage(page)}
          />
        </div>
      </section>
    </section>
  );
};

export default Deposit;
