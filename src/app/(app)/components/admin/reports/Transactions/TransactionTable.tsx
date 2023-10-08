interface TransactionTableProps {
  currentPage: number
}

const TransactionTable = ({ currentPage }: TransactionTableProps) => {
  return (
    <div className="w-full overflow-x-scroll md:overflow-hidden">
      <table className="w-full text-sm text-white text-center">
        <thead className="text-sm bg-brand-yellow text-black">
          <tr>
            <th scope="col" className="px-2 py-1.5 border border-gray-600">
              Date
            </th>
            <th scope="col" className="px-2 py-1.5 border border-gray-600">
              Description
            </th>
            <th scope="col" className="px-2 py-1.5 border border-gray-600">
              Type
            </th>
            <th scope="col" className="px-2 py-1.5 border border-gray-600">
              Kind
            </th>
            <th scope="col" className="px-2 py-1.5 border border-gray-600">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {transaction_table?.map((item, index) => {
            if (index >= currentPage * 5 && index < (currentPage + 1) * 5)
              return (
                <tr key={index} className="bg-[#666]">
                  <td className="px-2 py-1 border border-gray-600">{item.date}</td>
                  <td className="px-2 py-1 border border-gray-600">
                    {item.description}
                  </td>
                  <td className="px-2 py-1 border border-gray-600">{item.type}</td>
                  <td className="px-2 py-1 border border-gray-600">{item.kind}</td>
                  <td className="px-2 py-1 border border-gray-600">{item.amount}</td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

const transaction_table = [
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan1",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan2",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan3",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan4",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan5",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan6",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan7",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan8",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan9",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan10",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan11",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
  {
    date: "07/09 21:43",
    description: "From cryptoRoshan12",
    type: "In",
    kind: "",
    amount: "5000.00",
  },
];
