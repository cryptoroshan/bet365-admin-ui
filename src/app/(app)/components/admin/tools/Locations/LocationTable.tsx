interface LocationTableProps {
  tableList: Array<any>;
  currentPage: number;
}

const LocationTable = ({ tableList, currentPage }: LocationTableProps) => {
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
                  Ip
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  User
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Type
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  City
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Platform
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Device
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Browser
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item: any, index: number) => {
                if (index >= currentPage * 5 && index < (currentPage + 1) * 5)
                  return (
                    <tr key={index} className="text-white bg-[#777]">
                      <td className="px-2 py-1 border border-gray-600">
                        {item.ip}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.user}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.type}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.city}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.platform}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.device}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.browser}
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        {item.time}
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
};

export default LocationTable;
