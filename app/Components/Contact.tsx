import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[var(--soft-mint)] to-[var(--sage-mist)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-subheadline text-[var(--soft-rose)] text-xl italic mb-4">Get In Touch</p>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
            Contact Us
          </h2>
          <p className="font-body text-lg text-[var(--foreground)] max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for custom orders, questions, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[var(--soft-rose)]/20 p-3 rounded-full">
                  <Mail className="text-[var(--soft-rose)]" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-[var(--foreground)] mb-2">
                    Email
                  </h3>
                  <a href="mailto:hello@radilina.bg" className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">
                    hello@radilina.bg
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[var(--soft-rose)]/20 p-3 rounded-full">
                  <Phone className="text-[var(--soft-rose)]" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-[var(--foreground)] mb-2">
                    Phone
                  </h3>
                  <a href="tel:+359123456789" className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">
                    +359 123 456 789
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[var(--soft-rose)]/20 p-3 rounded-full">
                  <MapPin className="text-[var(--soft-rose)]" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-[var(--foreground)] mb-2">
                    Location
                  </h3>
                  <p className="font-body text-[var(--foreground)]">
                    Sofia, Bulgaria<br />
                    Visit our studio by appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-body font-medium text-[var(--foreground)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--foreground)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--soft-rose)] focus:border-transparent font-body"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-body font-medium text-[var(--foreground)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--foreground)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--soft-rose)] focus:border-transparent font-body"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-body font-medium text-[var(--foreground)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--foreground)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--soft-rose)] focus:border-transparent font-body resize-none"
                  placeholder="Tell us about your project or question..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--soft-rose)] text-white px-8 py-4 rounded-full font-body font-medium hover:bg-[var(--soft-rose)]/90 transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

