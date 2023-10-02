import { useState } from "react";
import clsx from "clsx";

const GeneralTable = () => {
  return (
    <table className="w-full text-sm text-white text-center">
      <thead className="text-sm bg-[#222] uppercase">
        <tr>
          <th scope="col" className="py-1.5 border border-black"></th>
          <th scope="col" className="py-1.5 border border-black">
            in
          </th>
          <th scope="col" className="py-1.5 border border-black">
            out
          </th>
          <th scope="col" className="py-1.5 border border-black">
            ggr
          </th>
          <th scope="col" className="py-1.5 border border-black">
            share
          </th>
          <th scope="col" className="py-1.5 border border-black">
            bonus
          </th>
          <th scope="col" className="py-1.5 border border-black">
            converted
          </th>
          <th scope="col" className="py-1.5 border border-black">
            ngr
          </th>
          <th scope="col" className="py-1.5 border border-black">
            open
          </th>
          <th scope="col" className="py-1.5 border border-black">
            sum open
          </th>
        </tr>
      </thead>
      <tbody>
        {general_table?.map((item, index) => {
          return (
            <tr key={index} className="bg-brand-dark-grey">
              <td className="py-1 border border-black">
                {item.name === "SLOTS" || item.name === "CASINO" ? "+ " : ""}
                {item.name}
              </td>
              <td className="py-1 border border-black">{item.in}</td>
              <td className={clsx("py-1 border border-black", item.out !== "0.00" ? "bg-brand-plus-cell" : "")}>
                {item.out}
              </td>
              <td className="py-1 border border-black">{item.ggr}</td>
              <td className="py-1 border border-black">{item.share}</td>
              <td className="py-1 border border-black">{item.bonus}</td>
              <td className={clsx("py-1 border border-black", item.converted !== "0.00" ? "bg-brand-plus-cell" : "")}>
                {item.converted}
              </td>
              <td className="py-1 border border-black">{item.ngr}</td>
              <td className="py-1 border border-black">{item.open}</td>
              <td className="py-1 border border-black">{item.sum_open}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GeneralTable;

const general_table = [
  {
    name: "PRE",
    in: "0.00",
    out: "0.00",
    ggr: "0.00",
    share: "0%",
    bonus: "0.00",
    converted: "0.00",
    ngr: "0.00",
    open: "0",
    sum_open: "0.00",
  },
  {
    name: "LIVE",
    in: "0.00",
    out: "0.00",
    ggr: "0.00",
    share: "0%",
    bonus: "0.00",
    converted: "0.00",
    ngr: "0.00",
    open: "0",
    sum_open: "0.00",
  },
  {
    name: "SLOTS",
    in: "0.00",
    out: "0.00",
    ggr: "0.00",
    share: "0%",
    bonus: "0.00",
    converted: "0.00",
    ngr: "0.00",
    open: "0",
    sum_open: "0.00",
  },
  {
    name: "CASINO",
    in: "0.00",
    out: "0.00",
    ggr: "0.00",
    share: "0%",
    bonus: "0.00",
    converted: "0.00",
    ngr: "0.00",
    open: "0",
    sum_open: "0.00",
  },
];
