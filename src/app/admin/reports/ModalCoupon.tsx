"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Modal } from "antd";
import { useModalContext } from "@/contexts/ModalContext";

function ModalCoupon({ item }: any) {
  const { isCouponModalOpen, closeCouponModal } = useModalContext();

  return (
    <div>
      <Modal
        title="Coupon"
        open={isCouponModalOpen}
        onCancel={closeCouponModal}
        width="calc(70vw)"
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
        <section className="flex flex-col gap-6 bg-brand-dialog items-center px-4 pt-4">
          <table className="w-full text-sm text-gray-400 text-center">
            <thead className="text-sm bg-[#222] text-white">
              <tr>
                <th scope="col" className="py-1.5 border border-gray-600">
                  Id: 422442
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  Bonus Pre
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-black text-xs">
              <tr>
                <td className="py-1 border border-gray-600">Date</td>
                <td className="py-1 border border-gray-600">03/09 03:17</td>
              </tr>
              <tr>
                <td className="py-1 border border-gray-600">Type</td>
                <td className="py-1 border border-gray-600">Multiple</td>
              </tr>
            </tbody>
          </table>
          <table className="w-full text-sm text-gray-400 text-center">
            <thead className="text-sm bg-[#222] text-white">
              <tr>
                <th scope="col" className="py-1.5 border border-gray-600">
                  Game
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  Start Date
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  Event
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  Prediction
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  Odds value
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  Result
                </th>
                <th scope="col" className="py-1.5 border border-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-black text-xs">
              <tr>
                <td className="py-1 border border-gray-600">22892872</td>
                <td className="py-1 border border-gray-600">03/09 17:15</td>
                <td className="py-1 border border-gray-600">
                  Mallorca - Athletic Bilbao <br />
                  Both Teams To Score <br />
                  SCORE: 0:0
                </td>
                <td className="py-1 border border-gray-600">Yes</td>
                <td className="py-1 border border-gray-600">2.06</td>
                <td className="py-1 border border-gray-600">
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
      </Modal>
    </div>
  );
}

export default ModalCoupon;