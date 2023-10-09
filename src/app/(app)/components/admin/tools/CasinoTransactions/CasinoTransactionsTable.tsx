import { useState } from "react";
import ModalCasinoTransaction from "@/app/(app)/components/admin/tools/CasinoTransactions/ModalCasinoTransaction";

interface CasinoTransactionsTableProps {
  tableList: Array<any>;
  currentPage: number;
}

const CasinoTransactionsTable = ({
  tableList,
  currentPage,
}: CasinoTransactionsTableProps) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <section className="pt-4 w-full overflow-scroll md:overflow-hidden">
        {tableList?.length === 0 ? (
          <p className="text-lg font-bold text-center text-brand-button-text">
            No results
          </p>
        ) : (
          <table className="w-full text-sm text-gray-400 text-center">
            <thead className="text-sm bg-brand-yellow text-black">
              <tr>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Id
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  User
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Date
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Type
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Bet
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Win
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Balance
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Provider
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Game
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Round
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-brand-dark-grey text-white">
                <td className="px-2 py-1 border border-gray-600"></td>
                <td className="px-2 py-1 border border-gray-600">
                  Players: 36
                </td>
                <td className="px-2 py-1 border border-gray-600"></td>
                <td className="px-2 py-1 border border-gray-600"></td>
                <td className="px-2 py-1 border border-gray-600">
                  Total Bet: 31,572.69
                </td>
                <td className="px-2 py-1 border border-gray-600">
                  Total Win: 32,884.40
                </td>
                <td className="px-2 py-1 border border-gray-600">
                  Total: -1,311.71
                </td>
                <td className="px-2 py-1 border border-gray-600"></td>
                <td className="px-2 py-1 border border-gray-600">Games: 144</td>
                <td className="px-2 py-1 border border-gray-600"></td>
              </tr>
              {tableList.map((item: any, index: number) => {
                if (index >= currentPage * 5 && index < (currentPage + 1) * 5)
                  return (
                    <tr
                      key={index}
                      className="text-white bg-[#777] hover:cursor-pointer"
                      onClick={() => {
                        setSelectedItem(item);
                        openCasinoTransactionModal();
                      }}
                    >
                      <td className="px-2 py-1 border border-gray-600">
                        {item.id}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.user}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.date}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.type}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.bet_amount}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.win_amount}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.balance}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.vendor}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.game}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.round}
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        )}
      </section>
      <ModalCasinoTransaction item={selectedItem} />
    </>
  );
};

export default CasinoTransactionsTable;
