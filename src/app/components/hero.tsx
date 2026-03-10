const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function Hero() {
    const whatsappLink = "https://wa.me/917058548204?text=Hi%2C%20I%20need%20a%20worker%20in%20my%20area";
    const becomeWorkerLink = "https://wa.me/917058548204?text=Hi%2C%20I%20want%20to%20become%20a%20worker%20on%20SahayakJi";

    return (
        <section className="relative overflow-hidden bg-slate-50 pt-20 pb-24 md:pt-28 md:pb-32">
            
            {/* Subtle light background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
                    
                    {/* Professional Trust Badge */}
                    <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 px-4 py-2 rounded-full mb-8 shadow-sm transition-shadow hover:shadow-md cursor-default">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                        </span>
                        <span className="text-sm font-medium text-slate-600 tracking-wide">Trusted by 1,000+ households</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                        Find Trusted Local Workers <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-[#FFC37C]">
                            in Minutes
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Electricians, plumbers, painters, carpenters and more — available near you.
                        Get your work done quickly by verified local professionals.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-3.5 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                        >
                            <WhatsAppIcon />
                            <span>Find Worker on WhatsApp</span>
                        </a>
                        <a
                            href={becomeWorkerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                        >
                            Become a Worker
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-600 font-medium border-t border-slate-200 pt-8 w-full max-w-3xl">
                        {[
                            'Verified Workers',
                            'Fast Response',
                            'Affordable Prices'
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-2 group cursor-default">
                                <div className="bg-indigo-50 p-1.5 rounded-full group-hover:bg-indigo-100 transition-colors">
                                    <svg className="w-4 h-4 text-[#32297c]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="group-hover:text-slate-900 transition-colors">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}