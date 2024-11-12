"use client";

import { useState, useEffect, useMemo } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface Transaction {
	id: string;
	date: string;
	type: "Payment" | "Top up";
	amount: string;
}

// Mock data for the table
const mockData: Transaction[] = [
	{ id: "#4170", date: "2023-08-30", type: "Payment", amount: "NGN 3,000" },
	{ id: "#4171", date: "2023-08-30", type: "Top up", amount: "NGN 3,000" },
	{ id: "#4172", date: "2023-08-29", type: "Payment", amount: "NGN 2,500" },
	{ id: "#4173", date: "2023-08-29", type: "Payment", amount: "NGN 4,000" },
	{ id: "#4174", date: "2023-08-28", type: "Top up", amount: "NGN 5,000" },
	{ id: "#4175", date: "2023-08-28", type: "Payment", amount: "NGN 1,500" },
	{ id: "#4176", date: "2023-08-27", type: "Top up", amount: "NGN 3,500" },
	{ id: "#4177", date: "2023-08-27", type: "Top up", amount: "NGN 2,000" },
	{ id: "#4178", date: "2023-08-26", type: "Payment", amount: "NGN 3,200" },
	{ id: "#4179", date: "2023-08-26", type: "Top up", amount: "NGN 4,500" },
	{ id: "#4180", date: "2023-08-25", type: "Payment", amount: "NGN 2,800" },
	{ id: "#4181", date: "2023-08-25", type: "Top up", amount: "NGN 3,300" },
];

