import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Booking() {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		level: "",
		notes: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const subject = encodeURIComponent(`حجز حصة تجريبية - ${formData.name}`);
		const body = encodeURIComponent(
			`الاسم: ${formData.name}\n` +
				`التليفون: ${formData.phone}\n` +
				`الإيميل: ${formData.email}\n` +
				`المستوى: ${formData.level}\n` +
				`ملاحظات: ${formData.notes}`,
		);
		window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
		setSubmitted(true);
	};

	return (
		<section id="booking" className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-2xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
							احجز حصة تجريبية مجانية
						</h2>
						<p className="text-gray-500">
							30 دقيقة نتعرف فيها ونعرف مستواك، بدون أي التزام
						</p>
					</div>

					{submitted ? (
						<div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
							<CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
							<h3 className="text-2xl font-bold text-green-800 mb-2">
								تم إرسال طلبك!
							</h3>
							<p className="text-green-700">
								هتواصل معاك في أقرب وقت على الواتساب أو الإيميل.
							</p>
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className="bg-light rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
						>
							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div>
									<label className="block text-sm font-bold text-dark mb-2">
										الاسم
									</label>
									<input
										required
										type="text"
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition bg-white"
										placeholder="احمد الكامل"
									/>
								</div>
								<div>
									<label className="block text-sm font-bold text-dark mb-2">
										رقم التليفون
									</label>
									<input
										required
										type="tel"
										value={formData.phone}
										onChange={(e) =>
											setFormData({ ...formData, phone: e.target.value })
										}
										className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition bg-white"
										placeholder="01xxxxxxxxx"
									/>
								</div>
							</div>
							<div className="mb-6">
								<label className="block text-sm font-bold text-dark mb-2">
									الإيميل (اختياري)
								</label>
								<input
									type="email"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition bg-white"
									placeholder="your@email.com"
								/>
							</div>
							<div className="mb-6">
								<label className="block text-sm font-bold text-dark mb-2">
									المستوى الدراسي
								</label>
								<select
									required
									value={formData.level}
									onChange={(e) =>
										setFormData({ ...formData, level: e.target.value })
									}
									className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition bg-white"
								>
									<option value="">اختار مستواك</option>
									<option value="ابتدائي">ابتدائي</option>
									<option value="إعدادي">إعدادي</option>
									<option value="ثانوي">ثانوي</option>
									<option value="جامعي">جامعي</option>
									<option value="SAT">تحضير SAT</option>
									<option value="مهني">مهني/بالغ</option>
								</select>
							</div>
							<div className="mb-8">
								<label className="block text-sm font-bold text-dark mb-2">
									ملاحظات (اختياري)
								</label>
								<textarea
									value={formData.notes}
									onChange={(e) =>
										setFormData({ ...formData, notes: e.target.value })
									}
									rows="4"
									className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition bg-white"
									placeholder="عايز تقولي حاجة؟ هدفك من تعلم الرياضيات؟"
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25"
							>
								<span>إرسال طلب الحجز</span>
								<Send className="w-5 h-5" />
							</button>
							<p className="text-center text-sm text-gray-500 mt-4">
								أو ابعتلي مباشرة على{" "}
								<a
									href="https://wa.me/201xxxxxxxxx"
									className="text-primary-600 underline font-bold"
								>
									واتساب
								</a>
							</p>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
