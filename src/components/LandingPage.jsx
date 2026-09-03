import { useEffect, useState } from "react";
import {
	ArrowLeft,
	ArrowUpLeft,
	CheckCircle2,
	Play,
	Sparkles,
	Star,
	Trophy,
	Users,
} from "lucide-react";

// غيّر الصورة دي بصورة المدرس الحقيقية
const TEACHER_PHOTO =
	"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&h=1100&fit=crop&crop=face";

export default function LandingPage({ onComplete }) {
	const [visible, setVisible] = useState(false);
	const [mouse, setMouse] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e) => {
			const x = (e.clientX / window.innerWidth - 0.5) * 2;
			const y = (e.clientY / window.innerHeight - 0.5) * 2;

			setMouse({ x, y });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			className="
                fixed inset-0 z-[200]
                bg-dark
                text-white
                overflow-hidden
            "
		>
			{/* ================= BACKGROUND ================= */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Gradient */}
				<div
					className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.20),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(245,158,11,0.12),transparent_35%)]
                    "
				/>

				{/* Grid */}
				<div
					className="
                        absolute
                        inset-0
                        opacity-[0.035]
                        bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
                        bg-[size:50px_50px]
                    "
				/>

				{/* Glow 1 */}
				<div
					className="
                        absolute
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-primary-500/10
                        blur-[120px]
                        -top-40
                        -left-40
                    "
				/>

				{/* Glow 2 */}
				<div
					className="
                        absolute
                        w-[450px]
                        h-[450px]
                        rounded-full
                        bg-accent-500/10
                        blur-[120px]
                        bottom-[-150px]
                        right-[-100px]
                    "
				/>

				{/* Floating particles */}
				{[...Array(12)].map((_, i) => (
					<span
						key={i}
						className="
                            absolute
                            w-1
                            h-1
                            rounded-full
                            bg-white/30
                            animate-float
                        "
						style={{
							left: `${5 + i * 8}%`,
							top: `${10 + ((i * 17) % 75)}%`,
							animationDelay: `${i * 0.35}s`,
							animationDuration: `${4 + (i % 4)}s`,
						}}
					/>
				))}
			</div>

			{/* ================= NAVBAR ================= */}
			<header
				className={`
                    relative
                    z-20
                    w-full
                    px-5
                    md:px-10
                    lg:px-16
                    py-5
                    transition-all
                    duration-1000
                    ${
											visible
												? "opacity-100 translate-y-0"
												: "opacity-0 -translate-y-5"
										}
                `}
			>
				<div
					className="
                        max-w-7xl
                        mx-auto
                        flex
                        items-center
                        justify-between
                    "
				>
					{/* Logo */}
					<div className="flex items-center gap-3">
						<div
							className="
                                w-11
                                h-11
                                rounded-2xl
                                bg-white/10
                                border
                                border-white/10
                                backdrop-blur-xl
                                flex
                                items-center
                                justify-center
                                shadow-lg
                            "
						>
							<Sparkles className="w-5 h-5 text-accent-400" />
						</div>

						<div className="hidden sm:block">
							<div className="font-bold tracking-wide">أستاذ الرياضيات</div>

							<div className="text-[10px] text-white/40 tracking-[0.2em]">
								LEARN • UNDERSTAND • ACHIEVE
							</div>
						</div>
					</div>

					{/* Top action */}
					<button
						type="button"
						onClick={onComplete}
						className="
                            hidden
                            sm:flex
                            items-center
                            gap-2
                            px-5
                            py-2.5
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            backdrop-blur-xl
                            text-sm
                            hover:bg-white/10
                            transition
                        "
					>
						دخول الموقع
						<ArrowLeft className="w-4 h-4" />
					</button>
				</div>
			</header>

			{/* ================= HERO ================= */}
			<main className="relative z-10 h-[calc(100vh-85px)] flex items-center">
				<div
					className="
                        max-w-7xl
                        w-full
                        mx-auto
                        px-5
                        md:px-10
                        lg:px-16
                        pb-8
                    "
				>
					<div
						className="
                            grid
                            lg:grid-cols-[1.05fr_0.95fr]
                            items-center
                            gap-12
                            lg:gap-6
                        "
					>
						{/* ================= TEXT ================= */}
						<div
							dir="rtl"
							className={`
                                max-w-2xl
                                transition-all
                                duration-[1200ms]
                                ${
																	visible
																		? "opacity-100 translate-y-0"
																		: "opacity-0 translate-y-10"
																}
                            `}
						>
							{/* Badge */}
							<div
								className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-accent-400/10
                                    border
                                    border-accent-400/20
                                    text-accent-300
                                    text-xs
                                    md:text-sm
                                    mb-6
                                "
							>
								<span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />

								<span>رحلة تعليمية مختلفة تبدأ من هنا</span>
							</div>

							{/* Heading */}
							<h1
								className="
                                    text-4xl
                                    sm:text-5xl
                                    md:text-6xl
                                    lg:text-7xl
                                    font-black
                                    leading-[1.05]
                                    tracking-tight
                                "
							>
								الرياضيات
								<br />
								<span
									className="
                                        text-transparent
                                        bg-clip-text
                                        bg-gradient-to-l
                                        from-accent-300
                                        via-accent-400
                                        to-primary-300
                                    "
								>
									مش حفظ...
								</span>
								<br />
								<span className="text-white">دي فهم.</span>
							</h1>

							{/* Description */}
							<p
								className="
                                    mt-6
                                    text-base
                                    md:text-lg
                                    leading-8
                                    text-white/60
                                    max-w-xl
                                "
							>
								شرح بسيط، متابعة حقيقية، وطريقة تخليك تفهم الرياضيات بدل ما
								تحفظها.
								<span className="text-white/90">
									{" "}
									هدفنا مش بس تجيب درجة أعلى... هدفنا إنك تعرف تجيبها بنفسك.
								</span>
							</p>

							{/* CTA */}
							<div
								className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    gap-3
                                    mt-8
                                "
							>
								<button
									type="button"
									onClick={onComplete}
									className="
                                        group
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-3
                                        px-7
                                        py-4
                                        rounded-2xl
                                        bg-accent-500
                                        hover:bg-accent-400
                                        text-white
                                        font-bold
                                        shadow-2xl
                                        shadow-accent-500/20
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                    "
								>
									ابدأ رحلتك الآن
									<ArrowLeft
										className="
                                            w-5
                                            h-5
                                            transition-transform
                                            group-hover:-translate-x-1
                                        "
									/>
								</button>

								<button
									type="button"
									onClick={onComplete}
									className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-3
                                        px-7
                                        py-4
                                        rounded-2xl
                                        bg-white/5
                                        hover:bg-white/10
                                        border
                                        border-white/10
                                        backdrop-blur-xl
                                        text-white
                                        font-semibold
                                        transition-all
                                    "
								>
									<span
										className="
                                            w-9
                                            h-9
                                            rounded-full
                                            bg-white/10
                                            flex
                                            items-center
                                            justify-center
                                        "
									>
										<Play className="w-4 h-4 fill-current mr-[-2px]" />
									</span>
									اكتشف المنهج
								</button>
							</div>

							{/* Trust */}
							<div
								className="
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-x-6
                                    gap-y-3
                                    mt-7
                                    text-xs
                                    md:text-sm
                                    text-white/45
                                "
							>
								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-green-400" />
									متابعة مستمرة
								</div>

								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-green-400" />
									شرح مبسط
								</div>

								<div className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-green-400" />
									نتائج ملموسة
								</div>
							</div>

							{/* Stats */}
							<div
								className="
                                    grid
                                    grid-cols-3
                                    max-w-lg
                                    mt-10
                                    pt-6
                                    border-t
                                    border-white/10
                                "
							>
								<div>
									<div className="text-2xl md:text-3xl font-black">500+</div>

									<div className="text-xs text-white/40 mt-1">طالب</div>
								</div>

								<div className="border-r border-white/10 pr-5">
									<div className="text-2xl md:text-3xl font-black">8+</div>

									<div className="text-xs text-white/40 mt-1">سنوات خبرة</div>
								</div>

								<div className="border-r border-white/10 pr-5">
									<div className="text-2xl md:text-3xl font-black">98%</div>

									<div className="text-xs text-white/40 mt-1">رضا الطلاب</div>
								</div>
							</div>
						</div>

						{/* ================= VISUAL ================= */}
						<div
							className={`
                                relative
                                flex
                                justify-center
                                lg:justify-end
                                transition-all
                                duration-[1400ms]
                                ${
																	visible
																		? "opacity-100 translate-y-0"
																		: "opacity-0 translate-y-12"
																}
                            `}
							style={{
								transform: visible
									? `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`
									: undefined,
							}}
						>
							{/* Main glow */}
							<div
								className="
                                    absolute
                                    w-[320px]
                                    h-[320px]
                                    md:w-[460px]
                                    md:h-[460px]
                                    rounded-full
                                    bg-primary-500/15
                                    blur-[90px]
                                "
							/>

							{/* Orbit */}
							<div
								className="
                                    absolute
                                    w-[330px]
                                    h-[330px]
                                    md:w-[470px]
                                    md:h-[470px]
                                    rounded-full
                                    border
                                    border-white/5
                                    animate-[spin_25s_linear_infinite]
                                "
							/>

							{/* Teacher Frame */}
							<div className="relative">
								{/* Back glow */}
								<div
									className="
                                        absolute
                                        inset-6
                                        rounded-[3rem]
                                        bg-gradient-to-br
                                        from-primary-400/30
                                        via-transparent
                                        to-accent-400/25
                                        blur-2xl
                                    "
								/>

								{/* Image */}
								<div
									className="
                                        relative
                                        w-[280px]
                                        h-[390px]
                                        sm:w-[320px]
                                        sm:h-[440px]
                                        md:w-[360px]
                                        md:h-[500px]
                                        rounded-[2.5rem]
                                        overflow-hidden
                                        border
                                        border-white/10
                                        bg-white/5
                                        shadow-2xl
                                    "
								>
									<img
										src={TEACHER_PHOTO}
										alt="مدرس الرياضيات"
										className="
                                            w-full
                                            h-full
                                            object-cover
                                            object-top
                                            scale-[1.03]
                                        "
									/>

									{/* Image gradient */}
									<div
										className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-dark
                                            via-transparent
                                            to-transparent
                                        "
									/>

									{/* Bottom label */}
									<div
										className="
                                            absolute
                                            bottom-0
                                            left-0
                                            right-0
                                            p-6
                                        "
									>
										<div className="text-white/50 text-xs mb-1">
											مدرس الرياضيات
										</div>

										<div className="text-xl font-bold">أستاذ [اسمك]</div>
									</div>
								</div>

								{/* Rating Card */}
								<div
									className="
                                        absolute
                                        top-8
                                        -left-10
                                        hidden
                                        sm:flex
                                        items-center
                                        gap-3
                                        p-3
                                        rounded-2xl
                                        bg-white/10
                                        backdrop-blur-xl
                                        border
                                        border-white/10
                                        shadow-xl
                                        animate-float
                                    "
								>
									<div
										className="
                                            w-10
                                            h-10
                                            rounded-xl
                                            bg-accent-400/15
                                            flex
                                            items-center
                                            justify-center
                                        "
									>
										<Star
											className="
                                                w-5
                                                h-5
                                                fill-accent-400
                                                text-accent-400
                                            "
										/>
									</div>

									<div>
										<div className="font-bold">4.9 / 5</div>

										<div className="text-[10px] text-white/40">
											تقييم الطلاب
										</div>
									</div>
								</div>

								{/* Students Card */}
								<div
									className="
                                        absolute
                                        bottom-16
                                        -right-12
                                        hidden
                                        md:flex
                                        items-center
                                        gap-3
                                        p-3
                                        rounded-2xl
                                        bg-white/10
                                        backdrop-blur-xl
                                        border
                                        border-white/10
                                        shadow-xl
                                        animate-float
                                    "
									style={{
										animationDelay: "1.2s",
									}}
								>
									<div
										className="
                                            w-10
                                            h-10
                                            rounded-xl
                                            bg-primary-400/15
                                            flex
                                            items-center
                                            justify-center
                                        "
									>
										<Users
											className="
                                                w-5
                                                h-5
                                                text-primary-300
                                            "
										/>
									</div>

									<div>
										<div className="font-bold">+500</div>

										<div className="text-[10px] text-white/40">
											طالب اتعلموا معانا
										</div>
									</div>
								</div>

								{/* Success card */}
								<div
									className="
                                        absolute
                                        top-[42%]
                                        -right-16
                                        hidden
                                        xl:flex
                                        items-center
                                        gap-3
                                        p-3
                                        rounded-2xl
                                        bg-dark/70
                                        backdrop-blur-xl
                                        border
                                        border-accent-400/15
                                        shadow-xl
                                    "
								>
									<div
										className="
                                            w-10
                                            h-10
                                            rounded-xl
                                            bg-accent-400/10
                                            flex
                                            items-center
                                            justify-center
                                        "
									>
										<Trophy
											className="
                                                w-5
                                                h-5
                                                text-accent-400
                                            "
										/>
									</div>

									<div>
										<div className="font-bold">98%</div>

										<div className="text-[10px] text-white/40">رضا الطلاب</div>
									</div>
								</div>

								{/* Small arrow */}
								<div
									className="
                                        absolute
                                        -bottom-5
                                        left-1/2
                                        -translate-x-1/2
                                        w-12
                                        h-12
                                        rounded-full
                                        bg-accent-500
                                        flex
                                        items-center
                                        justify-center
                                        shadow-xl
                                        shadow-accent-500/20
                                    "
								>
									<ArrowUpLeft className="w-5 h-5" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Bottom line */}
			<div
				className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                "
			/>
		</div>
	);
}
