import * as React from 'react';
import token1 from '../../src/assets/Shape.png';
import token2 from '../../src/assets/Shape2.png';
import token3 from '../../src/assets/Shape3.png';
import actionVector1 from '../../src/assets/actionVector1.png';
import actionVector2 from '../../src/assets/actionVector2.png';
import actionVector3 from '../../src/assets/actionVector3.png';
import statusOk from '../../src/assets/statusOk.png';
import statusNo from '../../src/assets/statusNo.png';

const data = [
    {
        tokenImg: token1,
        tokenName: "USDC",
        action: actionVector1,
        date: "30.12.2022",
        from: "213g...g6mm",
        to: "456h...h8bb",
        amount: "150",
        gas_fee: "0.010",
        status: statusOk,
    },
    {
        tokenImg: token2,
        tokenName: "MATIC",
        action: actionVector2,
        date: "30.12.2022",
        from: "213g...g6mm",
        to: "456h...h8bb",
        amount: "1.5",
        gas_fee: "0.010",
        status: statusOk,
    },
    {
        tokenImg: token3,
        tokenName: "ETH",
        action: actionVector3,
        date: "30.12.2022",
        from: "213g...g6mm",
        to: "456h...h8bb",
        amount: "5.4",
        gas_fee: "0.010",
        status: statusNo,
    },
    {
        tokenImg: token1,
        tokenName: "USDC",
        action: actionVector2,
        date: "30.12.2022",
        from: "213g...g6mm",
        to: "456h...h8bb",
        amount: "450",
        gas_fee: "0.010",
        status: statusOk,
    }
]

export default function Transactions() {
    return (
        <div className='w-full text-[#464646]'>
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                        <th className='px-4 py-2'>Token</th>
                        <th className='px-4 py-2'>Actions</th>
                        <th className='px-4 py-2'>Date</th>
                        <th className='px-4 py-2'>From</th>
                        <th className='px-4 py-2'>To</th>
                        <th className='px-4 py-2'>Amount</th>
                        <th className='px-4 py-2'>Gas Fee</th>
                        <th className='px-4 py-2'>Status</th>
                    </tr>
                    {data.map((item, i) => {
                        return (
                            <tr>
                            <td className='border px-4 py-2'>
                                <img src={item.tokenImg} alt={item.tokenName}/>  
                                {item.tokenName}  
                            </td>
                            <td className='border px-4 py-2'>
                                <img src={item.action} alt='action' />
                            </td>
                            <td className='border px-4 py-2'>
                                {item.date}
                            </td>
                            <td className='border px-4 py-2'>
                                {item.from}
                            </td>
                            <td className='border px-4 py-2'>
                                {item.to}
                            </td>
                            <td className='border px-4 py-2'>
                                {item.amount}
                            </td>
                            <td className='border px-4 py-2'>
                                {item.gas_fee}
                            </td>
                            <td className='border px-4 py-2'>
                                <img src={item.status} alt='status' />
                            </td>
                        </tr>
                        )
                    })}
                </thead>
            </table>
        </div>
    )
}