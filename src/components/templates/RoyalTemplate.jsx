import React from 'react'
import roseCorner from '../../assets/rose-corner.png'

const RoyalTemplate = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto shadow-2xl overflow-hidden relative" id="biodata-template" style={{ backgroundColor: '#fffcf5' }}>
            {/* Background Texture/Watermark */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `url(${roseCorner})`,
                    backgroundSize: '400px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                    filter: 'grayscale(100%) sepia(20%)'
                }}
            ></div>

            {/* Corner Decorations */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none z-10">
                <img src={roseCorner} alt="" className="w-full h-full object-contain transform rotate-90" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))' }} />
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none z-10">
                <img src={roseCorner} alt="" className="w-full h-full object-contain transform -rotate-90" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))' }} />
            </div>

            {/* Main Content Border */}
            <div className="relative z-0 h-full p-8 md:p-12">
                <div className="border-2 border-red-900/10 h-full p-6 relative">
                    {/* Inner hairline border */}
                    <div className="absolute top-2 left-2 right-2 bottom-2 border border-red-900/5 pointer-events-none"></div>

                    {/* Header */}
                    <header className="text-center mb-12 relative">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-red-900 mb-2 tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                            BIODATA
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent mx-auto mb-4"></div>
                        <p className="text-red-800/60 uppercase tracking-[0.3em] text-xs md:text-sm">Royal Marriage Proposal</p>
                    </header>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-[280px_1fr] gap-10">
                        {/* Left Column: Photo & Brief */}
                        <div className="flex flex-col items-center">
                            <div className="relative mb-6 group">
                                <div className="absolute inset-0 bg-red-900 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="absolute -inset-1 border-2 border-red-900/30 rounded-t-full rounded-b-lg rotate-3"></div>
                                <div className="absolute -inset-1 border-2 border-red-900/30 rounded-t-full rounded-b-lg -rotate-3"></div>

                                {data.photo ? (
                                    <img
                                        src={data.photo}
                                        alt="Profile"
                                        className="w-64 h-80 object-cover rounded-t-full rounded-b-lg shadow-xl relative z-10"
                                    />
                                ) : (
                                    <div className="w-64 h-80 bg-red-50 rounded-t-full rounded-b-lg flex items-center justify-center border border-red-900/20 relative z-10 shadow-inner">
                                        <span className="text-red-900/20 text-6xl">❦</span>
                                    </div>
                                )}

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur px-4 py-1 rounded-full shadow-sm border border-red-100">
                                    <span className="text-red-900 text-xs font-serif italic">Est. {data.dob?.split('-')[0] || '199X'}</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="text-2xl font-serif text-red-950 font-bold mb-1">
                                    {data.firstName || 'First Name'} <br />
                                    <span className="text-red-700">{data.lastName || 'Last Name'}</span>
                                </h2>
                                <p className="text-red-900/60 text-sm italic mb-4">{data.occupation || 'Profession'}</p>
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="space-y-8">
                            {/* Personal */}
                            <div className="relative">
                                <h3 className="text-lg font-serif font-bold text-red-900 border-b border-red-900/20 pb-2 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">❧</span> Personal Details
                                </h3>
                                <div className="grid grid-cols-[120px_1fr] gap-y-2 text-sm text-red-950/80">
                                    <span className="font-semibold text-red-900">DOB:</span> <span>{data.dob} {data.timeOfBirth && `at ${data.timeOfBirth}`}</span>
                                    {data.placeOfBirth && <><span className="font-semibold text-red-900">Birth Place:</span> <span>{data.placeOfBirth}</span></>}
                                    {data.height && <><span className="font-semibold text-red-900">Height:</span> <span>{data.height}</span></>}
                                    {data.complexion && <><span className="font-semibold text-red-900">Complexion:</span> <span>{data.complexion}</span></>}
                                    {data.bloodGroup && <><span className="font-semibold text-red-900">Blood Group:</span> <span>{data.bloodGroup}</span></>}
                                </div>
                            </div>

                            {/* Family */}
                            <div className="relative">
                                <h3 className="text-lg font-serif font-bold text-red-900 border-b border-red-900/20 pb-2 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">❧</span> Family Background
                                </h3>
                                <div className="grid grid-cols-[120px_1fr] gap-y-2 text-sm text-red-950/80">
                                    <span className="font-semibold text-red-900">Father:</span> <span>{data.fatherName} {data.fatherOccupation && `(${data.fatherOccupation})`}</span>
                                    <span className="font-semibold text-red-900">Mother:</span> <span>{data.motherName} {data.motherOccupation && `(${data.motherOccupation})`}</span>
                                    {(data.brothers || data.sisters) && (
                                        <>
                                            <span className="font-semibold text-red-900">Siblings:</span>
                                            <span>{data.brothers || 0} Brother(s), {data.sisters || 0} Sister(s)</span>
                                        </>
                                    )}
                                    {data.familyType && <><span className="font-semibold text-red-900">Family Type:</span> <span>{data.familyType}</span></>}
                                </div>
                            </div>

                            {/* Religious (Conditional) */}
                            {data.religion && (
                                <div className="relative">
                                    <h3 className="text-lg font-serif font-bold text-red-900 border-b border-red-900/20 pb-2 mb-4 flex items-center gap-2">
                                        <span className="text-2xl">❧</span> Spiritual
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm text-red-950/80">
                                        <div><span className="font-semibold text-red-900 block">Religion/Caste:</span> {data.religion} {data.caste && `- ${data.caste}`}</div>
                                        {data.gotra && <div><span className="font-semibold text-red-900 block">Gotra:</span> {data.gotra}</div>}
                                        {data.rashi && <div><span className="font-semibold text-red-900 block">Rashi:</span> {data.rashi}</div>}
                                        {data.nakshatra && <div><span className="font-semibold text-red-900 block">Nakshatra:</span> {data.nakshatra}</div>}
                                    </div>
                                </div>
                            )}

                            {/* Education & Career */}
                            <div className="relative">
                                <h3 className="text-lg font-serif font-bold text-red-900 border-b border-red-900/20 pb-2 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">❧</span> Education & Career
                                </h3>
                                <div className="grid grid-cols-[120px_1fr] gap-y-2 text-sm text-red-950/80">
                                    <span className="font-semibold text-red-900">Education:</span> <span>{data.qualification} {data.university && `from ${data.university}`}</span>
                                    <span className="font-semibold text-red-900">Profession:</span> <span>{data.occupation} {data.company && `at ${data.company}`}</span>
                                    {data.income && <><span className="font-semibold text-red-900">Income:</span> <span>{data.income}</span></>}
                                    {data.workLocation && <><span className="font-semibold text-red-900">Location:</span> <span>{data.workLocation}</span></>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact - Bottom Full Width */}
                    <div className="mt-12 text-center border-t border-red-900/10 pt-8">
                        <h4 className="font-serif font-bold text-red-900 mb-4 text-lg">Contact Information</h4>
                        <div className="flex justify-center flex-wrap gap-8 text-sm text-red-950/80">
                            {data.phone && (
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-900 border border-red-100">📞</span>
                                    {data.phone}
                                </div>
                            )}
                            {data.email && (
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-900 border border-red-100">✉️</span>
                                    {data.email}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoyalTemplate
