import React from 'react'

const ErrorMessage = ({ message }) => {
    return (
        <div className="absolute -top-14 left-4 z-30 animate-tooltip">
            <div className="relative flex items-center gap-4 bg-[#1f1f1f] text-white px-5 py-3 rounded-xl shadow-xl">

                {/* Speech Bubble Icon */}
                <div className="relative bg-orange-500 w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    !
                    
                </div>

                {/* Message */}
                <span className="text-[15px] whitespace-nowrap">
                    {message}
                </span>

                {/* Main tooltip arrow */}
                <span className="absolute -bottom-2 left-8 w-4 h-4 bg-[#1f1f1f] rotate-45"></span>
            </div>
        </div>
    )
}

export default ErrorMessage