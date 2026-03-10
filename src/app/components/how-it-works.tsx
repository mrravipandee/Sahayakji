const steps = [
  {
    number: '01',
    title: 'Message on WhatsApp',
    description: 'Simply drop us a text detailing the service you need and your location.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Connect a Worker',
    description: 'We instantly match you with the best available verified professional in your area.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Work Gets Done',
    description: 'The expert arrives at your doorstep and completes the job professionally.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <span className="text-[#32297c] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Process
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Getting reliable help shouldn&apos;t be complicated. Our process is as simple as chatting with a friend.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Continuous Dashed Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-18 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-300 z-0"></div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="group relative flex flex-col items-center text-center">
                
                {/* Number Badge */}
                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-4 text-5xl font-extrabold text-slate-100/80 group-hover:text-[#32297c]/10 transition-colors duration-500 z-0 pointer-events-none">
                  {step.number}
                </div>

                {/* Icon Container with glowing background */}
                <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-white border-2 border-slate-100 rounded-full mb-8 text-[#32297c] shadow-sm transition-all duration-300 group-hover:border-[#32297c] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(50,41,124,0.15)] group-hover:-translate-y-2">
                  <div className="bg-slate-50 p-4 rounded-full group-hover:bg-indigo-50 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-white px-6 py-8 rounded-3xl border border-slate-100 shadow-sm w-full transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-[#32297c]">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}