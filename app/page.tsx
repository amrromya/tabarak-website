"use client";

import { useState } from "react";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-[#0f8a5f] to-[#12231f]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-300 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/20">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-semibold">
            الإصدار الأخير v0.2.7
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          تبارك
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100/90 mb-4 font-bold">
          نظام الحسابات المتكامل
        </p>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          إدارة المبيعات والمشتريات والمخزون والعملاء والمحاسبة والصيانة — كل ما
          تحتاجه في برنامج واحد
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#trial"
            className="bg-white text-[#0f8a5f] px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            جرّب مجاناً
          </a>
          <a
            href="#pricing"
            className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
          >
            خطط الأسعار
          </a>
        </div>
        <div className="mt-16 mx-auto max-w-3xl bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-2xl">
          <div className="bg-[#1c352e] rounded-xl overflow-hidden aspect-[16/9] flex items-center justify-center">
            <img
            src="/watermark.png"
              alt="تبارك"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const allFeatures = [
    {
      icon: "📊",
      title: "إدارة المبيعات والمشتريات",
      desc: "نقطة بيع احترافية مع فواتير مبيعات ومشتريات ومردودات وتقارير مفصلة",
    },
    {
      icon: "📦",
      title: "إدارة المخزون والمستودعات",
      desc: "تتبع الأصناف والكميات والتحويل بين المستودعات والجرد",
    },
    {
      icon: "🤝",
      title: "إدارة العملاء والموردين",
      desc: "كشف حساب تفصيلي وإجمالي مع سندات القبض والصرف",
    },
    {
      icon: "💰",
      title: "نظام المحاسبة",
      desc: "سندات قبض وصرف وديون وتقارير مالية شاملة",
    },
    {
      icon: "👥",
      title: "إدارة متعددة المستخدمين",
      desc: "حسابات مستخدمين بصلاحيات مخصصة لكل قسم",
      badge: "نسخة البيع",
    },
    {
      icon: "🔧",
      title: "نظام الصيانة",
      desc: "إدارة طلبات الصيانة والفنين والتقارير والعملاء",
      badge: "نسخة الصيانة",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#12231f] mb-4">
            مميزات البرنامج
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            نسختين متخصصين تناسب احتياجات عملك
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* نسخة بيع */}
          <div className="bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] border-2 border-emerald-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#0f8a5f] text-white px-4 py-1 rounded-full text-sm font-bold">
                نسخة محلات البيع
              </span>
              <span className="text-[#6b7280] text-sm">1,500 جنيه</span>
            </div>
            <div className="space-y-4">
              {allFeatures
                .filter(
                  (f) =>
                    !f.badge || f.badge === "نسخة البيع"
                )
                .map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">{f.icon}</span>
                    <div>
                      <h4 className="font-bold text-[#12231f]">{f.title}</h4>
                      <p className="text-[#6b7280] text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* نسخة صيانة */}
          <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] border-2 border-blue-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#2563eb] text-white px-4 py-1 rounded-full text-sm font-bold">
                نسخة الصيانة
              </span>
              <span className="text-[#6b7280] text-sm">2,000 جنيه</span>
            </div>
            <div className="space-y-4">
              {allFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{f.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-[#12231f]">{f.title}</h4>
                      {f.badge && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-bold">
                          {f.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[#6b7280] text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  const screenshots = [
    { src: "/screenshots/dashboard.png", title: "لوحة التحكم" },
    { src: "/screenshots/pos.png", title: "فاتورة مبيعات" },
    { src: "/screenshots/inventory.png", title: "المخزون والمنتجات" },
    { src: "/screenshots/customers.png", title: "العملاء والديون" },
    { src: "/screenshots/reports.png", title: "التقارير" },
    { src: "/screenshots/maintenance.png", title: "الصيانة" },
    { src: "/screenshots/login.png", title: "شاشة الدخول" },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-20 px-4 bg-[#f4f6fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#12231f] mb-4">
            شوف البرنامج
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            واجهة عربية سهلة وبسيطة — مصممة لتسهيل العمل اليومي
          </p>
        </div>

        {/* Main Screenshot in Laptop Mockup */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-[#1a1a2e] rounded-t-2xl p-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-[#2d2d44] rounded-lg mx-4 px-4 py-1.5 text-xs text-white/50 text-center truncate">
              {screenshots[activeIdx].title} — تبارك
            </div>
          </div>
          <div className="bg-[#0a0a1a] rounded-b-2xl shadow-2xl overflow-hidden border-4 border-[#1a1a2e] border-t-0">
            <div className="relative bg-white">
              <img
                src={screenshots[activeIdx].src}
                alt={screenshots[activeIdx].title}
                className="w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.classList.add("flex", "items-center", "justify-center", "aspect-video");
                  const placeholder = document.createElement("div");
                  placeholder.className = "text-center text-gray-400 p-8";
                  placeholder.innerHTML = '<div className="text-6xl mb-4">📸</div><p className="text-lg font-bold">صورة: ' + screenshots[activeIdx].title + '</p><p className="text-sm mt-2">الصورة غير متوفرة بعد</p>';
                  target.parentElement!.appendChild(placeholder);
                }}
              />
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-4 justify-center flex-wrap">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                activeIdx === i
                  ? "border-[#0f8a5f] shadow-lg scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <div className="w-24 h-16 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={s.src}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement!;
                    parent.classList.add("flex", "items-center", "justify-center");
                    const span = document.createElement("span");
                    span.className = "text-xs text-gray-400 font-bold text-center px-1";
                    span.textContent = s.title;
                    parent.appendChild(span);
                  }}
                />
              </div>
              <div className={`text-center py-1.5 text-xs font-bold ${
                activeIdx === i ? "bg-[#0f8a5f] text-white" : "bg-gray-100 text-gray-600"
              }`}>
                {s.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "نسخة محلات البيع",
      price: "1,500",
      unit: "جنيه",
      badge: "الأكثر طلباً",
      badgeColor: "bg-[#0f8a5f]",
      color: "border-[#0f8a5f]",
      features: [
        "إدارة المبيعات والمشتريات",
        "إدارة المخزون والمستودعات",
        "إدارة العملاء والموردين",
        "نظام المحاسبة وسندات القبض/الصرف",
        "تقارير مبيعات مفصلة",
        "نقطة بيع احترافية",
        "تحديثات مجانية",
        "دعم فني",
      ],
    },
    {
      name: "نسخة الصيانة",
      price: "2,000",
      unit: "جنيه",
      badge: "شاملة",
      badgeColor: "bg-[#2563eb]",
      color: "border-[#2563eb]",
      features: [
        "جميع مميزات نسخة البيع",
        "إدارة متعددة المستخدمين بصلاحيات",
        "نظام الصيانة الكامل",
        "إدارة الفنيين وطلبات العمل",
        "تقارير الصيانة",
        "إدارة العملاء والموردين",
        "تحديثات مجانية",
        "دعم فني مميز",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-[#f4f6fa]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#12231f] mb-4">
            خطط الأسعار
          </h2>
          <p className="text-[#6b7280] text-lg">
            اختر النسخة المناسبة لاحتياجات عملك
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border-2 ${plan.color} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`${plan.badgeColor} text-white px-4 py-1 rounded-full text-sm font-bold`}
                  >
                    {plan.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#12231f] mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-extrabold text-[#0f8a5f]">
                    {plan.price}
                  </span>
                  <span className="text-[#6b7280] font-bold">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className="text-[#0f8a5f] text-lg">✓</span>
                      <span className="text-[#374151] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center ${plan.badgeColor} text-white py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity`}
                >
                  اطلب الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trial() {
  const [showForm, setShowForm] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", activity: "", phone: "", email: "", address: "" });

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) return;
    setSending(true);
    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        window.location.href = "https://github.com/amrromya/TABARAK/releases/download/v0.2.7/_0.2.7_x64-setup.exe";
      }
    } catch {}
    setSending(false);
  };

  return (
    <section
      id="trial"
      className="py-20 px-4 bg-gradient-to-bl from-[#0f8a5f] to-[#12231f]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
          <span className="text-5xl mb-6 block">📦</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            نسخة تجريبية مجانية
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            جرّب البرنامج لمدة 14 يوم مجاناً بدون بطاقة ائتمان. جميع المميزات
            متاحة في النسخة التجريبية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { setShowForm(true); setSent(false); setForm({ name: "", activity: "", phone: "", email: "", address: "" }); }}
              className="bg-white text-[#0f8a5f] px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>⬇</span>
              تحميل النسخة التجريبية
            </button>
          </div>
          <p className="text-white/50 text-sm mt-6">
            يعمل على Windows 10/11 — حجم التحميل 25 MB تقريباً
          </p>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {sent ? (
              <div className="text-center py-6">
                <span className="text-5xl block mb-4">✅</span>
                <h3 className="text-xl font-extrabold text-[#12231f] mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-[#6b7280] mb-6">جاري تحميل البرنامج...</p>
                <button onClick={() => setShowForm(false)} className="bg-[#0f8a5f] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0b6e4b] transition-colors">إغلاق</button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-extrabold text-[#12231f] mb-1">تحميل النسخة التجريبية</h3>
                <p className="text-[#6b7280] text-sm mb-6">املأ البياناتournée للحصول على رابط التحميل</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">الاسم <span className="text-red-500">*</span></label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0f8a5f] outline-none text-sm" placeholder="الاسم الكامل" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">نوع النشاط</label>
                    <select value={form.activity} onChange={(e) => setForm({ ...form, activity: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0f8a5f] outline-none text-sm bg-white">
                      <option value="">اختر نوع النشاط</option>
                      <option value="محل بيع">محل بيع</option>
                      <option value="ورشة صيانة">ورشة صيانة</option>
                      <option value="مطعم">مطعم</option>
                      <option value="صيدلية">صيدلية</option>
                      <option value="شركة">شركة</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">رقم الهاتف <span className="text-red-500">*</span></label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0f8a5f] outline-none text-sm" placeholder="01XXXXXXXXX" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">البريد الإلكتروني <span className="text-red-500">*</span></label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0f8a5f] outline-none text-sm" placeholder="example@email.com" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">العنوان</label>
                    <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0f8a5f] outline-none text-sm" placeholder="المدينة / المنطقة" />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={handleSubmit} disabled={sending || !form.name.trim() || !form.phone.trim() || !form.email.trim()} className="flex-1 bg-[#0f8a5f] text-white py-3 rounded-xl font-bold hover:bg-[#0b6e4b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {sending ? "جاري الإرسال..." : "تحميل الآن"}
                  </button>
                  <button onClick={() => setShowForm(false)} className="px-6 py-3 rounded-xl font-bold text-[#6b7280] border-2 border-gray-200 hover:bg-gray-50 transition-colors">إلغاء</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#12231f] mb-4">
          تواصل معنا
        </h2>
        <p className="text-[#6b7280] text-lg mb-12">
          عندك أي سؤال أو عايز تطلب البرنامج؟ تواصل معانا
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="https://wa.me/201277772930"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-4xl block mb-3">💬</span>
            <h4 className="font-bold text-lg mb-1">واتساب</h4>
            <p className="text-white/80 text-sm">تواصل معنا مباشرة</p>
          </a>
          <a
            href="https://t.me/+201277772930"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0088cc] text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-4xl block mb-3">✈️</span>
            <h4 className="font-bold text-lg mb-1">تليجرام</h4>
            <p className="text-white/80 text-sm">تواصل معنا مباشرة</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#12231f] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/app.png" alt="تبارك" className="w-10 h-10 rounded-lg" />
          <span className="text-xl font-extrabold">تبارك</span>
        </div>
        <p className="text-white/50 text-sm mb-6">
          نظام الحسابات المتكامل للمحلات والشركات
        </p>
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/40 text-sm">
            © 2026 تبارك — جميع الحقوق محفوظة — تصميم وتطوير المهندس عمرو روميه
          </p>
        </div>
      </div>
    </footer>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#12231f]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img
            src="/app.png"
            alt="تبارك"
            className="w-9 h-9 rounded-lg"
          />
          <span className="text-white font-extrabold text-lg">تبارك</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/70 hover:text-white text-sm font-semibold transition-colors">
            المميزات
          </a>
          <a href="#pricing" className="text-white/70 hover:text-white text-sm font-semibold transition-colors">
            الأسعار
          </a>
          <a href="#trial" className="text-white/70 hover:text-white text-sm font-semibold transition-colors">
            نسخة تجريبية
          </a>
          <a href="#contact" className="text-white/70 hover:text-white text-sm font-semibold transition-colors">
            تواصل معنا
          </a>
          <a
            href="#trial"
            className="bg-[#0f8a5f] text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#0b6e4b] transition-colors"
          >
            جرّب مجاناً
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1c352e] border-t border-white/10 px-4 py-4 space-y-3">
          <a href="#features" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white py-2 font-semibold">
            المميزات
          </a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white py-2 font-semibold">
            الأسعار
          </a>
          <a href="#trial" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white py-2 font-semibold">
            نسخة تجريبية
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white py-2 font-semibold">
            تواصل معنا
          </a>
        </div>
      )}
    </nav>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <Trial />
      <Contact />
      <Footer />
    </main>
  );
}
