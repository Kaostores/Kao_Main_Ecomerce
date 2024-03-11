import { FaSort } from "react-icons/fa";

export default () => {

    const tableItems = [
        {
            name: "",
            email: "",
            position: "",
            salary: ""
        },
        {
            name: "",
            email: "",
            position: "",
            salary: ""
        },
        {
            name: "",
            email: "",
            position: "",
            salary: ""
        },
        {
            name: "",
            email: "",
            position: "",
            salary: ""
        },
        {
            name: "",
            email: "",
            position: "",
            salary: ""
        },
    ]


    return (
        <div className="max-w-screen-xl mx-auto md:px-8">
            <div className="mt-12 overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-[#979ba4] bg-[#f6f8fa] text-[12px]">
                        <tr>
                            <th className="py-3 px-6 flex items-center gap-x-1">ID <div><FaSort /></div></th>
                            <th className="py-3 px-6"><div className="flex items-center gap-x-1">Date  <div><FaSort /></div></div></th>
                            <th className="py-3 px-6 flex items-center gap-x-1"><div className="flex items-center gap-x-1">Type of transaction</div><div><FaSort /></div></th>
                            <th className="py-3 px-6"><div className="flex items-center gap-x-1">Amount</div><div><FaSort /></div></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx} className="odd:bg-white even:bg-[#f0f3fa]">
                                    <td className="px-6 py-3 whitespace-nowrap flex items-center gap-x-4">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{item.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}