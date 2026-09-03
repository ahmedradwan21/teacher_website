import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const links = [
		{ href: "#about", label: "عنّي" },
		{ href: "#levels", label: "المستويات" },
		{ href: "#pricing", label: "الأسعار" },
		{ href: "#testimonials", label: "آراء الطلاب" },
		{ href: "#faq", label: "الأسئلة" },
	];

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-md py-3" : "bg-transparent py-5"}`}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<a href="#" className="text-2xl font-bold text-primary-700 font-arabic">
					أستاذ احمد
				</a>

				<div className="hidden md:flex gap-8 items-center">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-gray-700 hover:text-primary-600 transition font-medium text-sm"
						>
							{link.label}
						</a>
					))}
				</div>

				<div className="hidden md:flex items-center gap-4">
					<a
						href="tel:01xxxxxxxxxx"
						className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition"
					>
						<Phone className="w-4 h-4" />
						<span className="text-sm font-bold">01xxxxxxxxxx</span>
					</a>
					<a
						href="#booking"
						className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-bold text-sm shadow-lg shadow-primary-500/20"
					>
						احجز حصة
					</a>
				</div>

				<button
					onClick={() => setMobileOpen(!mobileOpen)}
					className="md:hidden text-dark text-2xl p-2"
				>
					{mobileOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{mobileOpen && (
				<div className="md:hidden bg-white border-t shadow-lg">
					<div className="container mx-auto px-4 py-4 flex flex-col gap-3">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMobileOpen(false)}
								className="text-gray-700 hover:text-primary-600 transition font-medium py-2 border-b border-gray-100"
							>
								{link.label}
							</a>
						))}
						<a
							href="tel:01xxxxxxxxxx"
							className="flex items-center gap-2 text-primary-600 py-2"
						>
							<Phone className="w-4 h-4" />
							<span className="font-bold">01xxxxxxxxxx</span>
						</a>
						<a
							href="#booking"
							onClick={() => setMobileOpen(false)}
							className="bg-primary-600 text-white px-6 py-3 rounded-full text-center font-bold mt-2"
						>
							احجز حصة
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
