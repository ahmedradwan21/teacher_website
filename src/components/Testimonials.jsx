import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

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
		text: 'الأستاذ ما بيزعق ولا بيضغط. بيشرح دايما وبيقول "أنت تقدر". كانت الرياضيات كابوس بالنسبة لي، دلوقتي أنا أحلم بأن أكون مدرسة.',
		avatar: "س",
		color: "bg-accent-100 text-accent-600",
	},
	{
		name: "محمود خالد",
		level: "جامعي",
		before: 52,
		after: 95,
		text: "كنت أخاف أتكلم قدام الناس. بعد شهرين مع الأستاذ، بقيت عندي ثقة. شكراً من القلب.",
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

function TestimonialCard({ t }) {
	return (
		<article
			dir="rtl"
			className="
                shrink-0
                w-[300px]
                sm:w-[340px]
                md:w-[380px]
                bg-white
                rounded-3xl
                p-5
                md:p-6
                shadow-lg
                border
                border-gray-100
            "
		>
			<div className="flex items-center gap-3 mb-4">
				<div
					className={`
                        w-12 h-12 shrink-0 rounded-full
                        ${t.color}
                        flex items-center justify-center
                        font-bold text-lg
                    `}
				>
					{t.avatar}
				</div>

				<div className="flex-1 min-w-0">
					<h4 className="font-bold text-dark truncate">{t.name}</h4>

					<p className="text-xs text-gray-400">{t.level}</p>
				</div>

				<div className="flex gap-0.5 shrink-0">
					{[...Array(5)].map((_, i) => (
						<Star key={i} className="w-4 h-4 text-accent-400 fill-accent-400" />
					))}
				</div>
			</div>

			<div className="grid grid-cols-2 gap-3 mb-5">
				<div className="bg-red-50 rounded-xl p-3 text-center border border-red-100">
					<p className="text-xs text-gray-400 mb-1">قبل</p>

					<p className="text-xl font-bold text-red-500">{t.before}%</p>
				</div>

				<div className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
					<p className="text-xs text-gray-400 mb-1">بعد</p>

					<p className="text-xl font-bold text-green-500">{t.after}%</p>
				</div>
			</div>

			<div>
				<Quote className="w-8 h-8 text-primary-200 mb-2" />

				<p className="text-gray-600 text-sm leading-7">{t.text}</p>
			</div>
		</article>
	);
}

export default function Testimonials() {
	const trackRef = useRef(null);
	const animationRef = useRef(null);
	const lastTimeRef = useRef(null);

	const positionRef = useRef(0);
	const [isPaused, setIsPaused] = useState(false);

	// سرعة الحركة
	const SPEED = 70;

	/*
	 * بنكرر المجموعة مرتين على الأقل.
	 * كده لما مجموعة تخرج من الشاشة،
	 * المجموعة اللي بعدها تكون موجودة بالفعل.
	 */
	const items = [...testimonials, ...testimonials, ...testimonials];

	useEffect(() => {
		const track = trackRef.current;

		if (!track) return;

		const animate = (time) => {
			if (lastTimeRef.current === null) {
				lastTimeRef.current = time;
			}

			const delta = time - lastTimeRef.current;
			lastTimeRef.current = time;

			if (!isPaused) {
				/*
				 * الحركة من الشمال → اليمين
				 */
				positionRef.current += (SPEED * delta) / 1000;

				const firstGroup = track.firstElementChild;

				if (firstGroup) {
					const groupWidth = firstGroup.getBoundingClientRect().width;

					/*
					 * لما المجموعة الأولى تعدي بالكامل،
					 * بنرجع position بدون أي قفزة.
					 */
					if (positionRef.current >= groupWidth) {
						positionRef.current -= groupWidth;
					}
				}

				track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
			}

			animationRef.current = requestAnimationFrame(animate);
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationRef.current);
			lastTimeRef.current = null;
		};
	}, [isPaused]);

	/*
	 * حركة يدوية:
	 * اليمين = الكارت اللي بعده
	 * الشمال = الكارت اللي قبله
	 */
	const moveNext = () => {
		const track = trackRef.current;

		if (!track) return;

		const firstCard = track.querySelector("[data-card]");

		if (!firstCard) return;

		const styles = window.getComputedStyle(track);

		const gap = parseFloat(styles.gap) || 24;

		const cardWidth = firstCard.getBoundingClientRect().width;

		const step = cardWidth + gap;

		positionRef.current -= step;

		track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
	};

	const movePrevious = () => {
		const track = trackRef.current;

		if (!track) return;

		const firstCard = track.querySelector("[data-card]");

		if (!firstCard) return;

		const styles = window.getComputedStyle(track);

		const gap = parseFloat(styles.gap) || 24;

		const cardWidth = firstCard.getBoundingClientRect().width;

		const step = cardWidth + gap;

		positionRef.current += step;

		track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
	};

	return (
		<section
			id="testimonials"
			className="
                w-full
                py-20
                md:py-24
                bg-light
                overflow-hidden
            "
		>
			<div className="w-full">
				{/* العنوان */}
				<div className="text-center mb-8 md:mb-10 px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">
						آراء الطلاب
					</h2>

					<p className="text-gray-500">كلام حقيقي من ناس حقيقية</p>
				</div>

				{/* الأسهم */}
				<div className="flex justify-center gap-4 mb-8">
					{/* يمين */}
					<button
						type="button"
						onClick={moveNext}
						aria-label="التالي"
						className="
                            w-11 h-11
                            rounded-full
                            border-2
                            border-gray-200
                            bg-white
                            flex
                            items-center
                            justify-center
                            text-gray-600
                            hover:bg-primary-50
                            hover:border-primary-300
                            hover:text-primary-600
                            transition
                            shadow-sm
                        "
					>
						<ChevronRight className="w-5 h-5" />
					</button>

					{/* شمال */}
					<button
						type="button"
						onClick={movePrevious}
						aria-label="السابق"
						className="
                            w-11 h-11
                            rounded-full
                            border-2
                            border-gray-200
                            bg-white
                            flex
                            items-center
                            justify-center
                            text-gray-600
                            hover:bg-primary-50
                            hover:border-primary-300
                            hover:text-primary-600
                            transition
                            shadow-sm
                        "
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
				</div>

				{/* Slider */}
				<div
					className="
                        relative
                        w-full
                        overflow-hidden
                    "
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					<div
						ref={trackRef}
						className="
                            flex
                            w-max
                            gap-6
                        "
						style={{
							transform: `translate3d(${positionRef.current}px, 0, 0)`,

							willChange: "transform",

							direction: "ltr",
						}}
					>
						{/* المجموعة الأولى */}
						<div className="flex gap-6 shrink-0">
							{testimonials.map((t, i) => (
								<div data-card key={`group-1-${i}`}>
									<TestimonialCard t={t} />
								</div>
							))}
						</div>

						{/* المجموعة الثانية */}
						<div className="flex gap-6 shrink-0">
							{testimonials.map((t, i) => (
								<div data-card key={`group-2-${i}`}>
									<TestimonialCard t={t} />
								</div>
							))}
						</div>

						{/* المجموعة الثالثة */}
						<div className="flex gap-6 shrink-0">
							{testimonials.map((t, i) => (
								<div data-card key={`group-3-${i}`}>
									<TestimonialCard t={t} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
