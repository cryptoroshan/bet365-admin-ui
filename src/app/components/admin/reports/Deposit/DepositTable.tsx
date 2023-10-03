const DepositTable = ({ currentPage }) => {
  return (
    <table className="w-full text-sm text-white text-center">
      <thead className="text-sm bg-brand-yellow text-black">
        <tr>
          <th scope="col" className="py-1.5 border border-gray-600">
            Id
          </th>
          <th scope="col" className="py-1.5 border border-gray-600">
            User
          </th>
          <th scope="col" className="py-1.5 border border-gray-600">
            Method
          </th>
          <th scope="col" className="py-1.5 border border-gray-600">
            Amount
          </th>
          <th scope="col" className="py-1.5 border border-gray-600">
            Date
          </th>
          <th scope="col" className="py-1.5 border border-gray-600">
            Description
          </th>
          <th scope="col" className="py-1.5 border border-gray-600">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {deposit_table?.map((item, index) => {
          if (index >= currentPage*5 && index < (currentPage+1)*5)
            return (
              <tr key={index} className="bg-[#666]">
                <td className="py-1 border border-gray-600">{item.id}</td>
                <td className="py-1 border border-gray-600">{item.user}</td>
                <td className="py-1 border border-gray-600">{item.method}</td>
                <td className="py-1 border border-gray-600">{item.amount}</td>
                <td className="py-1 border border-gray-600">{item.date}</td>
                <td className="py-1 border border-gray-600">{item.description}</td>
                <td className="py-1 border border-gray-600">{item.status}</td>
              </tr>
            );
        })}
      </tbody>
    </table>
  );
};

export default DepositTable;

const deposit_table = [
  {
    id: "333",
    user: "cryptoRoshan",
    method: "VPOS Voucher",
    amount: "10.00 EUR",
    date: "08/09/2023 07:55:05",
    description: "7112892833014897",
    status: "Success"
  },
  {
    id: "334",
    user: "cryptoRoshan",
    method: "VPOS Voucher",
    amount: "10.00 EUR",
    date: "08/09/2023 07:55:05",
    description: "7112892833014897",
    status: "Success"
  },
  {
    id: "335",
    user: "cryptoRoshan",
    method: "VPOS Voucher",
    amount: "10.00 EUR",
    date: "08/09/2023 07:55:05",
    description: "7112892833014897",
    status: "Success"
  },
  {
    id: "336",
    user: "cryptoRoshan",
    method: "VPOS Voucher",
    amount: "10.00 EUR",
    date: "08/09/2023 07:55:05",
    description: "7112892833014897",
    status: "Success"
  },
  {
    id: "337",
    user: "cryptoRoshan",
    method: "VPOS Voucher",
    amount: "10.00 EUR",
    date: "08/09/2023 07:55:05",
    description: "7112892833014897",
    status: "Success"
  },
  {
    id: "338",
    user: "cryptoRoshan",
    method: "VPOS Voucher",
    amount: "10.00 EUR",
    date: "08/09/2023 07:55:05",
    description: "7112892833014897",
    status: "Success"
  },
  {
    id: "339",
    user: "cryptoRoshan",
    method: "VPOS Voucher",
    amount: "10.00 EUR",
    date: "08/09/2023 07:55:05",
    description: "7112892833014897",
    status: "Success"
  },
  {
    id: "340",
    user: "cryptoRoshan",
    method: "VPOS Voucher",
    amount: "10.00 EUR",
    date: "08/09/2023 07:55:05",
    description: "7112892833014897",
    status: "Success"
  },
];