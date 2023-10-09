import { useState } from "react";

interface LeagueTableItemProps {
  item: any;
  onHandleTranslateClick: any;
}

const LeagueTableItem = ({
  item,
  onHandleTranslateClick,
}: LeagueTableItemProps) => {
  return (
    <tr className="text-white bg-[#777]">
      <td className="px-2 py-1 border border-gray-600">{item.sport}</td>
      <td className="px-2 py-1 border border-gray-600">{item.country}</td>
      <td className="px-2 py-1 border border-gray-600">
        {item.league_default_name}
      </td>
      <td className="px-2 py-1 border border-gray-600">{item.league_id}</td>
      <td className="px-2 py-1 border border-gray-600 bg-white text-black">
        {item.order}
      </td>
      <td className="w-48 border border-gray-600">
        <button
          className="button py-2 bg-green-700 hover:bg-green-600 w-full"
          onClick={() => onHandleTranslateClick(item.league_default_name)}
        >
          Translate
        </button>
      </td>
    </tr>
  );
};

export default LeagueTableItem;
