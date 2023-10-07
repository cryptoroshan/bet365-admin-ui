"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Modal } from "antd";
import { useModalContext } from "@/contexts/ModalContext";

function ModalCoupon({ item }: any) {
  const { isCouponModalOpen, closeCouponModal } = useModalContext();

  return (
    <Modal
      className="modal-coupon"
      title="Coupon"
      open={isCouponModalOpen}
      onCancel={closeCouponModal}
      footer={[
        <div key="close" className="flex justify-center">
          <button
            className="px-4 py-1.5 rounded-md bg-brand-dialog-button"
            onClick={closeCouponModal}
          >
            Close
          </button>
        </div>,
      ]}
    >
      <section className="px-4">
        <section className="flex flex-col gap-6 bg-brand-dialog items-center pt-4">
          <table className="w-full text-sm text-gray-400 text-center">
            <thead className="text-sm bg-[#222] text-white">
              <tr>
                <th
                  scope="col"
                  className="w-[40%] px-4 text-left py-1.5 border border-gray-600"
                >
                  Id: 422442
                </th>
                <th
                  scope="col"
                  className="px-4 text-left py-1.5 border border-gray-600"
                >
                  Pre
                </th>
              </tr>
            </thead>
            <tbody className="bg-brand-light-grey text-black text-xs text-left">
              <tr>
                <td className="px-4 py-1 border border-gray-600">Date</td>
                <td className="px-4 py-1 border border-gray-600">
                  03/09 03:17
                </td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">Type</td>
                <td className="px-4 py-1 border border-gray-600">Single</td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">User</td>
                <td className="px-4 py-1 border border-gray-600">
                  cryptoRoshan
                </td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">Amount</td>
                <td className="px-4 py-1 border border-gray-600">10.00</td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">Pos.Win.</td>
                <td className="px-4 py-1 border border-gray-600">23.00</td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">Bet Win</td>
                <td className="px-4 py-1 border border-gray-600">23.00</td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">Sum Odds</td>
                <td className="px-4 py-1 border border-gray-600">2.3</td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">Ip</td>
                <td className="px-4 py-1 border border-gray-600">test</td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">Status</td>
                <td className="!p-0 border border-gray-600">
                  <div
                    className={clsx(
                      "bg-green-700 w-20 px-4 py-1 h-full text-center"
                    )}
                  >
                    Won
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">
                  Available Cashout
                </td>
                <td className="px-4 py-1 border border-gray-600">0</td>
              </tr>
              <tr>
                <td className="px-4 py-1 border border-gray-600">Outright</td>
                <td className="px-4 py-1 border border-gray-600">No</td>
              </tr>
            </tbody>
          </table>
          <section className="w-full overflow-scroll md:overflow-hidden">
            <table className="w-full text-sm text-gray-400 text-center">
              <thead className="text-sm bg-[#222] text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Game
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Event
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Prediction
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Odds value
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Result
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-brand-light-grey text-black text-xs">
                <tr>
                  <td className="px-2 py-1 border border-gray-600">22892872</td>
                  <td className="px-2 py-1 border border-gray-600">
                    03/09 17:15
                  </td>
                  <td className="px-2 py-1 border border-gray-600">
                    Mallorca - Athletic Bilbao <br />
                    Both Teams To Score <br />
                    SCORE: 0:0
                  </td>
                  <td className="px-2 py-1 border border-gray-600">Yes</td>
                  <td className="px-2 py-1 border border-gray-600">2.06</td>
                  <td className="px-2 py-1 border border-gray-600">
                    Score <br />
                    0:0 (0:0)
                  </td>
                  <td className="border border-gray-600 px-2">
                    <div className="py-2 bg-brand-red">Lost</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="flex flex-col gap-2 w-full">
            <p className="text-lg text-brand-button-text font-bold">Columns</p>
            <table className="w-full text-sm text-gray-400 text-center">
              <thead className="text-sm bg-[#222] text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Column
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Combination
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Bet
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1.5 border border-gray-600"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-brand-light-grey text-black text-xs">
                <tr>
                  <td className="px-4 py-1 border border-gray-600">4</td>
                  <td className="px-4 py-1 border border-gray-600">15</td>
                  <td className="px-4 py-1 border border-gray-600">0.3</td>
                  <td className="px-4 py-1 border border-gray-600">4.50</td>
                </tr>
                <tr>
                  <td className="px-4 py-1 border border-gray-600">5</td>
                  <td className="px-4 py-1 border border-gray-600">6</td>
                  <td className="px-4 py-1 border border-gray-600">0.6</td>
                  <td className="px-4 py-1 border border-gray-600">3.60</td>
                </tr>
                <tr>
                  <td className="px-4 py-1 border border-gray-600">6</td>
                  <td className="px-4 py-1 border border-gray-600">1</td>
                  <td className="px-4 py-1 border border-gray-600">1</td>
                  <td className="px-4 py-1 border border-gray-600">1.00</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </Modal>
  );
}

export default ModalCoupon;
