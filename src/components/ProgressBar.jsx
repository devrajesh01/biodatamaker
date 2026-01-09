const ProgressBar = ({ step, totalSteps = 10 }) => {
  const steps = [
    { number: 1, label: "Personal" },
    { number: 2, label: "Physical" },
    { number: 3, label: "Religious" },
    { number: 4, label: "Family" },
    { number: 5, label: "Education" },
    { number: 6, label: "Professional" },
    { number: 7, label: "Contact" },
    { number: 8, label: "Custom" },
    { number: 9, label: "Template" },
    { number: 10, label: "Review" }
  ]

  return (
    <div className="mb-8 w-full">
      {/* Step Indicators */}
      <div className="flex items-start justify-between relative">
        {/* Background Line */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-white/20 -z-0 rounded-full"></div>

        {/* Active Progress Line */}
        <div
          className="absolute top-4 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 -z-0 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>

        {steps.map((s) => (
          <div key={s.number} className="flex flex-col items-center relative z-10 w-full">
            {/* Step Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] transition-all duration-500 border-2 ${step >= s.number
                  ? "bg-blue-500 border-blue-400 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)] scale-110"
                  : "bg-[#1a1a2e] border-white/20 text-white/50"
                }`}
            >
              {step > s.number ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s.number
              )}
            </div>

            {/* Label */}
            <span className={`text-[10px] mt-2 font-medium transition-all duration-300 text-center ${step >= s.number ? "text-white" : "text-white/40"
              }`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
