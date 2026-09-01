import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">أستاذ [اسمك]</h3>
            <p className="text-gray-400 leading-relaxed">مدرس رياضيات خصوصي. 8 سنين في مساعدة الطلاب يتخطوا حاجز الخوف من الرياضيات.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معايا</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:01xxxxxxxxxx" className="hover:text-accent-400 transition">01xxxxxxxxxx</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:your.email@example.com" className="hover:text-accent-400 transition">your.email@example.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>القاهرة، مصر (أونلاين من أي مكان)</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تابعني</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-dark transition font-bold text-sm">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-dark transition font-bold text-sm">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-dark transition font-bold text-sm">YT</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-dark transition font-bold text-sm">TK</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © 2025 [اسمك]. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}
