import {
	Award,
	GraduationCap,
	BookOpen,
	CheckCircle,
	ArrowLeft,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

// TODO: replace with real teacher photo
const TEACHER_PHOTO =
	"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=600&fit=crop&crop=face";

export default function About() {
	const { ref: sectionRef, isInView } = useInView(0.1);

	const credentials = [
		{ icon: Award, text: "بكالوريوس تربية رياضيات - جامعة القاهرة" },
		{
			icon: GraduationCap,
			text: "دبلومة تدريس متقدم - معهد الدراسات التربوية",
		},
		{ icon: BookOpen, text: "8+ سنوات خبرة في تدريس الرياضيات" },
		{ icon: CheckCircle, text: "متخصص في الجبر والهندسة والتفاضل" },
	];

	const fears = [
		"الرياضيات صعبة ومش بفهمها",
		"المدرس بيزعق لما بغلط",
		"بخاف من الامتحانات",
		"مش عارف أحل الواجب لوحدي",
	];

	const solutions = [
		"أشرح من الصفر بطريقتك",
		"الغلط فرصة للتعلم مش عيب",
		"تدريب على نماذج امتحانات حقيقية",
		"متابعة يومية لحل الواجبات",
	];

	return (
		<section
			id="about"
			ref={sectionRef}
			className="py-24 relative overflow-hidden bg-white"
		>
			<div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-[100px]" />
			<div className="container mx-auto px-4 relative">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="relative">
						<div className="absolute -inset-4 bg-gradient-to-br from-primary-100/50 to-accent-100/30 rounded-[2.5rem] blur-xl" />
						<div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
							{/* TODO: replace with real teacher photo */}
							<img
								src={TEACHER_PHOTO}
								alt="أستاذ احمد"
								className="w-full transition-transform duration-700 group-hover:scale-105"
							/>
						</div>
						<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl max-w-xs hidden md:block border border-primary-100">
							<h4 className="text-primary-700 font-bold mb-3 text-sm">
								الشهادات والخبرات
							</h4>
							<div className="space-y-2.5">
								{credentials.map((c, i) => (
									<div
										key={i}
										className="flex items-center gap-2 text-sm text-gray-600"
									>
										<c.icon className="w-4 h-4 text-primary-500 flex-shrink-0" />
										<span>{c.text}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					<div>
						<span className="text-primary-600 text-sm font-bold mb-4 block">
							عنّي
						</span>
						<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
							أنا هنا لأساعدك
							<br />
							<span className="text-gradient">تتجاوز مخاوفك</span> في الرياضيات
						</h2>
						<p className="text-gray-600 text-lg leading-relaxed mb-6">
							من أكتر من 8 سنين، بساعد الطلاب يتغلبوا على صعوباتهم في الرياضيات.
							أعرف إن كل طالب مختلف، وعشان كده بشرح بطريقة تناسبك أنت.
						</p>

						<div
							className={`bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
						>
							<h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
								<span className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-500 text-sm">
									!
								</span>
								أنا عارف إنك بتخاف من...
							</h4>
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<p className="text-xs text-gray-400 mb-2 font-medium">
										المخاوف:
									</p>
									<ul className="space-y-1.5">
										{fears.slice(0, 3).map((f, i) => (
											<li
												key={i}
												className="flex items-center gap-2 text-sm text-gray-500"
											>
												<span className="w-1.5 h-1.5 rounded-full bg-red-400" />
												{f}
											</li>
										))}
									</ul>
								</div>
								<div>
									<p className="text-xs text-primary-500 mb-2 font-medium">
										الحلول:
									</p>
									<ul className="space-y-1.5">
										{solutions.slice(0, 3).map((s, i) => (
											<li
												key={i}
												className="flex items-center gap-2 text-sm text-gray-600"
											>
												<CheckCircle className="w-3.5 h-3.5 text-accent-500" />
												{s}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						<a
							href="#booking"
							className="border-2 border-primary-200 text-primary-700 px-8 py-3 rounded-2xl inline-flex items-center gap-2 hover:bg-primary-50 transition font-bold bg-white"
						>
							<span>احجز حصتك التجريبية المجانية</span>
							<ArrowLeft className="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
