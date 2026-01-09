import React from 'react'
import roseCorner from '../../assets/rose-corner.png'

const RoyalTemplate = ({ data }) => {
    // Defensive check to prevent crashes if data is missing
    if (!data) return <div className="p-10 text-center text-red-800">Error: No data available</div>;

    return (
        <div className="w-full md:w-[210mm] min-h-[297mm] mx-auto shadow-2xl overflow-hidden relative print:shadow-none print:w-[210mm]" id="biodata-template" style={{ backgroundColor: '#fffcf5' }}>
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

            {/* Main Content Border */}
            <div className="relative z-0 h-full p-4 sm:p-6 md:p-10">
                <div className="border-2 border-red-900/10 h-full p-3 sm:p-4 md:p-6 relative">
                    {/* Inner hairline border */}
                    <div className="absolute top-2 left-2 right-2 bottom-2 border border-red-900/5 pointer-events-none"></div>

                    {/* NEW SPLIT HEADER */}
                    <header className="flex flex-col md:flex-row items-center md:items-center justify-between mb-4 md:mb-6 border-b border-red-900/10 pb-3 md:pb-4">
                        {/* Left: Text Info */}
                        <div className="text-center md:text-left flex-1 md:pr-8 mb-4 md:mb-0">
                            <h1 className="text-2xl sm:text-3xl md:text-3xl font-serif font-bold text-red-900 mb-1 tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>
                                BIODATA
                            </h1>
                            <div className="w-12 h-1 bg-red-900 mb-3 md:mb-4 mx-auto md:mx-0"></div>

                            <h2 className="text-xl sm:text-2xl md:text-2xl font-serif text-red-950 font-bold mb-1">
                                {data.firstName || 'First Name'} <span className="text-red-800">{data.lastName || 'Last Name'}</span>
                            </h2>
                            <p className="text-red-900/60 text-sm italic mb-2">
                                Est. {data.dob ? data.dob.split('-')[0] : 'Year'}
                            </p>
                        </div>

                        {/* Right: Photo */}
                        <div className="flex-shrink-0">
                            <div className="relative group h-48 sm:h-56 md:h-64 w-auto min-w-[120px] sm:min-w-[150px] max-w-[180px] sm:max-w-[220px] md:max-w-[250px] overflow-hidden rounded-lg border border-red-900/20 shadow-md flex justify-center bg-red-50 mx-auto md:mx-0">
                                {data.photo ? (
                                    <>
                                        {/* Background Blur Layer - Fills the box (Optional now, but good for loading/transparency) */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center blur-sm opacity-50 scale-110"
                                            style={{ backgroundImage: `url(${data.photo})` }}
                                        ></div>

                                        {/* Main Image Layer - Auto width, Full Height */}
                                        <img
                                            src={data.photo}
                                            alt="Profile"
                                            className="relative h-full w-auto object-cover z-10"
                                        />
                                    </>
                                ) : (
                                    <div className="w-40 h-full flex items-center justify-center relative z-10">
                                        <span className="text-red-900/20 text-4xl">❦</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>

                    {/* NEW COMPACT FULL-WIDTH BODY */}
                    <div className="space-y-4 md:space-y-6">

                        {/* Personal & Family Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

                            {/* Personal Details */}
                            <div className="relative">
                                <h3 className="text-base sm:text-lg font-serif font-bold text-red-900 border-b border-red-900/20 pb-1 mb-2 md:mb-3 flex items-center gap-2">
                                    <span className="text-xl">❧</span> Personal Details
                                </h3>
                                <div className="grid grid-cols-[100px_1fr] gap-y-1.5 text-sm text-red-950/90">
                                    <span className="font-semibold text-red-900">DOB:</span> <span>{data.dob} {data.timeOfBirth && `at ${data.timeOfBirth}`}</span>
                                    {data.placeOfBirth && <><span className="font-semibold text-red-900">Place:</span> <span>{data.placeOfBirth}</span></>}
                                    {data.height && <><span className="font-semibold text-red-900">Height:</span> <span>{data.height}</span></>}
                                    {data.complexion && <><span className="font-semibold text-red-900">Complexion:</span> <span>{data.complexion}</span></>}
                                    {data.bloodGroup && <><span className="font-semibold text-red-900">Blood Grp:</span> <span>{data.bloodGroup}</span></>}
                                </div>
                            </div>

                            {/* Family Details */}
                            <div className="relative">
                                <h3 className="text-base sm:text-lg font-serif font-bold text-red-900 border-b border-red-900/20 pb-1 mb-2 md:mb-3 flex items-center gap-2">
                                    <span className="text-xl">❧</span> Family Background
                                </h3>
                                <div className="grid grid-cols-[100px_1fr] gap-y-1.5 text-sm text-red-950/90">
                                    <span className="font-semibold text-red-900">Father:</span> <span>{data.fatherName} {data.fatherOccupation && `(${data.fatherOccupation})`}</span>
                                    <span className="font-semibold text-red-900">Mother:</span> <span>{data.motherName} {data.motherOccupation && `(${data.motherOccupation})`}</span>
                                    {(data.brothers || data.sisters) && (
                                        <>
                                            <span className="font-semibold text-red-900">Siblings:</span>
                                            <span>{data.brothers || 0} Bro, {data.sisters || 0} Sis</span>
                                        </>
                                    )}
                                    {data.familyType && <><span className="font-semibold text-red-900">Type:</span> <span>{data.familyType}</span></>}
                                </div>
                            </div>
                        </div>

                        {/* Education & Spiritual Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            {/* Education & Career */}
                            <div className="relative">
                                <h3 className="text-base sm:text-lg font-serif font-bold text-red-900 border-b border-red-900/20 pb-1 mb-2 md:mb-3 flex items-center gap-2">
                                    <span className="text-xl">❧</span> Education & Career
                                </h3>
                                <div className="grid grid-cols-[100px_1fr] gap-y-1.5 text-sm text-red-950/90">
                                    <span className="font-semibold text-red-900">Education:</span> <span>{data.qualification} {data.university && `from ${data.university}`}</span>
                                    <span className="font-semibold text-red-900">Profession:</span> <span>{data.occupation} {data.company && `at ${data.company}`}</span>
                                    {data.income && <><span className="font-semibold text-red-900">Income:</span> <span>{data.income}</span></>}
                                    {data.workLocation && <><span className="font-semibold text-red-900">Location:</span> <span>{data.workLocation}</span></>}
                                </div>
                            </div>

                            {/* Spiritual (Conditional) */}
                            {data.religion && (
                                <div className="relative">
                                    <h3 className="text-base sm:text-lg font-serif font-bold text-red-900 border-b border-red-900/20 pb-1 mb-2 md:mb-3 flex items-center gap-2">
                                        <span className="text-xl">❧</span> Spiritual
                                    </h3>
                                    <div className="grid grid-cols-[100px_1fr] gap-y-1.5 text-sm text-red-950/90">
                                        <div><span className="font-semibold text-red-900">Religion:</span> {data.religion} {data.caste && `- ${data.caste}`}</div>
                                        {data.gotra && <div><span className="font-semibold text-red-900 block">Gotra:</span> {data.gotra}</div>}
                                        {data.rashi && <div><span className="font-semibold text-red-900 block">Rashi:</span> {data.rashi}</div>}
                                        {data.nakshatra && <div><span className="font-semibold text-red-900 block">Nakshatra:</span> {data.nakshatra}</div>}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contact - Compact Row */}
                        <div className="mt-6 md:mt-8 pt-3 md:pt-4 border-t border-red-900/10">
                            <div className="flex flex-wrap justify-between items-center gap-3 md:gap-4 bg-red-50/50 p-2 md:p-3 rounded-lg border border-red-900/5">
                                <div className="font-serif font-bold text-red-900 text-sm sm:text-base flex items-center gap-2">
                                    <span className="text-xl">📞</span> Contact Info
                                </div>

                                <div className="flex flex-wrap gap-3 md:gap-6 text-xs sm:text-sm text-red-950 font-medium">
                                    {data.phone && <span>Phone: {data.phone}</span>}
                                    {data.email && <span>Email: {data.email}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RoyalTemplate
