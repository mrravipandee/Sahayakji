import Link from 'next/link';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const becomeWorkerLink = "https://wa.me/917058548204?text=Hi%2C%20I%20want%20to%20become%20a%20worker%20on%20SahayakJi";
  const contactLink = "https://wa.me/917058548204?text=Hi%2C%20I%20have%20a%20question%20about%20SahayakJi";

  return (
    <footer className="bg-[#1e1a4d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              Sahayak Ji
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Connecting households with trusted local workers. Get electricians, plumbers, painters, carpenters, and more — all through a simple WhatsApp message.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={contactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                <WhatsAppIcon />
                <span>Chat with us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-[#ffc37c] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-300 hover:text-[#ffc37c] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-[#ffc37c] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Workers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Workers</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={becomeWorkerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ffc37c] transition-colors"
                >
                  Become a Worker
                </a>
              </li>
              <li>
                <a 
                  href={contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ffc37c] transition-colors"
                >
                  Worker Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} SahayakJi. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for local communities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
