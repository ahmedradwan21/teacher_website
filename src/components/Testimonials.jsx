import { useState, useRef, useEffect } from "react";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";

export default function Testimonials() {
	const testimonials = [
		{
			name: "أحمد محمد",
			level: "ثانوي عام",
			before: 8,
			after: 18,
			text: "كنت باخد 8 درجات في الرياضيات، بعد 3 شهور مع الأستاذ وصلت 18. مش بس درجات، بقيت بفهم المادة.",
			avatar: "أ",
			color: "bg-primary-100 text-primary-600",
		},
		{
			name: "سارة علي",
			level: "إعدادي",
			before: 45,
			after: 88,
			text: 'الأستاذ ما بيزعق ولا بيضغط. بيشرح دايما وبيقول "أنت تقدر". كانت كابوس بالنسبة لي، دلوقتي أنا أحلم بأن أكون مدرسة.',
			avatar: "س",
			color: "bg-accent-100 text-accent-600",
		},
		{
			name: "محمود خالد",
			level: "جامعي",
			before: 52,
			after: 95,
			text: "كنت أخاف أتكلم قدام الناس. بعد شهرين مع الأستاذ، حررت أنكم ثقة. شكراً من قلب.",
			avatar: "م",
			color: "bg-primary-100 text-primary-600",
		},
		{
			name: "نورا سامي",
			level: "ثانوي",
			before: 30,
			after: 85,
			text: 'بنتي كانت تقول "أنا غبية في الرياضيات". الأستاذ علمها إن الذكاء مش ثابت. دلوقتي تقول "أنا أذكى من أخوي"!',
			avatar: "ن",
			color: "bg-accent-100 text-accent-600",
		},
		{
			name: "يوسف أحمد",
			level: "ابتدائي",
			before: 60,
			after: 90,
			text: "ابني كان بيكره الرياضيات، دلوقتي بيطلب الحصة بنفسه. الأسلوب التفاعلي فرق جداً.",
			avatar: "ي",
			color: "bg-primary-100 text-primary-600",
		},
		{
			name: "ليلى محمود",
			level: "تحضيري جامعة",
			before: 40,
			after: 92,
			text: "عديت اختبار القبول بتاع الجامعة بسهولة. الحصص كانت مركزة ومفيدة.",
			avatar: "ل",
			color: "bg-accent-100 text-accent-600",
		},
	];

	const containerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	// نكرر البيانات مرتين عشان الحركة تكون Infinite
	const infiniteTestimonials = [
		...testimonials,
		...testimonials,
		...testimonials,
	];

	const CARD_WIDTH = 380;

	// الحركة التلقائية
	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			setActiveIndex((prev) => prev + 1);
		}, 3000);

		return () => clearInterval(interval);
	}, [isPaused]);

	// تحريك الكروت
	useEffect(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;

		container.scrollTo({
			left: activeIndex * CARD_WIDTH,
			behavior: "smooth",
		});

		// لما نوصل للنسخة التانية
		if (activeIndex >= testimonials.length * 2) {
			setTimeout(() => {
				container.style.scrollBehavior = "auto";

				setActiveIndex(testimonials.length);

				container.scrollLeft = testimonials.length * CARD_WIDTH;

				container.style.scrollBehavior = "smooth";
			}, 500);
		}
	}, [activeIndex]);

	const next = () => {
		setIsPaused(true);
		setActiveIndex((prev) => prev + 1);

		setTimeout(() => {
			setIsPaused(false);
		}, 4000);
	};

	const prev = () => {
		setIsPaused(true);

		setActiveIndex((prev) => {
			if (prev <= 0) {
				return testimonials.length * 2 - 1;
			}

			return prev - 1;
		});

		setTimeout(() => {
			setIsPaused(false);
		}, 4000);
	};

	const goTo = (index) => {
		setIsPaused(true);

		setActiveIndex(testimonials.length + index);

		setTimeout(() => {
			setIsPaused(false);
		}, 4000);
	};

	return (
		<section
			id="testimonials"
			className="py-24 bg-light relative overflow-hidden"
		>
			<div className="container mx-auto px-4 relative">
				{/* Title */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
						آراء الطلاب
					</h2>

					<p className="text-gray-500">كلام حقيقي من ناس حقيقية</p>
				</div>

				{/* Arrows */}
				<div className="flex justify-center gap-4 mb-8">
					<button
						onClick={prev}
						className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition text-gray-600 bg-white"
					>
						<ChevronRight className="w-5 h-5" />
					</button>

					<button
						onClick={next}
						className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition text-gray-600 bg-white"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
				</div>

				{/* Carousel */}
				<div
					ref={containerRef}
					className="flex overflow-x-hidden"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					style={{
						scrollbarWidth: "none",
						msOverflowStyle: "none",
					}}
				>
					{infiniteTestimonials.map((t, idx) => (
						<div
							key={idx}
							className="
                flex-shrink-0
                w-[380px]
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                border
                border-gray-100
              "
							style={{
								marginRight: "0px",
							}}
						>
							{/* Header */}
							<div className="flex items-center gap-3 mb-4">
								<div
									className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-lg`}
								>
									{t.avatar}
								</div>

								<div className="flex-1">
									<h4 className="font-bold text-dark">{t.name}</h4>

									<p className="text-xs text-gray-400">{t.level}</p>
								</div>

								<div className="flex gap-0.5">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 text-accent-400 fill-accent-400"
										/>
									))}
								</div>
							</div>

							{/* Before / After */}
							<div className="grid grid-cols-2 gap-3 mb-4">
								<div className="bg-red-50 rounded-xl p-3 text-center border border-red-100">
									<p className="text-xs text-gray-400 mb-1">قبل</p>

									<p className="text-xl font-bold text-red-500">{t.before}%</p>
								</div>

								<div className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
									<p className="text-xs text-gray-400 mb-1">بعد</p>

									<p className="text-xl font-bold text-green-500">{t.after}%</p>
								</div>
							</div>

							{/* Quote */}
							<div className="relative">
								<Quote className="w-8 h-8 text-primary-200 mb-2" />

								<p className="text-gray-600 text-sm leading-relaxed">
									{t.text}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Dots */}
				<div className="flex justify-center gap-2 mt-6">
					{testimonials.map((_, idx) => (
						<button
							key={idx}
							onClick={() => goTo(idx)}
							className={`
                h-2.5
                rounded-full
                transition-all
                duration-300
                ${
									idx === activeIndex % testimonials.length
										? "bg-primary-500 w-6"
										: "bg-gray-300 w-2.5 hover:bg-gray-400"
								}
              `}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
