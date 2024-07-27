import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import ReviewComponent from "../Reviews/ReviewsComp";

export function AccordionDemo() {
	return (
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>Product details</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger>Description</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger>Shipping</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value='item-4'>
				<AccordionTrigger>Warranty</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value='item-5'>
				<AccordionTrigger>Privacy Policy</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-6'>
				<AccordionTrigger>Reviews</AccordionTrigger>
				<AccordionContent className='min-h-screen '>
					{/* Review Component*/}
					<ReviewComponent />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
