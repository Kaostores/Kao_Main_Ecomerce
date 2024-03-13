import { FaSort } from "react-icons/fa";

export default () => {

    const tableItems = [
        {
            ID: "#4170",
            Date: "10/08/2023",
            Type: "Payment",
            Amount: "NGN 3,000"
        },
        {
            ID: "#4170",
            Date: "10/08/2023",
            Type: "Top up",
            Amount: "NGN 3,000"
        },
        {
            ID: "#4170",
            Date: "10/08/2023",
            Type: "Payment",
            Amount: "NGN 3,000"
        },
        {
            ID: "#4170",
            Date: "10/08/2023",
            Type: "Payment",
            Amount: "NGN 3,000"
        },
        {
            ID: "#4170",
            Date: "10/08/2023",
            Type: "Top up",
            Amount: "NGN 3,000"
        },
        {
            ID: "#4170",
            Date: "10/08/2023",
            Type: "Payment",
            Amount: "NGN 3,000"
        },
        {
            ID: "#4170",
            Date: "10/08/2023",
            Type: "Top up",
            Amount: "NGN 3,000"
        },
        {
            ID: "#4170",
            Date: "10/08/2023",
            Type: "Top up",
            Amount: "NGN 3,000"
        },
    ]


    return (
        <div className="max-w-screen-xl mx-auto md:px-8">
            <div className="mt-12 overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-[#979ba4] bg-[#f6f8fa] text-[12px] mb-2">
                        <tr>
                            <th className="py-3 px-6">ID <FaSort className="inline-block ml-1"/></th>
                            <th className="py-3 px-6">Date <FaSort className="inline-block ml-1"/></th>
                            <th className="py-3 px-6">Type of transaction <FaSort className="inline-block ml-1"/></th>
                            <th className="py-3 px-6">Amount <FaSort className="inline-block ml-1"/></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx} className="odd:bg-white even:bg-[#f0f3fa]">
                                    <td className="px-6 py-3 whitespace-nowrap flex items-center gap-x-4 text-[11px] font-[600]">
                                        {item.ID}
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap text-[11px] font-[600]">{item.Date}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-[11px] font-[600]">{item.Type}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-[11px] font-[600]">{item.Amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}