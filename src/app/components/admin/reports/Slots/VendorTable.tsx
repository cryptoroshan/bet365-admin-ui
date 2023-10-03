const VendorTable = () => {
  return (
    <table className="w-full text-sm text-white text-center">
      <thead className="text-sm bg-[#222]">
        <tr>
          <th scope="col" className="py-1.5 border border-black">
            Vendor
          </th>
          <th scope="col" className="py-1.5 border border-black">
            Sum Bet
          </th>
          <th scope="col" className="py-1.5 border border-black">
            Sum Win
          </th>
          <th scope="col" className="py-1.5 border border-black">
            GGR
          </th>
        </tr>
      </thead>
      <tbody>
        {general_table?.map((item, index) => {
          return (
            <tr key={index} className="bg-brand-dark-grey">
              <td className="py-1 border border-black">{item.vendor}</td>
              <td className="py-1 border border-black">{item.sum_bet}</td>
              <td className="py-1 border border-black">{item.sum_win}</td>
              <td className="py-1 border border-black">{item.ggr}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default VendorTable;

const general_table = [
  {
    vendor: "amatic",
    sum_bet: "66,962.00",
    sum_win: "69,089.53",
    ggr: "-2,127.53",
  },
  {
    vendor: "egt",
    sum_bet: "82,914.28",
    sum_win: "74,393.49",
    ggr: "8,520.79",
  },
  {
    vendor: "netent",
    sum_bet: "1,045.25",
    sum_win: "857.23",
    ggr: "188.02",
  },
];