export default function PaymentHistory() {
	const [dateRange, setDateRange] = useState<any>({
		from: new Date(2023, 7, 14),
		to: new Date(2023, 7, 30),
	});
	const [filter, setFilter] = useState<"All" | "Top up" | "Payment">("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [sortBy, setSortBy] = useState<
		"date-asc" | "date-desc" | "amount-asc" | "amount-desc"
	>("date-desc");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const filteredAndSortedData = useMemo(() => {
		let result = mockData;

		// Apply date range filter
		if (dateRange.from && dateRange.to) {
			result = result.filter((item) => {
				const itemDate = new Date(item.date);
				return itemDate >= dateRange.from && itemDate <= dateRange.to!;
			});
		}

		// Apply type filter
		if (filter !== "All") {
			result = result.filter((item) => item.type === filter);
		}

		// Apply search filter
		if (searchQuery) {
			result = result.filter((item) =>
				item.id.toLowerCase().includes(searchQuery.toLowerCase()),
			);
		}

		// Apply sorting
		result.sort((a, b) => {
			switch (sortBy) {
				case "date-asc":
					return new Date(a.date).getTime() - new Date(b.date).getTime();
				case "date-desc":
					return new Date(b.date).getTime() - new Date(a.date).getTime();
				case "amount-asc":
					return (
						parseInt(a.amount.replace(/\D/g, "")) -
						parseInt(b.amount.replace(/\D/g, ""))
					);
				case "amount-desc":
					return (
						parseInt(b.amount.replace(/\D/g, "")) -
						parseInt(a.amount.replace(/\D/g, ""))
					);
				default:
					return 0;
			}
		});

		return result;
	}, [dateRange, filter, searchQuery, sortBy]);

	const paginatedData = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);
	}, [filteredAndSortedData, currentPage]);

	const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);

	useEffect(() => {
		setCurrentPage(1);
	}, [dateRange, filter, searchQuery, sortBy]);

	return (
		<div className=' w-full  '>
			<h1 className='text-xl font-bold mb-2'>Payment History</h1>
			<div className='flex sm:flex-col justify-between items-center sm:items-start mb-4  sm:space-y-0 gap-10 w-full sm:gap-5'>
				<div className='flex sm:flex-wrap gap-2'>
					<Button
						className={`${filter === "All" ? "text-white" : ""}`}
						variant={filter === "All" ? "default" : "outline"}
						onClick={() => setFilter("All")}>
						All
					</Button>
					<Button
						className={`${filter === "Top up" ? "text-white" : ""}`}
						variant={filter === "Top up" ? "default" : "outline"}
						onClick={() => setFilter("Top up")}>
						Top up
					</Button>
					<Button
						className={`${filter === "Payment" ? "text-white" : ""}`}
						variant={filter === "Payment" ? "default" : "outline"}
						onClick={() => setFilter("Payment")}>
						Payment
					</Button>
				</div>
				<div className='flex  sm:flex-col sm:gap-3  items-center sm:items-start  sm:space-y-0  w-full sm:w-auto'>
					<Input
						placeholder='Search by ID'
						className='w-full sm:w-64'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant='outline'
								className='w-full sm:w-[280px] justify-start text-left font-normal bg-white'>
								<CalendarIcon className='mr-2 h-4 w-4' />
								{dateRange.from ? (
									dateRange.to ? (
										<>
											{dateRange.from.toLocaleDateString()} -{" "}
											{dateRange.to.toLocaleDateString()}
										</>
									) : (
										dateRange.from.toLocaleDateString()
									)
								) : (
									<span>Pick a date</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0 ' align='start'>
							<Calendar
								initialFocus
								mode='range'
								defaultMonth={dateRange.from}
								selected={dateRange}
								onSelect={setDateRange}
								numberOfMonths={2}
							/>
							<div className='grid grid-cols-2 gap-2 p-3 text-white'>
								<Button
									size='sm'
									onClick={() =>
										setDateRange({ from: new Date(), to: new Date() })
									}>
									Today
								</Button>
								<Button
									size='sm'
									onClick={() => {
										const to = new Date();
										const from = new Date(
											to.getTime() - 7 * 24 * 60 * 60 * 1000,
										);
										setDateRange({ from, to });
									}}>
									Last 7 days
								</Button>
								<Button
									size='sm'
									onClick={() => {
										const to = new Date();
										const from = new Date(
											to.getTime() - 30 * 24 * 60 * 60 * 1000,
										);
										setDateRange({ from, to });
									}}>
									Last 30 days
								</Button>
								<Button
									size='sm'
									onClick={() => {
										const to = new Date();
										const from = new Date(
											to.getFullYear(),
											to.getMonth() - 3,
											to.getDate(),
										);
										setDateRange({ from, to });
									}}>
									Last 3 months
								</Button>
							</div>
						</PopoverContent>
					</Popover>
					<Select
						value={sortBy}
						onValueChange={(value: any) => setSortBy(value)}>
						<SelectTrigger className='w-full sm:w-[180px]'>
							<SelectValue placeholder='Sort by' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='date-asc'>Date (Ascending)</SelectItem>
							<SelectItem value='date-desc'>Date (Descending)</SelectItem>
							<SelectItem value='amount-asc'>Amount (Ascending)</SelectItem>
							<SelectItem value='amount-desc'>Amount (Descending)</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className='overflow-x-auto'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className='w-[100px]'>ID</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Type of transaction</TableHead>
							<TableHead className='text-right'>Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedData.map((row, index) => (
							<TableRow
								key={row.id}
								className={index % 2 === 0 ? "bg-muted/50" : ""}>
								<TableCell className='font-medium'>{row.id}</TableCell>
								<TableCell>{new Date(row.date).toLocaleDateString()}</TableCell>
								<TableCell>{row.type}</TableCell>
								<TableCell className='text-right'>{row.amount}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className='mt-4 flex justify-between items-center'>
				<div>
					Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
					{Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)}{" "}
					of {filteredAndSortedData.length} entries
				</div>
				<div className='flex space-x-2'>
					<Button
						variant='outline'
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}>
						Previous
					</Button>
					<Button
						variant='outline'
						onClick={() =>
							setCurrentPage((prev) => Math.min(prev + 1, totalPages))
						}
						disabled={currentPage === totalPages}>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}
