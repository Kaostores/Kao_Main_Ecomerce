import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

type TProp = {
	open: boolean;
	close: () => void;
	action: () => any;
	text: string;
};

export default function AreYouSure({ open, close, action, text }: TProp) {
	return (
		<Dialog open={open} onOpenChange={() => close()}>
			<DialogTrigger></DialogTrigger>
			<DialogContent className='w-full'>
				<span className='font-semibold text-xl'>{text}</span>
				<div className='flex items-center justify-between w-full gap-3'>
					<Button
						variant='secondary'
						className='w-full text-white text-xl py-7'
						onClick={() => {
							action();
							close();
						}}>
						Yes
					</Button>
					<Button
						variant='outline'
						className='w-full text-white text-xl py-7 text-black'
						onClick={() => close()}>
						No
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
