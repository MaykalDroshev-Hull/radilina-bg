import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 px-6 md:px-12 mt-8 md:mt-12 mb-8 md:mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
          <span className="text-base md:text-xl text-gray-700 font-body">Свържете се с нас</span>
        </div>
        {/* Right side */}
        <p className="md:max-w-[50%] text-left md:text-right text-xl md:text-4xl">
          <span className="font-semibold text-gray-900 font-headline">
            Готови сме да отговорим на вашите въпроси
          </span>
          <span className="text-gray-400 font-headline">
            {" "}и да обсъдим вашия следващ проект
          </span>
        </p>
      </div>

      {/* Contact Section */}
      <section id="contact" className="w-full px-6 md:px-12 mb-8 md:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Email */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-sm p-5 md:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-50 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <Mail className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 font-headline">
                    Имейл
                  </h3>
                  <a 
                    href="mailto:hello@radilina.bg" 
                    className="text-sm md:text-base text-gray-600 hover:text-red-500 transition-colors font-body"
                  >
                    hello@radilina.bg
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-sm p-5 md:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-50 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <Phone className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 font-headline">
                    Телефон
                  </h3>
                  <a 
                    href="tel:+359123456789" 
                    className="text-sm md:text-base text-gray-600 hover:text-red-500 transition-colors font-body"
                  >
                    +359 123 456 789
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-sm p-5 md:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-50 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <MapPin className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 font-headline">
                    Локация
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-body">
                    Троян, България<br />
                    Посещения по предварителна уговорка
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm p-6 md:p-8">
            <form className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-900 mb-2 font-body">
                  Име
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-body"
                  placeholder="Вашето име"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm md:text-base font-medium text-gray-900 mb-2 font-body">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-body"
                  placeholder="+359 ..."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-900 mb-2 font-body">
                  Съобщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all font-body"
                  placeholder="Разкажете ни за вашия проект или задайте въпрос..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 font-body"
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

