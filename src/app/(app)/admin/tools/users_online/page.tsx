"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { useModalContext } from "@/contexts/ModalContext";
import {
  getUsersByQuery,
  getUserById,
  getUsersCreatedBy,
} from "@/api/userManagement";
import LocationTable from "@/app/(app)/components/admin/tools/Locations/LocationTable";
import DuplicateTable from "@/app/(app)/components/admin/tools/Locations/DuplicateTable";
import Pagination from "@/components/ui/Pagination";
import Input from "@/app/(app)/components/ui/Input";

const Locations = () => {
  const { data: session } = useSession();

  const [userList, setUserList] = useState(result_list);

  return (
    <section className="flex flex-col gap-4 p-4">
      <table className="w-[20%] text-sm text-gray-400 text-center">
        <tbody>
          {userList.map((item: any, index: number) => {
            return (
              <tr key={index} className="text-white bg-[#777]">
                <td className="px-2 py-1 border border-gray-600">{item.id}</td>
                <td className="px-2 py-1 border border-gray-600">
                  {item.count}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Locations;

const result_list = [
  {
    id: "Players",
    count: 48,
  },
  {
    id: "Agents",
    count: 3,
  },
  {
    id: "Admins",
    count: 1,
  },
  {
    id: "Summary Active Users",
    count: 52,
  },
];
