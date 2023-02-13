import * as React from "react";
import token1 from "../../src/assets/Shape.png";
import token2 from "../../src/assets/Shape2.png";
import token3 from "../../src/assets/Shape3.png";
import actionVector1 from "../../src/assets/actionVector1.png";
import actionVector2 from "../../src/assets/actionVector2.png";
import actionVector3 from "../../src/assets/actionVector3.png";
import statusOk from "../../src/assets/statusOk.png";
import statusNo from "../../src/assets/statusNo.png";

import token1Webp from "../../src/assets/Shape.webp";
import token2Webp from "../../src/assets/Shape2.webp";
import token3Webp from "../../src/assets/Shape3.webp";
import actionVector1Webp from "../../src/assets/actionVector1.webp";
import actionVector2Webp from "../../src/assets/actionVector2.webp";
import actionVector3Webp from "../../src/assets/actionVector3.webp";
import statusOkWebp from "../../src/assets/statusOk.webp";
import statusNoWebp from "../../src/assets/statusNo.webp";

const data = [
  {
    tokenImg: token1,
    tokenImgWebp: token1Webp,
    tokenName: "USDC",
    action: actionVector1,
    actionWebp: actionVector1Webp,
    date: "30.12.2022",
    from: "213g...g6mm",
    to: "456h...h8bb",
    amount: "150",
    gas_fee: "0.010",
    status: statusOk,
    statusWebp: statusOkWebp,
  },
  {
    tokenImg: token2,
    tokenImgWebp: token2Webp,
    tokenName: "MATIC",
    action: actionVector2,
    actionWebp: actionVector2Webp,
    date: "30.12.2022",
    from: "213g...g6mm",
    to: "456h...h8bb",
    amount: "1.5",
    gas_fee: "0.010",
    status: statusOk,
    statusWebp: statusOkWebp,
  },
  {
    tokenImg: token3,
    tokenImgWebp: token3Webp,
    tokenName: "ETH",
    action: actionVector3,
    actionWebp: actionVector3Webp,
    date: "30.12.2022",
    from: "213g...g6mm",
    to: "456h...h8bb",
    amount: "5.4",
    gas_fee: "0.010",
    status: statusNo,
    statusWebp: statusNoWebp,
  },
  {
    tokenImg: token1,
    tokenImgWebp: token1Webp,
    tokenName: "USDC",
    action: actionVector2,
    actionWebp: actionVector2Webp,
    date: "30.12.2022",
    from: "213g...g6mm",
    to: "456h...h8bb",
    amount: "450",
    gas_fee: "0.010",
    status: statusOk,
    statusWebp: statusOkWebp,
  },
  {
    tokenImg: token2,
    tokenImgWebp: token2Webp,
    tokenName: "MATIC",
    action: actionVector2,
    actionWebp: actionVector2Webp,
    date: "30.12.2022",
    from: "213g...g6mm",
    to: "456h...h8bb",
    amount: "1.5",
    gas_fee: "0.010",
    status: statusOk,
    statusWebp: statusOkWebp,
  },
];

export default function Transactions() {
  return (
    <div className="w-full text-[#464646]">
      <table className="table-auto w-full text-white border-separate border-spacing-y-3 rounded-md">
        <thead>
          <tr className="text-[#464646]">
            <th className="px-4 py-2 text-center">Token</th>
            <th className="px-4 py-2 text-center">Actions</th>
            <th className="px-4 py-2 text-center">Date</th>
            <th className="px-4 py-2 text-center">From</th>
            <th className="px-4 py-2 text-center">To</th>
            <th className="px-4 py-2 text-center">Amount</th>
            <th className="px-4 py-2 text-center">Gas Fee</th>
            <th className="px-4 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr className="odd:bg-[#373737] even:bg-[#1D1D1D] rounded-md">
                <td className="px-4 py-2 text-center rounded-l-2xl">
                  <div className="inline-flex items-center gap-x-5">
                    <picture>
                      <source srcSet={item.tokenImgWebp} />
                      <img src={item.tokenImg} alt={item.tokenName} />
                    </picture>
                    {item.tokenName}
                  </div>
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="inline-flex align-center">
                    <picture>
                      <source srcSet={item.actionWebp} />
                      <img src={item.action} alt="action" />
                    </picture>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">{item.date}</td>
                <td className="px-4 py-2 text-center">{item.from}</td>
                <td className="px-4 py-2 text-center">{item.to}</td>
                <td className="px-4 py-2 text-center">{item.amount}</td>
                <td className="px-4 py-2 text-center">{item.gas_fee}</td>
                <td className="px-4 py-2 text-center rounded-r-2xl">
                  <picture>
                    <source srcSet={item.statusWebp} />
                    <img src={item.status} alt="status" className="m-auto" />
                  </picture>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
