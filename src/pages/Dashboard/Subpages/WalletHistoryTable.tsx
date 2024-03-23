import { FaSort } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import {useState} from "react"

export default () => {

    const [filter, setFilter] = useState('All')

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

    const filteredItems = filter === 'All' ? tableItems : tableItems.filter(item => item.Type === filter)

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(tableItems.length / itemsPerPage)

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
);
    
    const handlePageChange = (page: number) => {
    setCurrentPage(page);
};

    return (
        <div>
            <div className="w-[100%] flex items-center mt-[20px] justify-between">
        <div className="flex items-center bg-[#f6f8fa] h-[30px] pl-[5px] pr-[5px]">
          <div onClick={() => setFilter('All')} className={`pl-[20px] pr-[20px] h-[23px] flex justify-center items-center text-[12px] rounded-[3px] cursor-pointer bg-[${filter === 'All' ? 'white' : '#f6f8fa'}]`}>
            All
          </div>

          <div onClick={() => setFilter('Top up')} className={`pl-[20px] pr-[20px] h-[23px] flex justify-center items-center text-[12px] rounded-[3px] ml-[5px] cursor-pointer bg-[${filter === 'Top up' ? 'white' : '#f6f8fa'}]`}>
            Top up
          </div>

          <div onClick={() => setFilter('Payment')} className={`pl-[20px] pr-[20px] h-[23px] flex justify-center items-center text-[12px] rounded-[3px] ml-[5px] cursor-pointer bg-[${filter === 'Payment' ? 'white' : '#f6f8fa'}]`}>
            Payment
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[270px] h-[27px] flex items-center pl-[10px] bg-[white] text-[12px] rounded-sm ml-[5px] pr-[5px]">
            <div className="text-[17px]"><CiSearch /></div>
            <input placeholder="Search by ID" type="text" className="ml-[5px] outline-none flex-1" />
          </div>
          <div className="pl-[10px] pr-[10px] h-[27px] flex justify-center items-center bg-[white] text-[12px] rounded-sm ml-[10px] cursor-pointer">
            <div className="mr-[7px] text-iconGray"><IoFilterOutline /></div>
            Filter
          </div>
          <div className="pl-[10px] pr-[10px] h-[27px] flex justify-center items-center bg-[white] text-[12px] rounded-sm ml-[10px] cursor-pointer">
            <div className="mr-[7px] text-iconGray text-[17px]"><GoSortDesc /></div>
            Sort by
            <div className="text-iconGray ml-[7px]"><IoIosArrowDown /></div>
          </div>
        </div>
      </div>
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
                            paginatedItems.map((item, idx) => (
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
        <div className="w-[100%] mt-[20px] flex justify-between items-center">
            <h3 className="text-[13px] font-[500] ">Showing {Math.min(currentPage * itemsPerPage, tableItems.length)} of{' '} {tableItems.length}</h3>
            <div className="mt-[10px]">
                <ul className="p-0 list-none flex">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-3 py-1 mr-[10px] rounded-md cursor-pointer ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
            </div>
            <button className="invisible">gfgfg</button>
        </div>
        </div>
    )
}