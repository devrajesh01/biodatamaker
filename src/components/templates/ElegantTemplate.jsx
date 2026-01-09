import React from 'react'

const ElegantTemplate = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-rose-50 via-white to-pink-50 p-10 shadow-2xl border-4 border-rose-200 rounded-lg" id="biodata-template">
            {/* Decorative Header with Photo */}
            <div className="text-center mb-8">
                {data.photo && (
                    <div className="inline-block relative mb-4">
                        <div className="absolute -top-3 -left-3 w-full h-full border-2 border-rose-300 rounded-full"></div>
                        <img
                            src={data.photo}
                            alt="Profile"
                            className="relative w-40 h-40 object-cover rounded-full border-4 border-rose-400 shadow-xl"
                        />
                    </div>
                )}
                <h1 className="text-5xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {data.firstName} {data.lastName}
                </h1>
                <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
                    <span className="text-rose-400">✦</span>
                    <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
                {/* Personal & Physical */}
                <section className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-rose-100">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">🌸</span>
                        <h2 className="text-2xl font-serif font-bold text-rose-700">Personal Details</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ml-8 text-sm">
                        <div><p className="text-rose-600 font-semibold">Date of Birth</p><p className="text-gray-800 font-medium">{data.dob || 'N/A'}</p></div>
                        {data.height && <div><p className="text-rose-600 font-semibold">Height</p><p className="text-gray-800 font-medium">{data.height}</p></div>}
                        {data.complexion && <div><p className="text-rose-600 font-semibold">Complexion</p><p className="text-gray-800 font-medium">{data.complexion}</p></div>}
                        {data.bloodGroup && <div><p className="text-rose-600 font-semibold">Blood Group</p><p className="text-gray-800 font-medium">{data.bloodGroup}</p></div>}
                    </div>
                </section>

                {/* Religious */}
                {data.religion && (
                    <section className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-rose-100">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">🕉️</span>
                            <h2 className="text-2xl font-serif font-bold text-rose-700">Religious Details</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4 ml-8 text-sm">
                            <div><p className="text-rose-600 font-semibold">Religion</p><p className="text-gray-800 font-medium">{data.religion}</p></div>
                            {data.caste && <div><p className="text-rose-600 font-semibold">Caste</p><p className="text-gray-800 font-medium">{data.caste}</p></div>}
                            {data.gotra && <div><p className="text-rose-600 font-semibold">Gotra</p><p className="text-gray-800 font-medium">{data.gotra}</p></div>}
                            {data.nakshatra && <div><p className="text-rose-600 font-semibold">Nakshatra</p><p className="text-gray-800 font-medium">{data.nakshatra}</p></div>}
                        </div>
                    </section>
                )}

                {/* Family */}
                <section className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-rose-100">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">🏡</span>
                        <h2 className="text-2xl font-serif font-bold text-rose-700">Family Background</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ml-8 text-sm">
                        <div><p className="text-rose-600 font-semibold">Father's Name</p><p className="text-gray-800 font-medium">{data.fatherName || 'N/A'}</p></div>
                        {data.fatherOccupation && <div><p className="text-rose-600 font-semibold">Father's Occupation</p><p className="text-gray-800 font-medium">{data.fatherOccupation}</p></div>}
                        <div><p className="text-rose-600 font-semibold">Mother's Name</p><p className="text-gray-800 font-medium">{data.motherName || 'N/A'}</p></div>
                        {data.motherOccupation && <div><p className="text-rose-600 font-semibold">Mother's Occupation</p><p className="text-gray-800 font-medium">{data.motherOccupation}</p></div>}
                    </div>
                </section>

                {/* Education & Professional */}
                <section className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-rose-100">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">📚</span>
                        <h2 className="text-2xl font-serif font-bold text-rose-700">Education & Profession</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ml-8 text-sm">
                        <div><p className="text-rose-600 font-semibold">Qualification</p><p className="text-gray-800 font-medium">{data.qualification || 'N/A'}</p></div>
                        {data.university && <div><p className="text-rose-600 font-semibold">University</p><p className="text-gray-800 font-medium">{data.university}</p></div>}
                        {data.occupation && <div><p className="text-rose-600 font-semibold">Occupation</p><p className="text-gray-800 font-medium">{data.occupation}</p></div>}
                        {data.income && <div><p className="text-rose-600 font-semibold">Income</p><p className="text-gray-800 font-medium">{data.income}</p></div>}
                    </div>
                </section>

                {/* Contact */}
                <section className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-rose-100">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">💌</span>
                        <h2 className="text-2xl font-serif font-bold text-rose-700">Contact Information</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ml-8 text-sm">
                        <div><p className="text-rose-600 font-semibold">Email</p><p className="text-gray-800 font-medium text-xs">{data.email || 'N/A'}</p></div>
                        <div><p className="text-rose-600 font-semibold">Phone</p><p className="text-gray-800 font-medium">{data.phone || 'N/A'}</p></div>
                    </div>
                </section>

                {/* Custom Fields */}
                {data.customFields && data.customFields.length > 0 && (
                    <section className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-rose-100">
                        <h2 className="text-2xl font-serif font-bold text-rose-700 mb-4">Additional Information</h2>
                        <div className="grid grid-cols-2 gap-4 ml-8 text-sm">
                            {data.customFields.map((field, index) => (
                                <div key={index}><p className="text-rose-600 font-semibold">{field.name}</p><p className="text-gray-800 font-medium">{field.value}</p></div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Decorative Footer */}
            <div className="mt-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-rose-300"></div>
                    <span className="text-rose-300">✦</span>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose-300"></div>
                </div>
                <p className="text-rose-400 text-sm font-serif italic">
                    Created with elegance on {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    )
}

export default ElegantTemplate
