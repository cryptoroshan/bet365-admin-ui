import { useState } from "react";

import { useModalContext } from "@/contexts/ModalContext";
import ModalTransalte from "@/components/ui/ModalDialog/ModalTranslate";
import CountryTableItem from "./CountryTableItem";

interface CountriesTableProps {
  tableList: Array<any>;
  currentPage: number;
}

const CountriesTable = ({ tableList, currentPage }: CountriesTableProps) => {
  const { openMatchResultModal, openTranslateModal } = useModalContext();

  const [selectedName, setSelectedName] = useState("");
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
                  Order
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Group
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
                    <CountryTableItem
                      key={index}
                      item={item}
                      onHandleTranslateClick={(name: string) => {
                        setSelectedName(name);
                        openTranslateModal();
                      }}
                    />
                  );
              })}
            </tbody>
          </table>
        )}
      </section>
      <ModalTransalte name={selectedName} />
    </>
  );
};

export default CountriesTable;
