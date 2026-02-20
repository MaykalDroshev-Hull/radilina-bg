"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function ContactForm() {
  const t = useTranslations();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  // Check if this is a course inquiry and prefill the message
  useEffect(() => {
    const inquiry = searchParams.get('inquiry');
    if (inquiry === 'course') {
      const courseMessage = locale === 'bg'
        ? 'Здравейте,\n\nИскам да се запиша за курс по грънчарство. Моля, свържете се с мен за повече информация.\n\nБлагодаря!'
        : locale === 'en'
        ? 'Hello,\n\nI would like to sign up for a pottery course. Please contact me for more information.\n\nThank you!'
        : 'Bună ziua,\n\nAș dori să mă înscriu la un curs de ceramică. Vă rog să mă contactați pentru mai multe informații.\n\nMulțumesc!';
      
      setFormData(prev => ({
        ...prev,
        message: courseMessage,
      }));
    }
  }, [searchParams, locale]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || t('contact.formSuccess'),
        });
        // Reset form
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || t('contact.formError'),
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('contact.formError'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 px-6 md:px-10 lg:px-12 mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
          <span className="text-base md:text-lg lg:text-xl text-gray-400 font-body">{t('contact.sectionTitle')}</span>
        </div>
        {/* Right side */}
        <p className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
          <span className="font-semibold text-white font-headline leading-tight">
            {t('contact.header')}
          </span>
          <span className="text-gray-500 font-headline leading-tight">
            {" "}{t('contact.headerSub')}
          </span>
        </p>
      </div>

      {/* Contact Section */}
      <section id="contact" className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
            {/* Email */}
            <div className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-5 md:p-6 lg:p-7 hover:shadow-md transition-all cursor-pointer border border-gray-800">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-500/10 p-2.5 md:p-3 lg:p-3.5 rounded-full flex-shrink-0">
                  <Mail className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-white mb-1 md:mb-2 font-headline">
                    {t('contact.email')}
                  </h3>
                  <a 
                    href="mailto:hello@radilina.bg" 
                    className="text-sm md:text-base lg:text-lg text-gray-400 hover:text-red-500 transition-colors font-body"
                  >
                    hello@radilina.bg
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-5 md:p-6 lg:p-7 hover:shadow-md transition-all cursor-pointer border border-gray-800">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-500/10 p-2.5 md:p-3 lg:p-3.5 rounded-full flex-shrink-0">
                  <Phone className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-white mb-1 md:mb-2 font-headline">
                    {t('contact.phone')}
                  </h3>
                  <div className="space-y-1">
                    <a 
                      href="tel:+359889964773" 
                      className="text-sm md:text-base lg:text-lg text-gray-400 hover:text-red-500 transition-colors font-body block"
                    >
                      +359 889 964 773
                    </a>
                    <a 
                      href="tel:+359887181368" 
                      className="text-sm md:text-base lg:text-lg text-gray-400 hover:text-red-500 transition-colors font-body block"
                    >
                      +359 887 181 368
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop Location */}
            <a 
              href="https://maps.app.goo.gl/ogmz6BxABdWoQzfT9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-5 md:p-6 lg:p-7 hover:shadow-md transition-all cursor-pointer block border border-gray-800"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-500/10 p-2.5 md:p-3 lg:p-3.5 rounded-full flex-shrink-0">
                  <MapPin className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-white mb-1 md:mb-2 font-headline">
                    {t('contact.workshop')}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 hover:text-red-500 transition-colors font-body leading-relaxed">
                    {t('contact.workshopAddress')}<br />
                    {t('contact.workshopNote')}
                  </p>
                </div>
              </div>
            </a>

            {/* Warehouse Location */}
            <a 
              href="https://www.google.com/maps/place/Lagat,+ul.+%22Hristo+Botev%22+231,+5600+Troyan,+Bulgaria/@42.8797534,24.70638,17z/data=!3m1!4b1!4m6!3m5!1s0x40a97f3273ccbc2d:0x85743a1a9dd22f4c!8m2!3d42.8797495!4d24.7089549!16s%2Fg%2F11khm_mm3b?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-5 md:p-6 lg:p-7 hover:shadow-md transition-all cursor-pointer block border border-gray-800"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-500/10 p-2.5 md:p-3 lg:p-3.5 rounded-full flex-shrink-0">
                  <MapPin className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-white mb-1 md:mb-2 font-headline">
                    {t('contact.warehouse')}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 hover:text-red-500 transition-colors font-body leading-relaxed">
                    {t('contact.warehouseAddress')}<br />
                    {t('contact.warehouseAddress2')}
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-6 md:p-7 lg:p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {submitStatus.type && (
                <div className={`p-4 rounded-xl ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  <p className="text-sm md:text-base font-body">{submitStatus.message}</p>
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm md:text-base lg:text-base font-medium text-white mb-2 md:mb-2.5 font-body">
                  {t('contact.formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-gray-700 bg-[#1a1614] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--soft-rose)] focus:border-transparent transition-all font-body"
                  placeholder={t('contact.formNamePlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm md:text-base lg:text-base font-medium text-white mb-2 md:mb-2.5 font-body">
                  {t('contact.formPhone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-gray-700 bg-[#1a1614] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--soft-rose)] focus:border-transparent transition-all font-body"
                  placeholder={t('contact.formPhonePlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm md:text-base lg:text-base font-medium text-white mb-2 md:mb-2.5 font-body">
                  {t('contact.formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-gray-700 bg-[#1a1614] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--soft-rose)] focus:border-transparent resize-none transition-all font-body"
                  placeholder={t('contact.formMessagePlaceholder')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base lg:text-base font-medium hover:bg-gray-200 active:scale-95 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 md:gap-2.5 font-body disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.formSubmitting') : t('contact.formSubmit')}
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-gray-400">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
