import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import ReviewComponent from "../Reviews/ReviewsComp";
import TextSanitizer from "@/helpers/TextSanitizer";

export function AccordionDemo({data}:any) {
	return (
		<Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
			<AccordionItem  value='item-1'>
				<AccordionTrigger>Product details</AccordionTrigger>
				<AccordionContent>
				<TextSanitizer description={data?.description ?? ''} />
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
