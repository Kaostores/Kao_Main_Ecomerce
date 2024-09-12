import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic4 from "@/assets/hero2.png";
import pic5 from "@/assets/caro2.jpg";
import pic6 from "@/assets/caro3.jpg";

const CarouselComp = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};

	return (
		<div>
			<Slider {...settings}>
				<div>
					<img
						className='h-[400px] object-cover sm:h-[250px]'
						src={pic4}
						alt='Slide 1'
					/>
				</div>
				<div>
					<img
						src={pic5}
						alt='Slide 2'
						className='h-[400px] object-cover sm:h-[250px] w-full'
					/>
				</div>
				<div>
					<img
						src={pic6}
						alt='Slide 3'
						className='h-[400px] object-cover sm:h-[250px] w-full'
					/>
				</div>
			</Slider>
		</div>
	);
};

const PrevArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "gray",
				borderRadius: "50%",
				// padding: "10px",
				position: "absolute",
				top: "50%",
				transform: "translateY(-50%)",
				left: "20px",
				zIndex: 1,
			}}
			onClick={onClick}
		/>
	);
};

const NextArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "gray",
				borderRadius: "50%",
				// padding: "10px",
				position: "absolute",
				top: "50%",
				transform: "translateY(-50%)",
				right: "20px",
				zIndex: 1,
			}}
			onClick={onClick}
		/>
	);
};

export default CarouselComp;
