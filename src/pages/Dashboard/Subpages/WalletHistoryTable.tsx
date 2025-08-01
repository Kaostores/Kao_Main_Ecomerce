// "use client";

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
import { useGetAllTransactiosQuery } from "@/services/apiSlice";

interface Transaction {
	id: string;
	date: string;
	type: "debit" | "credit"; // Adjust based on your data type
	amount: string;
}

export default function PaymentHistory() {
	const { data: transactions } = useGetAllTransactiosQuery({});
	console.log("Transactions response:", transactions); // Log the response for debugging

	const [dateRange, setDateRange] = useState<any>({
		from: null,
		to: null,
	});
	const [filter, setFilter] = useState<"All" | "debit">("All"); // Default to "All"
	const [searchQuery, setSearchQuery] = useState("");
	const [sortBy, setSortBy] = useState<
		"date-asc" | "date-desc" | "amount-asc" | "amount-desc"
	>("date-desc");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const filteredAndSortedData = useMemo(() => {
		if (!transactions?.data) return []; // Return empty array if no data

		let result = [...transactions.data]; // Copy the transactions data to avoid direct mutation

		// Apply date range filter safely
		if (dateRange.from && dateRange.to) {
			result = result.filter((item: Transaction) => {
				const itemDate = new Date(item.date);
				return (
					itemDate >= new Date(dateRange.from) &&
					itemDate <= new Date(dateRange.to)
				);
			});
		}

		// Apply type filter
		if (filter !== "All") {
			result = result.filter((item: Transaction) => item.type === filter);
		}

		// Apply search filter
		if (searchQuery) {
			result = result.filter((item: Transaction) =>
				item.id.toLowerCase().includes(searchQuery.toLowerCase()),
			);
		}

		// Apply sorting
		result.sort((a: Transaction, b: Transaction) => {
			switch (sortBy) {
				case "date-asc":
					return new Date(a.date).getTime() - new Date(b.date).getTime();
				case "date-desc":
					return new Date(b.date).getTime() - new Date(a.date).getTime();
				case "amount-asc":
					return parseFloat(a.amount) - parseFloat(b.amount);
				case "amount-desc":
					return parseFloat(b.amount) - parseFloat(a.amount);
				default:
					return 0;
			}
		});

		return result;
	}, [transactions, dateRange, filter, searchQuery, sortBy]);

	const paginatedData = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);
	}, [filteredAndSortedData, currentPage]);

	const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);

	useEffect(() => {
		setCurrentPage(1); // Reset to the first page on filter or search change
	}, [dateRange, filter, searchQuery, sortBy]);

	return (
		<div className='w-full'>
			<h1 className='text-xl font-bold mb-2'>Payment History</h1>
			<div className='flex sm:flex-col justify-between items-center sm:items-start mb-4 sm:space-y-0 gap-10 w-full sm:gap-5'>
				<div className='flex sm:flex-wrap gap-2'>
					<Button
						className={`${filter === "All" ? "text-white" : ""}`}
						variant={filter === "All" ? "default" : "outline"}
						onClick={() => setFilter("All")}>
						All
					</Button>
					<Button
						className={`${filter === "debit" ? "text-white" : ""}`}
						variant={filter === "debit" ? "default" : "outline"}
						onClick={() => setFilter("debit")}>
						Debit
					</Button>
				</div>
				<div className='flex sm:flex-col sm:gap-3 items-center sm:items-start sm:space-y-0 w-full sm:w-auto'>
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
								{dateRange.from && dateRange.to
									? `${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`
									: "Select Date Range"}
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0' align='start'>
							<Calendar
								mode='range'
								selected={dateRange}
								onSelect={(range) =>
									setDateRange(range || { from: null, to: null })
								}
								numberOfMonths={2}
							/>

							<div className='grid grid-cols-2 gap-2 p-3 text-white'>
								<Button
									size='sm'
									onClick={() => {
										const today = new Date();
										setDateRange({ from: today, to: today });
									}}>
									Today
								</Button>
								<Button
									size='sm'
									onClick={() => {
										const today = new Date();
										const last7Days = new Date(today);
										last7Days.setDate(today.getDate() - 7);
										setDateRange({ from: last7Days, to: today });
									}}>
									Last 7 days
								</Button>
								<Button
									size='sm'
									onClick={() => {
										const today = new Date();
										const last30Days = new Date(today);
										last30Days.setDate(today.getDate() - 30);
										setDateRange({ from: last30Days, to: today });
									}}>
									Last 30 days
								</Button>
								<Button
									size='sm'
									onClick={() => {
										const today = new Date();
										const last3Months = new Date(today);
										last3Months.setMonth(today.getMonth() - 3);
										setDateRange({ from: last3Months, to: today });
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
							<TableHead>Type of Transaction</TableHead>
							<TableHead>Description</TableHead>
							<TableHead className='text-right'>Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedData.length === 0 ? (
							<TableRow>
								<TableCell colSpan={4} className='text-center'>
									No transactions found.
								</TableCell>
							</TableRow>
						) : (
							paginatedData.map((row, index) => (
								<TableRow
									key={row.id}
									className={index % 2 === 0 ? "bg-muted/50" : ""}>
									<TableCell className='font-medium'>
										#{row.id?.slice(15, 23)}
									</TableCell>
									<TableCell>
										{new Date(row.date).toLocaleDateString()}
									</TableCell>
									<TableCell>{row.type}</TableCell>
									<TableCell>{row.description}</TableCell>
									<TableCell className='text-right'>
										{row.amount?.toLocaleString()}
									</TableCell>
								</TableRow>
							))
						)}
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
