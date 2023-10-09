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
import BetTypesTable from "@/app/(app)/components/admin/tools/BetTypes/BetTypesTable";
import Input from "@/app/(app)/components/ui/Input";
import Pagination from "@/components/ui/Pagination";

const BetTypes = () => {
  const { data: session } = useSession();
  const { openCasinoTransactionModal } = useModalContext();

  const [sport, setSport] = useState("Football");
  const [feed, setFeed] = useState("Betconstruct");
  const [name, setName] = useState("");

  const [searchList, setSearchList] = useState(search_list);
  const [pageTotalCount, setPageTotalCount] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="flex flex-col gap-4 p-4">
      <section className="flex justify-between">
        <div className="grid md:flex gap-1 items-center">
          <div className="flex flex-col">
            <p className="text-sm text-white">Sport:</p>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
              onChange={(e) => setSport(e.target.value)}
            >
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Tennis">Tennis</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Table Tennis">Table Tennis</option>
              <option value="Handball">Handball</option>
              <option value="Futsal">Futsal</option>
              <option value="Ice Hockey">Ice Hockey</option>
            </select>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-white">Feed:</p>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
              onChange={(e) => setFeed(e.target.value)}
            >
              <option value="Betconstruct">Betconstruct</option>
              <option value="Eoddsmaker">Eoddsmaker</option>
            </select>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-white">Search:</p>
            <Input
              className="bg-white border-gray-300 w-24 h-9 p-2 focus:ring-0 rounded-sm focus:border-gray-300 text-sm"
              placeholder="Name"
              disable_value={false}
              value={name}
              onHandleChange={(e: any) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <button
            type="button"
            className="px-4 py-2 bg-green-700 hover:bg-green-600 text-brand-button-text hover:text-white"
          >
            Categories
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-green-700 hover:bg-green-600 text-brand-button-text hover:text-white"
          >
            Exclude
          </button>
        </div>
      </section>
      <BetTypesTable
        tableList={searchList}
        currentPage={currentPage}
      />
      <div className="flex flex-row justify-center">
        <Pagination
          pageCount={pageTotalCount}
          gotoPage={(page: number) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default BetTypes;

const search_list = [
  {
    id: "1",
    name: "Match Result (3-ways)",
    sport: "Football",
    act_pre: true,
    act_live: true,
    cashout: true,
    order: 1,
    bet_set: 1,
    bet_cat: "Score"
  },
  {
    id: "2",
    name: "Match Result (3-ways)",
    sport: "Football",
    act_pre: true,
    act_live: true,
    cashout: true,
    order: 1,
    bet_set: 1,
    bet_cat: "Penalties"
  },
  {
    id: "3",
    name: "Match Result (3-ways)",
    sport: "Football",
    act_pre: true,
    act_live: true,
    cashout: true,
    order: 1,
    bet_set: 1,
    bet_cat: "Score"
  },
  {
    id: "4",
    name: "Match Result (3-ways)",
    sport: "Football",
    act_pre: true,
    act_live: true,
    cashout: true,
    order: 1,
    bet_set: 1,
    bet_cat: "Score"
  },
  {
    id: "5",
    name: "Match Result (3-ways)",
    sport: "Football",
    act_pre: true,
    act_live: true,
    cashout: true,
    order: 1,
    bet_set: 1,
    bet_cat: "Score"
  },
  {
    id: "6",
    name: "Match Result (3-ways)",
    sport: "Football",
    act_pre: true,
    act_live: false,
    cashout: true,
    order: 1,
    bet_set: 1,
    bet_cat: "Score"
  },
  {
    id: "7",
    name: "Match Result (3-ways)",
    sport: "Football",
    act_pre: true,
    act_live: true,
    cashout: true,
    order: 1,
    bet_set: 1,
    bet_cat: "Score"
  },
];
