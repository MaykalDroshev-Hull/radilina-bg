import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 px-6 md:px-10 lg:px-12 mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
          <span className="text-base md:text-lg lg:text-xl text-gray-700 font-body">Свържете се с нас</span>
        </div>
        {/* Right side */}
        <p className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
          <span className="font-semibold text-gray-900 font-headline leading-tight">
            Готови сме да отговорим на вашите въпроси
          </span>
          <span className="text-gray-400 font-headline leading-tight">
            {" "}и да обсъдим вашия следващ проект
          </span>
        </p>
      </div>

      {/* Contact Section */}
      <section id="contact" className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
            {/* Email */}
            <div className="bg-white rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-5 md:p-6 lg:p-7 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-50 p-2.5 md:p-3 lg:p-3.5 rounded-full flex-shrink-0">
                  <Mail className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mb-1 md:mb-2 font-headline">
                    Имейл
                  </h3>
                  <a 
                    href="mailto:hello@radilina.bg" 
                    className="text-sm md:text-base lg:text-lg text-gray-600 hover:text-red-500 transition-colors font-body"
                  >
                    hello@radilina.bg
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-5 md:p-6 lg:p-7 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-50 p-2.5 md:p-3 lg:p-3.5 rounded-full flex-shrink-0">
                  <Phone className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mb-1 md:mb-2 font-headline">
                    Телефон
                  </h3>
                  <div className="space-y-1">
                    <a 
                      href="tel:+359889964773" 
                      className="text-sm md:text-base lg:text-lg text-gray-600 hover:text-red-500 transition-colors font-body block"
                    >
                      +359 889 964 773
                    </a>
                    <a 
                      href="tel:+359887181368" 
                      className="text-sm md:text-base lg:text-lg text-gray-600 hover:text-red-500 transition-colors font-body block"
                    >
                      +359 887 181 368
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-5 md:p-6 lg:p-7 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-red-50 p-2.5 md:p-3 lg:p-3.5 rounded-full flex-shrink-0">
                  <MapPin className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mb-1 md:mb-2 font-headline">
                    Локация
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 font-body leading-relaxed">
                    Троян, България<br />
                    Посещения по предварителна уговорка
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-6 md:p-7 lg:p-8">
            <form className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm md:text-base lg:text-base font-medium text-gray-900 mb-2 md:mb-2.5 font-body">
                  Име
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-body"
                  placeholder="Вашето име"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm md:text-base lg:text-base font-medium text-gray-900 mb-2 md:mb-2.5 font-body">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-body"
                  placeholder="+359 ..."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm md:text-base lg:text-base font-medium text-gray-900 mb-2 md:mb-2.5 font-body">
                  Съобщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all font-body"
                  placeholder="Разкажете ни за вашия проект или задайте въпрос..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base lg:text-base font-medium hover:bg-gray-800 active:scale-95 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 md:gap-2.5 font-body"
              >
                Изпратете съобщение
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

