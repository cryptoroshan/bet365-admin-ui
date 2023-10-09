import { useState } from "react";

import { useModalContext } from "@/contexts/ModalContext";
import ModalMatchResult from "./ModalMatchResult";
import ModalTransalte from "./ModalTranslate";
import BetTypesItems from "./BetTypesItems";

interface BetTypesTableProps {
  tableList: Array<any>;
  currentPage: number;
}

const BetTypesTable = ({ tableList, currentPage }: BetTypesTableProps) => {
  const { openMatchResultModal, openTranslateModal } = useModalContext();

  const [selectedItem, setSelectedItem] = useState(null);
  const [betCat, setBetCat] = useState("");

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
                  Name
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Sport
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Act pre
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Act live
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Cashout
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Order
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Bet Set
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Bet Cat
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item: any, index: number) => {
                if (index >= currentPage * 5 && index < (currentPage + 1) * 5)
                  return (
                    <BetTypesItems
                      key={index}
                      item={item}
                      onHandleGroupClick={(item: any) => openMatchResultModal()}
                      onHandleTranslateClick={(item: any) => openTranslateModal()}
                    />
                  );
              })}
            </tbody>
          </table>
        )}
      </section>
      <ModalMatchResult />
      <ModalTransalte />
    </>
  );
};

export default BetTypesTable;
