import * as React from "react";
import actionVector1 from "../../src/assets/actionVector1.png";
import actionVector2 from "../../src/assets/actionVector2.png";
import actionVector3 from "../../src/assets/actionVector3.png";
import statusOk from "../../src/assets/statusOk.png";
import statusNo from "../../src/assets/statusNo.png";
import collection1 from "../../src/assets/collection1.png";
import collection2 from "../../src/assets/collection2.png";
import collection3 from "../../src/assets/collection3.png";
import collection4 from "../../src/assets/collection4.png";
import actionVector1Webp from "../../src/assets/actionVector1.webp";
import actionVector2Webp from "../../src/assets/actionVector2.webp";
import actionVector3Webp from "../../src/assets/actionVector3.webp";
import statusOkWebp from "../../src/assets/statusOk.webp";
import statusNoWebp from "../../src/assets/statusNo.webp";
import collection1Webp from "../../src/assets/collection1.webp";
import collection2Webp from "../../src/assets/collection2.webp";
import collection3Webp from "../../src/assets/collection3.webp";
import collection4Webp from "../../src/assets/collection4.webp";

const data = [
  {
    collection: collection1,
    collectionWebp: collection1Webp,
    collectionActio: actionVector1,
    collectionActioWebp: actionVector1Webp,
    name: "AirHead",
    date: "30.12.2022",
    time: "8:43",
    price: "1.66 SOL",
    subject: "#145",
    recipient: "0x1234...5678",
    status: statusOk,
    statusWebp: statusOkWebp,
  },
  {
    collection: collection2,
    collectionWebp: collection2Webp,
    collectionActio: actionVector2,
    collectionActioWebp: actionVector2Webp,
    name: "AirHead",
    date: "30.12.2022",
    time: "8:43",
    price: "1.66 SOL",
    subject: "#145",
    recipient: "0x1234...5678",
    status: statusOk,
    statusWebp: statusOkWebp,
  },
  {
    collection: collection3,
    collectionWebp: collection3Webp,
    collectionActio: actionVector3,
    collectionActioWebp: actionVector3Webp,
    name: "AirHead",
    date: "30.12.2022",
    time: "8:43",
    price: "1.66 SOL",
    subject: "#145",
    recipient: "0x1234...5678",
    status: statusNo,
    statusWebp: statusNoWebp,
  },
  {
    collection: collection4,
    collectionWebp: collection4Webp,
    collectionActio: actionVector1,
    collectionActioWebp: actionVector1Webp,
    name: "AirHead",
    date: "30.12.2022",
    time: "8:43",
    price: "1.66 SOL",
    subject: "#145",
    recipient: "0x1234...5678",
    status: statusOk,
    statusWebp: statusOkWebp,
  },
];

export default function NftProfiler() {
  return (
    <div>
      <div className="text-[#464646] pb-2">TOP 3</div>
      <div className="grid grid-cols-3 gap-4 pb-4">
        <div className="inline-flex bg-[#373737] text-white place-content-around items-center p-2 rounded-2xl">
          <picture>
            <source srcSet={collection1Webp} />
            <img src={collection1} alt="collection1" />
          </picture>
          <div>AirHead</div>
          <div>SOL</div>
          <div className="text-[#CEFF86]">+1.66%</div>
        </div>
        <div className="inline-flex bg-[#373737] text-white place-content-around items-center p-2 rounded-2xl">
          <picture>
            <source srcSet={collection1Webp} />
            <img src={collection1} alt="collection1" />
          </picture>
          <div>AirHead</div>
          <div>SOL</div>
          <div className="text-[#CEFF86]">+1.66%</div>
        </div>
        <div className="inline-flex bg-[#373737] text-white place-content-around items-center p-2 rounded-2xl">
          <picture>
            <source srcSet={collection1Webp} />
            <img src={collection1} alt="collection1" />
          </picture>
          <div>AirHead</div>
          <div>SOL</div>
          <div className="text-[#CEFF86]">+1.66%</div>
        </div>
      </div>
      <div className="w-full text-[#464646]">
        <table className="table-auto w-full text-white border-separate border-spacing-y-3 rounded-md">
          <thead>
            <tr className="text-[#464646]">
              <th className="px-4 py-2 text-center">Collection</th>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Date</th>
              <th className="px-4 py-2 text-center">Time</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Subject</th>
              <th className="px-4 py-2 text-center">Recipient</th>
              <th className="px-4 py-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr
                  className="odd:bg-[#373737] even:bg-[#1D1D1D] rounded-md"
                  key={i}
                >
                  <td className="px-4 py-2 text-center rounded-l-2xl">
                    <div className="inline-flex items-center gap-x-5">
                      <picture>
                        <source srcSet={item.collectionWebp} />
                        <img src={item.collection} alt={item.name} />
                      </picture>
                      <picture>
                        <source srcSet={item.collectionActioWebp} />
                        <img src={item.collectionActio} alt={item.name} />
                      </picture>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center">{item.name}</td>
                  <td className="px-4 py-2 text-center">{item.date}</td>
                  <td className="px-4 py-2 text-center">{item.time}</td>
                  <td className="px-4 py-2 text-center">{item.price}</td>
                  <td className="px-4 py-2 text-center">{item.subject}</td>
                  <td className="px-4 py-2 text-center">{item.recipient}</td>
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
    </div>
  );
}
