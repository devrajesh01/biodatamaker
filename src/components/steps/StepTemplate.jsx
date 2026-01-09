import React from 'react'

const StepTemplate = ({ selectedTemplate, setSelectedTemplate }) => {
    const templates = [
        {
            id: 'traditional',
            name: 'Traditional',
            description: 'Classic cream & orange theme',
            color: 'bg-orange-50',
            border: 'border-amber-600',
            preview: (
                <div className="w-full h-full bg-orange-50 p-2 flex flex-col gap-1">
                    <div className="h-2 w-full bg-amber-600 rounded-sm"></div>
                    <div className="flex gap-2">
                        <div className="w-8 h-10 bg-gray-300 border border-amber-600"></div>
                        <div className="flex-1 space-y-1">
                            <div className="h-1 w-3/4 bg-gray-300 rounded"></div>
                            <div className="h-1 w-1/2 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                    <div className="mt-1 space-y-1">
                        <div className="h-1 w-full bg-gray-200 rounded"></div>
                        <div className="h-1 w-full bg-gray-200 rounded"></div>
                    </div>
                </div>
            )
        },
        {
            id: 'royal',
            name: 'Royal',
            description: 'Modern rose & gold elegant theme',
            color: 'bg-red-900',
            border: 'border-red-800',
            preview: (
                <div className="w-full h-full bg-[#fffcf5] p-2 flex flex-col gap-1 relative overflow-hidden border border-red-100">
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-800 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-800 rounded-bl-lg"></div>

                    <div className="text-center mt-1">
                        <div className="h-0.5 w-8 bg-red-800 mx-auto mb-0.5"></div>
                        <div className="h-1.5 w-16 bg-red-900 mx-auto rounded-sm"></div>
                    </div>

                    <div className="flex justify-center my-1 relative">
                        <div className="absolute inset-0 bg-red-900/10 blur-sm rounded-full transform scale-75"></div>
                        <div className="w-10 h-12 bg-gray-200 border-2 border-red-200 rounded-t-2xl rounded-b-md relative z-10"></div>
                    </div>

                    <div className="space-y-1 px-2 text-center">
                        <div className="h-1 w-20 bg-red-900/40 mx-auto rounded"></div>
                        <div className="h-0.5 w-12 bg-red-900/20 mx-auto rounded"></div>
                    </div>
                </div>
            )
        },
        {
            id: 'modern',
            name: 'Modern',
            description: 'Contemporary blue gradient',
            color: 'bg-blue-50',
            border: 'border-blue-500',
            preview: (
                <div className="w-full h-full bg-blue-50 p-2 flex flex-col gap-1">
                    <div className="w-full h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-md flex items-center px-2 gap-2">
                        <div className="w-4 h-4 rounded-full bg-white/50"></div>
                        <div className="h-1 w-12 bg-white/50 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 mt-1">
                        <div className="h-6 bg-white rounded shadow-sm"></div>
                        <div className="h-6 bg-white rounded shadow-sm"></div>
                        <div className="h-6 bg-white rounded shadow-sm"></div>
                        <div className="h-6 bg-white rounded shadow-sm"></div>
                    </div>
                </div>
            )
        },
        {
            id: 'elegant',
            name: 'Elegant',
            description: 'Premium rose & pink design',
            color: 'bg-pink-50',
            border: 'border-pink-400',
            preview: (
                <div className="w-full h-full bg-pink-50 p-2 flex flex-col items-center gap-1 border border-pink-200">
                    <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-pink-400 mb-1"></div>
                    <div className="h-1 w-16 bg-pink-300 rounded mb-1"></div>
                    <div className="w-full space-y-1">
                        <div className="h-4 bg-white/60 rounded border border-pink-100"></div>
                        <div className="h-4 bg-white/60 rounded border border-pink-100"></div>
                    </div>
                </div>
            )
        }
    ]

    return (
        <div className="w-full flex-shrink-0 px-2 animate-slideIn h-full max-h-[550px] overflow-y-auto custom-scrollbar">
            <h3 className="text-white text-xl font-semibold mb-6 text-center">
                Choose Your Biodata Template
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`cursor-pointer group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:scale-105 ${selectedTemplate === template.id
                            ? 'border-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.5)] scale-105'
                            : 'border-white/20 hover:border-white/40'
                            }`}
                    >
                        {/* Preview Area */}
                        <div className="h-32 w-full bg-white/5 relative">
                            {template.preview}

                            {/* Overlay for unselected */}
                            {selectedTemplate !== template.id && (
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            )}

                            {/* Selected Checkmark */}
                            {selectedTemplate === template.id && (
                                <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center backdrop-blur-[1px]">
                                    <div className="bg-blue-500 text-white rounded-full p-2 shadow-lg scale-100 transition-transform">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Info Area */}
                        <div className={`p-3 ${selectedTemplate === template.id ? 'bg-white text-gray-900' : 'bg-black/40 text-white'}`}>
                            <h4 className="font-bold text-center text-sm mb-1">
                                {template.name}
                            </h4>
                            <p className={`text-[10px] text-center ${selectedTemplate === template.id ? 'text-gray-500' : 'text-gray-400'}`}>
                                {template.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StepTemplate
