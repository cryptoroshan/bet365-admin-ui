"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import TransactionTable from "@/app/(app)/components/admin/reports/Transactions/TransactionTable";
import Pagination from "@/components/ui/Pagination";

const Transactions = () => {
  const searchParams = useSearchParams();
  const username = searchParams?.get("username");
  const [startingOn, setStartingOn] = useState("");
  const [endingOn, setEndingOn] = useState("");
  const [kind, setKind] = useState("All");
  const [type, setType] = useState("All");
  const [user, setUser] = useState("");

  const [pageTotalCount, setPageTotalCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const onHandleSearch = async () => {};

  return (
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
          {username !== null && (
            <div className="flex flex-col">
              <p className="text-sm text-white">Kind:</p>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
                onChange={(e) => setKind(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Sport">Sport</option>
                <option value="Slots">Slots</option>
                <option value="Casino">Casino</option>
                <option value="Poker">Poker</option>
                <option value="Internal">Internal</option>
                <option value="Voucher">Voucher</option>
                <option value="Payment">Payment</option>
                <option value="Virtual">Virtual</option>
                <option value="Lottery">Lottery</option>
                <option value="Egames">Egames</option>
              </select>
            </div>
          )}
          {username === null && (
            <>
              <div className="flex flex-col">
                <p className="text-sm text-white">Type:</p>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="In">In</option>
                  <option value="Out">Out</option>
                </select>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-white">User:</p>
                <input
                  type="text"
                  className="bg-white border-gray-300 w-48 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
            </>
          )}
          {username !== null && (
            <div className="flex flex-col">
              <p className="text-sm text-white">Type:</p>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Bet">Bet</option>
                <option value="Win">Win</option>
                <option value="Rollback">Rollback</option>
                <option value="Cashout">Cashout</option>
                <option value="Deposit">Deposit</option>
                <option value="Withdraw">Withdraw</option>
                <option value="Convert">Convert</option>
                <option value="Cancel">Cancel</option>
                <option value="Void">Void</option>
                <option value="Merge Balance">Merge Balance</option>
                <option value="Pay">Pay</option>
                <option value="Pay Out">Pay Out</option>
                <option value="BETWIN">BETWIN</option>
                <option value="Cancel Withdraw">Cancel Withdraw</option>
              </select>
            </div>
          )}
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
        <TransactionTable currentPage={currentPage} />
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

export default Transactions;
