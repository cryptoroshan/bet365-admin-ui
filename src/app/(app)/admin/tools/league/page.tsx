"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useModalContext } from "@/contexts/ModalContext";
import {
  getUsersByQuery,
  getUserById,
  getUsersCreatedBy,
} from "@/api/userManagement";
import LeagueTable from "@/app/(app)/components/admin/tools/League/LeagueTable";
import Pagination from "@/components/ui/Pagination";

const League = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { openCasinoTransactionModal } = useModalContext();

  const [sport, setSport] = useState("Football");
  const [country, setCountry] = useState("All Countries");

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
            <p className="text-sm text-white">Country:</p>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="All Countries">All Countries</option>
              <option value="International">International</option>
              <option value="Europe">Europe</option>
            </select>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <button
            type="button"
            className="px-4 py-1.5 bg-green-700 hover:bg-green-600 text-brand-button-text hover:text-white"
          >
            New Leagues
          </button>
        </div>
      </section>
      <LeagueTable tableList={searchList} currentPage={currentPage} />
      <div className="flex flex-row justify-center">
        <Pagination
          pageCount={pageTotalCount}
          gotoPage={(page: number) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default League;

const search_list = [
  {
    sport: "Football",
    country: "Europe",
    league_default_name: "UEFA European Championship Qualification",
    league_id: 18284622,
    order: 1,
  },
  {
    sport: "Football",
    country: "International",
    league_default_name: "World Cup",
    league_id: 2969,
    order: 1,
  },
  {
    sport: "Football",
    country: "Europe",
    league_default_name:
      "UEFA European Championship Qualification - Cards and Corners",
    league_id: 18285249,
    order: 2,
  },
  {
    sport: "Football",
    country: "Europe",
    league_default_name: "UEFA Europa Conference League",
    league_id: 18278410,
    order: 10,
  },
  {
    sport: "Football",
    country: "Europe",
    league_default_name: "UEFA Super Cup. Special Bets",
    league_id: 18452,
    order: 10,
  },
  {
    sport: "Football",
    country: "Europe",
    league_default_name: "UEFA Cup",
    league_id: 10522,
    order: 10,
  },
  {
    sport: "Football",
    country: "Europe",
    league_default_name: "EURO - special bets",
    league_id: 18277424,
    order: 10,
  },
];
