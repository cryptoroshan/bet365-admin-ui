"use client";
import { useSession } from "next-auth/react";

import {
  getUsersByQuery,
  getUserById,
  getUsersCreatedBy,
} from "@/api/userManagement";
import GeneralTable from "@/app/(app)/components/admin/limits/General/GeneralTable";

const General = () => {
  const { data: session } = useSession();

  return (
    <section className="flex flex-col gap-4 p-4">
      <div className="flex w-1/2 mx-auto gap-4">
        <GeneralTable tableList={search_list[0]} />
        <GeneralTable tableList={search_list[1]} />
      </div>
      <button className="w-fit mx-auto px-4 py-1.5 rounded-md bg-brand-dialog-button">
        Confirm
      </button>
    </section>
  );
};

export default General;

const search_list = [
  {
    type: "Pre",
    content: [
      {
        id: "Bet",
        single: 5000,
        multiple: 5000,
        system: 5000,
      },
      {
        id: "Win",
        single: 10000,
        multiple: 25000,
        system: 25000,
      },
    ],
  },
  {
    type: "Live",
    content: [
      {
        id: "Bet",
        single: 5000,
        multiple: 5000,
        system: 5000,
      },
      {
        id: "Win",
        single: 10000,
        multiple: 25000,
        system: 25000,
      },
    ],
  },
];
