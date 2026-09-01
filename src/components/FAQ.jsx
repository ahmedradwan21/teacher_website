import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const faqs = [
    { q: 'الحصة بتكون أونلاين ولا حضوري؟', a: 'الحصات أونلاين عن طريق Zoom أو Google Meet. لو في نفس المنطقة ممكن نرتب حضوري حسب الظروف.' },
    { q: 'ممكن أغير الموعد لو حصلت مشكلة؟', a: 'آه طبعاً، بس لازم يكون الإلغاء قبل 24 ساعة عشان نقدر نجدول الحصة تاني بدون خصم.' },
    { q: 'بتدرّس مرحلة ابتدائي قد إيه؟', a: 'من 6 سنين لـ 12 سنة. بعتمد على ألوان وألعاب ومسائل يومية عشان الطفل يحب الرياضيات من بدري.' },
    { q: 'الأسعار دي ثابتة ولا في خصومات؟', a: 'الباقة الشهرية فيها خصم أصلاً. لو جبت صاحبك هنحسبلك خصم إضافي 10% على الشهر الجاي.' },
    { q: 'بتقدر تساعدني في SAT بجد؟', a: 'آه، جربت معايا أكتر من 20 طالب جابوا scores عالية. بدرّس استراتيجيات حل المسائل مش بس قواعد.' },
    { q: 'أنا مبتدئ خالص، هلاقي صعوبة؟', a: 'خالص! كلنا بنبدأ من صفر. هنبدأ بأساسيات الجمع والطرح وبعدين نبني فوقها. مفيش حد بيتولد عارف رياضيات.' },
    { q: 'بتعمل اختبار تحديد مستوى؟', a: 'آه، اختبار مجاني 15 دقيقة عشان نعرف نبدأ منين ونعمل خطة مناسبة لمستواك.' },
    { q: 'بقبض بالفيزا ولا كاش بس؟', a: 'ممكن فودافون كاش، انستاباي، أو تحويل بنكي. قريباً هنضيف دفع أونلاين بالكارت.' }
  ]

  return (
    <section id="faq" className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-500">عندك سؤال تاني؟ ابعتلي على واتساب</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <button onClick={() => setOpen(open === idx ? null : idx)} className="w-full flex justify-between items-center p-6 text-right">
                <span className="font-bold text-dark">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary-600 transition-transform duration-300 ${open === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-6 pb-6 text-gray-600 leading-relaxed transition-all duration-300 ${open === idx ? 'block' : 'hidden'}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://wa.me/201xxxxxxxxx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition font-bold">
            <MessageCircle className="w-5 h-5" />
            <span>سألني على واتساب</span>
          </a>
        </div>
      </div>
    </section>
  )
}
