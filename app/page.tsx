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
            الإصدار الأخير v0.4.2
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
  const features = [
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
            برنامج شامل يغطي جميع احتياجات عملك
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] border-2 border-emerald-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#0f8a5f] text-white px-4 py-1 rounded-full text-sm font-bold">
              نسخة محلات البيع
            </span>
            <span className="text-[#6b7280] text-sm">2,000 جنيه</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
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
  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const getLocation = (): Promise<string> => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) { resolve("غير محدد"); return; }
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve(`https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`),
        () => resolve("غير محدد"),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "الاسم مطلوب";
    else if (/\d/.test(form.name)) e.name = "الاسم يجب أن يكون حروف فقط";
    if (!form.phone.trim()) e.phone = "رقم الهاتف مطلوب";
    else if (!/^\d{11}$/.test(form.phone.trim())) e.phone = "رقم الهاتف يجب أن يكون 11 رقم";
    if (!form.email.trim()) e.email = "البريد الإلكتروني مطلوب";
    else if (!form.email.includes("@")) e.email = "البريد الإلكتروني غير صحيح";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border-2 ${errors[field] ? "border-red-400 bg-red-50" : "border-gray-200"} focus:border-[#0f8a5f] outline-none text-sm`;

  const plans = [
    {
      name: "اشتراك شهري",
      price: "150",
      unit: "جنيه/شهر",
      badge: "مرن",
      badgeColor: "bg-[#6366f1]",
      color: "border-[#6366f1]",
      features: [
        "جميع مميزات البرنامج الكاملة",
        "تحديثات مستمرة مجانية",
        "دعم فني سريع عبر واتساب",
        "لا يحتاج دفعة كبيرة",
      ],
    },
    {
      name: "اشتراك 3 أشهر",
      price: "300",
      unit: "جنيه",
      badge: "خصم 33%",
      badgeColor: "bg-[#f59e0b]",
      color: "border-[#f59e0b]",
      features: [
        "جميع مميزات البرنامج الكاملة",
        "تحديثات مستمرة مجانية",
        "دعم فني سريع على مدار الساعة",
        "توفر 150 جنيه",
      ],
    },
    {
      name: "اشتراك 6 أشهر",
      price: "550",
      unit: "جنيه",
      badge: "الأفضل",
      badgeColor: "bg-[#0f8a5f]",
      color: "border-[#0f8a5f]",
      features: [
        "جميع مميزات البرنامج الكاملة",
        "تحديثات مستمرة مجانية",
        "دعم فني سريع على مدار الساعة",
        "أولوية في الدعم",
        "توفر 350 جنيه",
      ],
    },
    {
      name: "اشتراك سنوي",
      price: "1,000",
      unit: "جنيه",
      badge: "خصم 44%",
      badgeColor: "bg-[#12231f]",
      color: "border-[#12231f]",
      features: [
        "جميع مميزات البرنامج الكاملة",
        "تحديثات مستمرة مجانية",
        "دعم فني سريع على مدار الساعة",
        "أولوية قصوى في الدعم",
        "توفر 800 جنيه",
      ],
    },
    {
      name: "اشتراك دائم",
      price: "2,000",
      unit: "جنيه",
      badge: "الأكثر وفوراً",
      badgeColor: "bg-[#dc2626]",
      color: "border-[#dc2626]",
      features: [
        "جميع مميزات البرنامج الكاملة",
        "تحديثات مستمرة مجانية للأبد",
        "دعم فني سريع مجاني للأبد",
        "أولوية قصوى في الدعم",
        "دفعة واحدة فقط",
        "وفور 1,000 جنيه",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-[#f4f6fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#12231f] mb-4">
            خطط الأسعار
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            اختر الخطة المناسبة لاحتياجات عملك — مع تحديثات مستمرة ودعم فني سريع
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                <button
                  onClick={() => { setSelectedPlan(plan.name + " - " + plan.price + " " + plan.unit); setShowModal(true); setSent(false); setErrors({}); setForm({ name: "", phone: "", email: "" }); }}
                  className={`block text-center w-full ${plan.badgeColor} text-white py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity cursor-pointer`}
                >
                  اشتراك الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {sent ? (
              <div className="text-center py-6">
                <span className="text-5xl block mb-4">✅</span>
                <h3 className="text-xl font-extrabold text-[#12231f] mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-[#6b7280] mb-2">سنتواصل معك قريباً لتثبيت الخطة</p>
                <p className="text-[#6b7280] text-sm mb-6">الخطة: {selectedPlan}</p>
                <button onClick={() => setShowModal(false)} className="bg-[#0f8a5f] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0b6e4b] transition-colors">إغلاق</button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-extrabold text-[#12231f] mb-1">اشتراك الآن</h3>
                <p className="text-[#6b7280] text-sm mb-1">الخطة المختارة: <span className="font-bold text-[#0f8a5f]">{selectedPlan}</span></p>
                <p className="text-[#6b7280] text-sm mb-6">املأ بياناتك للتواصل معك وتثبيت الخطة</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">الاسم <span className="text-red-500">*</span></label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass("name")} placeholder="الاسم الكامل (حروف فقط)" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">رقم الهاتف <span className="text-red-500">*</span></label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 11) })} className={inputClass("phone")} placeholder="01XXXXXXXXX" dir="ltr" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">البريد الإلكتروني <span className="text-red-500">*</span></label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass("email")} placeholder="example@email.com" dir="ltr" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => { if (!validate()) return; setShowConfirm(true); }}
                    disabled={sending}
                    className="flex-1 bg-[#0f8a5f] text-white py-3 rounded-xl font-bold hover:bg-[#0b6e4b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    تأكيد الاشتراك
                  </button>
                  <button onClick={() => setShowModal(false)} className="px-6 py-3 rounded-xl font-bold text-[#6b7280] border-2 border-gray-200 hover:bg-gray-50 transition-colors">إلغاء</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowConfirm(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center" onClick={(e) => e.stopPropagation()}>
            <span className="text-5xl block mb-4">⚠️</span>
            <h3 className="text-xl font-extrabold text-[#12231f] mb-3">تأكيد البيانات</h3>
            <p className="text-[#6b7280] text-sm mb-6">برجاء التأكد من أن البيانات المكتوبة صحيحة للتواصل معك وتثبيت الخطة بشكل سليم</p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-right text-sm space-y-1">
              <p><span className="font-bold">الاسم:</span> {form.name}</p>
              <p><span className="font-bold">الهاتف:</span> {form.phone}</p>
              <p><span className="font-bold">البريد:</span> {form.email}</p>
              <p><span className="font-bold">الخطة:</span> {selectedPlan}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={async () => {
                setShowConfirm(false);
                setSending(true);
                const locationText = await getLocation();
                try {
                  await fetch("/api/telegram", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email, activity: selectedPlan, address: "", location: locationText }),
                  });
                } catch {}
                setSending(false);
                setSent(true);
              }} disabled={sending} className="flex-1 bg-[#0f8a5f] text-white py-3 rounded-xl font-bold hover:bg-[#0b6e4b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {sending ? "جاري الإرسال..." : "تأكيد وإرسال"}
              </button>
              <button onClick={() => setShowConfirm(false)} className="px-6 py-3 rounded-xl font-bold text-[#6b7280] border-2 border-gray-200 hover:bg-gray-50 transition-colors">تعديل</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Trial() {
  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", activity: "", phone: "", email: "", address: "" });

  const getLocation = (): Promise<string> => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) { resolve("غير محدد"); return; }
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve(`https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`),
        () => resolve("غير محدد"),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "الاسم مطلوب";
    else if (/\d/.test(form.name)) e.name = "الاسم يجب أن يكون حروف فقط";
    if (!form.phone.trim()) e.phone = "رقم الهاتف مطلوب";
    else if (!/^\d{11}$/.test(form.phone.trim())) e.phone = "رقم الهاتف يجب أن يكون 11 رقم";
    if (!form.email.trim()) e.email = "البريد الإلكتروني مطلوب";
    else if (!form.email.includes("@")) e.email = "البريد الإلكتروني غير صحيح";
    if (!form.address.trim()) e.address = "العنوان مطلوب";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setShowConfirm(true);
  };

  const confirmSubmit = async () => {
    setShowConfirm(false);
    setSending(true);
    const locationText = await getLocation();
    try {
      await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, location: locationText }),
      });
      setSent(true);
      const a = document.createElement("a");
      a.href = "https://github.com/amrromya/TABARAK/releases/download/v0.4.2/_0.4.2_x64-setup.exe";
      a.download = "tabarak_0.4.2_x64-setup.exe";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {}
    setSending(false);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border-2 ${errors[field] ? "border-red-400 bg-red-50" : "border-gray-200"} focus:border-[#0f8a5f] outline-none text-sm`;

  return (
    <section id="trial" className="py-20 px-4 bg-gradient-to-bl from-[#0f8a5f] to-[#12231f]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
          <svg className="w-16 h-16 mx-auto mb-6 text-white animate-window-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
          </svg>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">نسخة تجريبية مجانية</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">جرّب البرنامج لمدة 7 أيام مجاناً بدون بطاقة ائتمان. جميع المميزات متاحة في النسخة التجريبية.</p>
          <button
            onClick={() => { setShowForm(true); setSent(false); setErrors({}); setForm({ name: "", activity: "", phone: "", email: "", address: "" }); }}
            className="bg-white text-[#0f8a5f] px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>⬇</span> تحميل النسخة التجريبية
          </button>
          <p className="text-white/50 text-sm mt-6">يعمل على Windows 10/11 — حجم التحميل 25 MB تقريباً</p>
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
                <p className="text-[#6b7280] text-sm mb-6">املأ البيانات للحصول على رابط التحميل</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">الاسم <span className="text-red-500">*</span></label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass("name")} placeholder="الاسم الكامل (حروف فقط)" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
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
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 11) })} className={inputClass("phone")} placeholder="01XXXXXXXXX" dir="ltr" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">البريد الإلكتروني <span className="text-red-500">*</span></label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass("email")} placeholder="example@email.com" dir="ltr" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#374151] mb-1">العنوان <span className="text-red-500">*</span></label>
                    <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={inputClass("address")} placeholder="المدينة / المنطقة" />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={handleSubmit} disabled={sending} className="flex-1 bg-[#0f8a5f] text-white py-3 rounded-xl font-bold hover:bg-[#0b6e4b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {sending ? "جاري الإرسال..." : "تحميل الآن"}
                  </button>
                  <button onClick={() => setShowForm(false)} className="px-6 py-3 rounded-xl font-bold text-[#6b7280] border-2 border-gray-200 hover:bg-gray-50 transition-colors">إلغاء</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowConfirm(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center" onClick={(e) => e.stopPropagation()}>
            <span className="text-5xl block mb-4">⚠️</span>
            <h3 className="text-xl font-extrabold text-[#12231f] mb-3">تأكيد البيانات</h3>
            <p className="text-[#6b7280] text-sm mb-6">برجاء التأكد من أن البيانات المكتوبة صحيحة لاتمام عملية التحميل والتواصل معك بشكل سليم</p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-right text-sm space-y-1">
              <p><span className="font-bold">الاسم:</span> {form.name}</p>
              <p><span className="font-bold">الهاتف:</span> {form.phone}</p>
              <p><span className="font-bold">البريد:</span> {form.email}</p>
              {form.activity && <p><span className="font-bold">نوع النشاط:</span> {form.activity}</p>}
              <p><span className="font-bold">العنوان:</span> {form.address}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={confirmSubmit} className="flex-1 bg-[#0f8a5f] text-white py-3 rounded-xl font-bold hover:bg-[#0b6e4b] transition-colors">تأكيد وتحميل</button>
              <button onClick={() => setShowConfirm(false)} className="px-6 py-3 rounded-xl font-bold text-[#6b7280] border-2 border-gray-200 hover:bg-gray-50 transition-colors">تعديل</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function MacBanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <svg className="w-16 h-16 text-white animate-shimmer" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="w-px h-12 bg-white/20" />
            <span className="text-5xl font-extrabold text-white">Mac</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            نسخة Mac قريباً
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            نعمل حالياً على إصدار مخصص لأجهزة Apple Mac — تابعونا للتحديثات
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-xl text-white font-bold text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-soft-pulse" />
              قيد التطوير
            </span>
            <span className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-xl text-white/80 text-sm">
              macOS Sonoma & Ventura
            </span>
            <span className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-xl text-white/80 text-sm">
              Apple Silicon & Intel
            </span>
          </div>
        </div>
      </div>
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
      <MacBanner />
      <Trial />
      <Contact />
      <Footer />
    </main>
  );
}
