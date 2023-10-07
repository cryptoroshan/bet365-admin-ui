"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";

const ToolsTab = () => {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    if (pathname === "/admin/tools/user_search")
      setCurrentTab("Users");
  }, [pathname])

  return (
    <>
      <p className="text-lg text-white bg-brand-title p-4">Tools - {currentTab}</p>
      <section className="text-sm font-medium text-center text-white bg-brand-title">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <Link
              href="/admin/tools/user_search"
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                pathname === "/admin/tools/user_search" ? "border-white border-b-4" : ""
              )}
            >
              User Search
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href="/admin/tools/coupons"
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                pathname === "/admin/tools/coupons"
                  ? "border-white border-b-4"
                  : ""
              )}
            >
              Coupons
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href="/admin/tools/search_coupon"
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                pathname === "/admin/tools/search_coupon" ? "border-white border-b-4" : ""
              )}
            >
              Search Coupon
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href="/admin/reports/casino"
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                pathname === "/admin/reports/casino" ? "border-white border-b-4" : ""
              )}
            >
              Slot Transactions
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href="/admin/reports/transactions"
              className={clsx(
                "inline-block px-4 cursor-pointer pb-2",
                pathname === "/admin/reports/transactions" ? "border-white border-b-4" : ""
              )}
            >
              Casino Transactions
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ToolsTab;
