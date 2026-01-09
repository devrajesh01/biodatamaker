import React from 'react'

const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full px-5 py-3.5 border-2 border-white/20 rounded-xl text-white bg-white/5 backdrop-blur-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 ${className}`}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input