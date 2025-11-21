import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <div className="flex items-start justify-between w-full gap-6 px-12 mt-12 mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="text-xl text-gray-700">Свържете се с нас</span>
        </div>
        {/* Right side */}
        <p className="max-w-[50%] text-right text-4xl">
          <span className="font-semibold text-gray-900">
            Готови сме да отговорим на вашите въпроси
          </span>
          <span className="text-gray-400">
            {" "}и да обсъдим вашия следващ проект
          </span>
        </p>
      </div>

      {/* Contact Section */}
      <section id="contact" className="w-full px-12 mb-12">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-full">
                  <Mail className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Имейл
                  </h3>
                  <a 
                    href="mailto:hello@radilina.bg" 
                    className="text-base text-gray-600 hover:text-red-500 transition-colors"
                  >
                    hello@radilina.bg
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-full">
                  <Phone className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Телефон
                  </h3>
                  <a 
                    href="tel:+359123456789" 
                    className="text-base text-gray-600 hover:text-red-500 transition-colors"
                  >
                    +359 123 456 789
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-full">
                  <MapPin className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Локация
                  </h3>
                  <p className="text-base text-gray-600">
                    Троян, България<br />
                    Посещения по предварителна уговорка
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium text-gray-900 mb-2">
                  Име
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Вашето име"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block font-medium text-gray-900 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="+359 ..."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium text-gray-900 mb-2">
                  Съобщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all"
                  placeholder="Разкажете ни за вашия проект или задайте въпрос..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                Изпратете съобщение
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

