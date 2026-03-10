const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function CTA() {
  const whatsappLink = "https://wa.me/917058548204?text=Hi%2C%20I%20need%20a%20worker%20in%20my%20area";

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Boxed CTA Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#32297c] via-[#2a2265] to-[#1e1a4d] rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center shadow-2xl border border-indigo-900/50">
          
          {/* Decorative Background Glows */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#25D366]/20 rounded-full blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4"></div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Top Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl mb-8 text-[#25D366] shadow-[0_0_30px_rgba(37,211,102,0.15)]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Need a Worker Right Now?
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Just tap the button below and tell us what you need. We&apos;ll connect you with a trusted local professional immediately.
            </p>

            {/* Large WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20b858] text-white px-8 md:px-10 py-5 rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-1"
            >
              <WhatsAppIcon />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Availability Note */}
            <p className="mt-8 text-indigo-200/60 text-sm md:text-base font-medium tracking-wide uppercase">
              Available 7 AM - 10 PM • Response within minutes
            </p>

            {/* WhatsApp Chat Bubble Mockup */}
            <div className="mt-10 inline-flex items-center gap-3 bg-[#E7FFDB] text-[#075E54] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl rounded-tl-sm px-5 py-3 shadow-lg relative border border-[#dcf8c6]">
               {/* Tail for the chat bubble */}
               <div className="absolute -left-2 top-0 w-3 h-4 bg-[#E7FFDB] [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
               <svg className="w-5 h-5 text-[#128C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
               </svg>
               <span className="text-sm font-medium">Pre-filled: &quot;Hi, I need a worker in my area&quot;</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}