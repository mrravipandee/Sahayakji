const trustPoints = [
  {
    title: 'Verified Local Workers',
    description: 'Every worker is verified and background-checked for your safety and peace of mind.',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Fast Response',
    description: 'Get connected to a worker within minutes. Most requests are fulfilled on the same day.',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Affordable Services',
    description: 'Fair and transparent pricing. No hidden charges. Pay directly to the worker.',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Trusted by Households',
    description: 'Join thousands of happy families who rely on SahayakJi for their home service needs.',
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function Trust() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-[#32297c] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Why Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Why Choose SahayakJi?
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            We&apos;re building a community of reliable workers and happy households. Your peace of mind is our top priority.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="group bg-white border border-slate-100 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1.5"
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-2xl mb-6 text-[#32297c] transition-all duration-300 group-hover:bg-[#32297c] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                {point.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-[#32297c]">
                {point.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-500 font-light leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Premium Stats Banner */}
        <div className="mt-20 md:mt-28 bg-slate-50 rounded-[2.5rem] border border-slate-100 p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {[
              { value: '1,000+', label: 'Happy Customers' },
              { value: '500+', label: 'Verified Workers' },
              { value: '30 min', label: 'Avg Response Time' },
              { value: '4.8★', label: 'Customer Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-5xl font-extrabold text-[#32297c] mb-2 tracking-tight transition-transform duration-300 group-hover:scale-105 group-hover:text-indigo-600">
                  {stat.value}
                </div>
                <div className="text-slate-500 font-medium md:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}