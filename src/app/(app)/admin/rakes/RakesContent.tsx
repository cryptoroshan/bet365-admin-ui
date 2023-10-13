"use client";
import { useState, useEffect } from "react";

import RakesTable from "../../components/admin/rakes/RakesTable";
import Pagination from "@/components/ui/Pagination";

const RakesContent = () => {
  const [rakeList, setRakeList] = useState(rake_list);
  const [pageTotalCount, setPageTotalCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <section className="flex flex-col gap-4 p-4">
        <section className="flex flex-col md:flex-row gap-2 justify-between items-center">
          <p className="text-sm text-white">To create new rake put value from 85 to 99</p>
          <div className="flex">
            <button className="px-4 h-9 bg-green-700 hover:bg-green-600 text-white">
              Set Rake to User
            </button>
            <button className="px-4 h-9 bg-green-700 hover:bg-green-600 text-white">
              Create Rake
            </button>
          </div>
        </section>
        <RakesTable tableList={rakeList} currentPage={currentPage} />
        {currentPage > 1 && (
          <div className="flex flex-row justify-center">
            <Pagination
              pageCount={pageTotalCount}
              gotoPage={(page: number) => setCurrentPage(page)}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default RakesContent;

const rake_list = [
  {
    rake_id: 29992,
    rake_name: "rake_29992",
    rtp: 98,
    return_bonus: "10.00",
    amount: "71.82",
    date: "01/08 12:35",
  },
  {
    rake_id: 30719,
    rake_name: "rake_29992",
    rtp: 98,
    return_bonus: "10.00",
    amount: "71.82",
    date: "01/08 12:35",
  },
  {
    rake_id: 30720,
    rake_name: "rake_29992",
    rtp: 98,
    return_bonus: "10.00",
    amount: "71.82",
    date: "01/08 12:35",
  },
  {
    rake_id: 30721,
    rake_name: "rake_29992",
    rtp: 98,
    return_bonus: "10.00",
    amount: "71.82",
    date: "01/08 12:35",
  },
  {
    rake_id: 30722,
    rake_name: "rake_29992",
    rtp: 98,
    return_bonus: "10.00",
    amount: "71.82",
    date: "01/08 12:35",
  },
  {
    rake_id: 30723,
    rake_name: "rake_29992",
    rtp: 98,
    return_bonus: "10.00",
    amount: "71.82",
    date: "01/08 12:35",
  },
  {
    rake_id: 30724,
    rake_name: "rake_29992",
    rtp: 98,
    return_bonus: "10.00",
    amount: "71.82",
    date: "01/08 12:35",
  },
];
