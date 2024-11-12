"use client";

import { useEffect, useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	// CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { CreditCard } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAddCardChargeMutation } from "@/services/apiSlice";
import ShowToast from "../reuse/ShowToast";
type SavedCard = {
	id: string;
	last4: string;
	expiry: string;
	brand: string;
};

export default function CardPaymentWithSelection({
	isActiveThird,
	setIsActiveThird,
}: any) {
	const [selectedCard, setSelectedCard] = useState<string | null>(null);

	const [cardNumber, setCardNumber] = useState("");
	const [expirationDate, setExpirationDate] = useState("");
	const [cvc, setCvc] = useState("");
	const [amount, setAmount] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const [pin, setPin] = useState<any>();

	const [addNewCard] = useAddCardChargeMutation();

	// Mock saved cards data
	const savedCards: SavedCard[] = [
		// { id: "1", last4: "4242", expiry: "12/24", brand: "Visa" },
		// { id: "2", last4: "5555", expiry: "10/23", brand: "Mastercard" },
	];

	const [expiry_month, expiry_year] = expirationDate.split("/");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		const response: any = await addNewCard({
			number: cardNumber,
			cvv: cvc,
			expiry_month: `${expiry_month}`,
			expiry_year: `${expiry_year}`,
			pin: parseInt(pin),

			// number: "5531886652142950",
			// cvv: "564",
			// expiry_month: "09",
			// expiry_year: "32",
			// pin: 3310,
		});

		console.log("data submitted", response);
		if (response?.status >= 200 && response?.status < 300) {
			ShowToast(true, response?.data?.message);
		} else if (
			response?.error?.status >= 300 &&
			response?.error?.status < 400
		) {
			ShowToast(false, response?.error?.data?.message);
		} else if (
			response?.error?.status >= 400 &&
			response?.error?.status < 600
		) {
			ShowToast(false, response?.error?.data?.message);
		}

		setTimeout(() => {
			setIsLoading(false);
			toast({
				title: "Payment Successful",
				description: selectedCard
					? `Successfully charged using card ending in ${
							savedCards.find((card) => card.id === selectedCard)?.last4
					  }`
					: `Successfully charged $${amount} to new card ending in ${cardNumber.slice(
							-4,
					  )}`,
			});
			// Reset form
			setSelectedCard(null);
			setCardNumber("");
			setExpirationDate("");
			setCvc("");
			setAmount("");
			setIsAddingNewCard(false);
		}, 2000);
	};

	const [isAddingNewCard, setIsAddingNewCard] = useState(
		savedCards?.length >= 1 ? false : true,
	);

	useEffect(() => {
		if (savedCards.length > 0 && !selectedCard) {
			setSelectedCard(savedCards[0].id);
		} else if (savedCards.length === 0) {
			setIsAddingNewCard(true);
		}
	}, [savedCards, selectedCard]);

	const formatCardNumber = (value: string) => {
		const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
		const matches = v.match(/\d{4,16}/g);
		const match = (matches && matches[0]) || "";
		const parts = [];
		for (let i = 0, len = match.length; i < len; i += 4) {
			parts.push(match.substring(i, i + 4));
		}
		if (parts.length) {
			return parts.join(" ");
		} else {
			return value;
		}
	};

	const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formattedValue = formatCardNumber(e.target.value);
		setCardNumber(formattedValue);
	};

	const handleExpirationDateChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const value = e.target.value.replace(/[^\d]/g, "");
		if (value.length <= 4) {
			const formatted = value.replace(/^(\d{2})/, "$1/");
			setExpirationDate(formatted);
		}
	};

	const handleUpdateCard = () => {
		if (selectedCard) {
			const cardToUpdate = savedCards.find((card) => card.id === selectedCard);
			if (cardToUpdate) {
				setCardNumber(`**** **** **** ${cardToUpdate.last4}`);
				setExpirationDate(cardToUpdate.expiry);
				setCvc("");
				setIsAddingNewCard(true);
				setSelectedCard(null);
			}
		}
	};

	return (
		<div>
			<Dialog
				open={isActiveThird}
				onOpenChange={() => setIsActiveThird(!isActiveThird)}>
				{/* <DialogTrigger>Click me</DialogTrigger> */}
				<DialogContent className='w-[500px]'>
					<Card className=' h-[90vh] overflow-y-scroll   '>
						<CardHeader>
							<CardTitle>Card Payment</CardTitle>
							<CardDescription>
								Select a saved card or enter new card details
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className='space-y-4'>
								{!isAddingNewCard && (
									<RadioGroup
										value={selectedCard || ""}
										onValueChange={setSelectedCard}>
										{savedCards.map((card) => (
											<div
												key={card.id}
												className='flex items-center space-x-2'>
												<RadioGroupItem value={card.id} id={card.id} />
												<Label htmlFor={card.id} className='flex items-center'>
													<CreditCard className='mr-2 h-4 w-4' />
													{card.brand} ending in {card.last4} (expires{" "}
													{card.expiry})
												</Label>
											</div>
										))}
										<div className='flex items-center space-x-2'>
											<RadioGroupItem
												value='new'
												id='new'
												onClick={() => setIsAddingNewCard(true)}
											/>
											<Label htmlFor='new'>Add new card</Label>
										</div>
									</RadioGroup>
								)}
								{(isAddingNewCard || selectedCard === null) && (
									<>
										<div className='relative h-48 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg overflow-hidden'>
											<div className='absolute top-4 left-4 w-10 h-8 bg-yellow-400 rounded-md'>
												<img
													className='h-full w-full object-contain'
													src='https://static-00.iconduck.com/assets.00/verve-icon-2048x709-8iunu5yi.png'
												/>
											</div>
											<div className='absolute bottom-4 left-4 right-4 text-white'>
												<p className='text-lg font-mono'>
													{cardNumber || "•••• •••• •••• ••••"}
												</p>
												<div className='flex justify-between mt-4'>
													<p className='text-sm font-mono'>
														{expirationDate || "MM/YY"}
													</p>
													<p className='text-sm font-mono'>
														{cvc ? "•".repeat(cvc.length) : "CVC"}
													</p>
												</div>
											</div>
										</div>
										<div>
											<Label htmlFor='cardNumber'>Card Number</Label>
											<Input
												id='cardNumber'
												value={cardNumber}
												onChange={handleCardNumberChange}
												placeholder='1234 5678 9012 3456'
												maxLength={19}
											/>
										</div>
										<div className='flex space-x-4'>
											<div className='flex-1'>
												<Label htmlFor='expirationDate'>Expiration Date</Label>
												<Input
													id='expirationDate'
													value={expirationDate}
													onChange={handleExpirationDateChange}
													placeholder='MM/YY'
													maxLength={5}
												/>
											</div>
											<div className='flex-1'>
												<Label htmlFor='cvc'>CVC</Label>
												<Input
													id='cvc'
													value={cvc}
													onChange={(e) =>
														setCvc(
															e.target.value.replace(/\D/g, "").slice(0, 4),
														)
													}
													placeholder='123'
													maxLength={4}
												/>
											</div>
										</div>
									</>
								)}
								<div>
									<Label htmlFor='amount'>Amount</Label>
									<Input
										id='amount'
										value={pin}
										onChange={(e) =>
											setPin(e.target.value.replace(/[^\d.]/g, ""))
										}
										placeholder='0.00'
									/>
								</div>
								<div className='flex space-x-2'>
									<Button
										variant='default'
										type='submit'
										className='flex-1 text-white'
										disabled={isLoading}>
										{isLoading ? "Processing..." : "Pay Now"}
									</Button>
									{selectedCard && !isAddingNewCard && (
										<Button
											type='button'
											variant='outline'
											onClick={handleUpdateCard}>
											Update Card
										</Button>
									)}
									{isAddingNewCard && (
										<Button
											type='button'
											variant='outline'
											onClick={() => setIsAddingNewCard(false)}>
											Cancel
										</Button>
									)}
								</div>
							</form>
						</CardContent>
					</Card>
				</DialogContent>
			</Dialog>
		</div>
	);
}
