
interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Sign Up Your Business",
    description: "Create your business account with basic information. Quick and easy onboarding process."
  },
  {
    number: 2,
    title: "Post Your Deals",
    description: "Fill out a simple form with deal details, images, and call-to-action. Submit for review."
  },
  {
    number: 3,
    title: "Track Performance",
    description: "Monitor views, clicks, and engagement. See what works and optimize your offers."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-semibold text-slate-900 mb-4">How it Works</h2>
        <p className="font-baloo text-xl text-slate-600 mb-16">Get started in 3 simple steps</p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              {/* Number Circle */}
              <div className="w-12 h-12 font-montserrat bg-[#FF5C00] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-md">
                {step.number}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

