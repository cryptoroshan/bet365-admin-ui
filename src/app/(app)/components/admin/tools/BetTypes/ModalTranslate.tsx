import { Modal } from "antd";

import { useModalContext } from "@/contexts/ModalContext";

const ModalTransalte = () => {
  const { isTranslateModalOpen, closeTranslateModal } = useModalContext();

  return (
    <Modal
      title="Translate - Match Result (3-ways)"
      open={isTranslateModalOpen}
      onCancel={closeTranslateModal}
      footer={[
        <div key="Save" className="flex gap-2 justify-center">
          <button
            className="px-4 py-1.5 rounded-md bg-[#333] text-brand-light-grey"
            onClick={closeTranslateModal}
          >
            Save
          </button>
          <button
            className="px-4 py-1.5 rounded-md bg-[#333] text-brand-light-grey"
            onClick={closeTranslateModal}
          >
            Close
          </button>
        </div>,
      ]}
    >
      <section className="flex flex-col gap-4 bg-brand-dialog items-center pt-4 px-4">
        <table className="w-full text-sm text-white bg-[#666] text-center">
          <thead className="text-sm bg-brand-yellow text-black">
            <tr>
              <th scope="col" className="px-2 py-1.5 border border-gray-600">
                Id
              </th>
              <th scope="col" className="px-2 py-1.5 border border-gray-600">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {matchResultList.map((item: any, index: number) => {
              return (
                <tr key={index} className="cursor-pointer">
                  <td className="px-2 py-1.5 border border-gray-600">{item.id}</td>
                  <td className="px-2 py-1.5 border border-gray-600 bg-white text-black">{item.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </Modal>
  );
};

export default ModalTransalte;

const matchResultList = [
  {
    id: "EN",
    name: "Match Result (3-ways)",
  },
  {
    id: "ES",
    name: "Ganador - 3 vias (Hora regular)",
  },
  {
    id: "DE",
    name: "Spielergebnis 1*2",
  }
];
