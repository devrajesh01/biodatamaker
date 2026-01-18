import React from 'react'

const TraditionalTemplate = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-amber-50 shadow-2xl border-4 border-amber-600" id="biodata-template">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-center py-6 border-b-4 border-amber-700">
                <h1 className="text-4xl font-bold text-white tracking-wide">BIODATA</h1>
                <div className="flex justify-center gap-2 mt-2">
                    <div className="w-16 h-1 bg-white"></div>
                    <div className="w-4 h-1 bg-white"></div>
                    <div className="w-16 h-1 bg-white"></div>
                </div>
            </div>

            <div className="p-8">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                    {/* Photo Section */}
                    <div className="flex flex-col items-center">
                        {data.photo ? (
                            <img
                                src={data.photo}
                                alt="Profile"
                                className="w-48 h-56 object-cover border-4 border-amber-600 shadow-lg"
                            />
                        ) : (
                            <div className="w-48 h-56 bg-amber-200 border-4 border-amber-600 flex items-center justify-center">
                                <span className="text-amber-600 text-4xl">📷</span>
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="space-y-6">
                        {/* Personal Information */}
                        <section className="border-2 border-amber-600 p-4 rounded-lg bg-white">
                            <h2 className="text-xl font-bold text-amber-800 mb-3 border-b-2 border-amber-300 pb-2">
                                PERSONAL DETAILS
                            </h2>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div><span className="font-semibold text-gray-700">Name:</span> <span className="text-gray-900">{data.firstName} {data.lastName}</span></div>
                                <div><span className="font-semibold text-gray-700">Date of Birth:</span> <span className="text-gray-900">{data.dob || 'N/A'}</span></div>
                                {data.timeOfBirth && <div><span className="font-semibold text-gray-700">Time of Birth:</span> <span className="text-gray-900">{data.timeOfBirth}</span></div>}
                                {data.placeOfBirth && <div><span className="font-semibold text-gray-700">Place of Birth:</span> <span className="text-gray-900">{data.placeOfBirth}</span></div>}
                                {data.height && <div><span className="font-semibold text-gray-700">Height:</span> <span className="text-gray-900">{data.height}</span></div>}
                                {data.complexion && <div><span className="font-semibold text-gray-700">Complexion:</span> <span className="text-gray-900">{data.complexion}</span></div>}
                                {data.bloodGroup && <div><span className="font-semibold text-gray-700">Blood Group:</span> <span className="text-gray-900">{data.bloodGroup}</span></div>}
                                {/* Custom Fields - Personal & Physical */}
                                {data.customFields && data.customFields.filter(f => f.section === 'Personal' || f.section === 'Physical').map((field, idx) => (
                                    <div key={idx}><span className="font-semibold text-gray-700">{field.name}:</span> <span className="text-gray-900">{field.value}</span></div>
                                ))}
                            </div>
                        </section>

                        {/* Religious Details */}
                        {data.religion && (
                            <section className="border-2 border-amber-600 p-4 rounded-lg bg-white">
                                <h2 className="text-xl font-bold text-amber-800 mb-3 border-b-2 border-amber-300 pb-2">
                                    RELIGIOUS DETAILS
                                </h2>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div><span className="font-semibold text-gray-700">Religion:</span> <span className="text-gray-900">{data.religion}</span></div>
                                    {data.caste && <div><span className="font-semibold text-gray-700">Caste:</span> <span className="text-gray-900">{data.caste}</span></div>}
                                    {data.gotra && <div><span className="font-semibold text-gray-700">Gotra:</span> <span className="text-gray-900">{data.gotra}</span></div>}
                                    {data.nakshatra && <div><span className="font-semibold text-gray-700">Nakshatra:</span> <span className="text-gray-900">{data.nakshatra}</span></div>}
                                    {data.rashi && <div><span className="font-semibold text-gray-700">Rashi:</span> <span className="text-gray-900">{data.rashi}</span></div>}
                                    {/* Custom Fields - Religious */}
                                    {data.customFields && data.customFields.filter(f => f.section === 'Religious').map((field, idx) => (
                                        <div key={idx}><span className="font-semibold text-gray-700">{field.name}:</span> <span className="text-gray-900">{field.value}</span></div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Family Details */}
                        <section className="border-2 border-amber-600 p-4 rounded-lg bg-white">
                            <h2 className="text-xl font-bold text-amber-800 mb-3 border-b-2 border-amber-300 pb-2">
                                FAMILY DETAILS
                            </h2>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div><span className="font-semibold text-gray-700">Father's Name:</span> <span className="text-gray-900">{data.fatherName || 'N/A'}</span></div>
                                {data.fatherOccupation && <div><span className="font-semibold text-gray-700">Father's Occupation:</span> <span className="text-gray-900">{data.fatherOccupation}</span></div>}
                                <div><span className="font-semibold text-gray-700">Mother's Name:</span> <span className="text-gray-900">{data.motherName || 'N/A'}</span></div>
                                {data.motherOccupation && <div><span className="font-semibold text-gray-700">Mother's Occupation:</span> <span className="text-gray-900">{data.motherOccupation}</span></div>}
                                {data.brothers && <div><span className="font-semibold text-gray-700">Brothers:</span> <span className="text-gray-900">{data.brothers}</span></div>}
                                {data.sisters && <div><span className="font-semibold text-gray-700">Sisters:</span> <span className="text-gray-900">{data.sisters}</span></div>}
                                {data.familyType && <div><span className="font-semibold text-gray-700">Family Type:</span> <span className="text-gray-900">{data.familyType}</span></div>}
                                {data.maritalStatus && <div><span className="font-semibold text-gray-700">Marital Status:</span> <span className="text-gray-900">{data.maritalStatus}</span></div>}
                                {/* Custom Fields - Family */}
                                {data.customFields && data.customFields.filter(f => f.section === 'Family').map((field, idx) => (
                                    <div key={idx}><span className="font-semibold text-gray-700">{field.name}:</span> <span className="text-gray-900">{field.value}</span></div>
                                ))}
                            </div>
                        </section>

                        {/* Education & Professional */}
                        <section className="border-2 border-amber-600 p-4 rounded-lg bg-white">
                            <h2 className="text-xl font-bold text-amber-800 mb-3 border-b-2 border-amber-300 pb-2">
                                EDUCATION & PROFESSION
                            </h2>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div><span className="font-semibold text-gray-700">Qualification:</span> <span className="text-gray-900">{data.qualification || 'N/A'}</span></div>
                                {data.university && <div><span className="font-semibold text-gray-700">University:</span> <span className="text-gray-900">{data.university}</span></div>}
                                {data.occupation && <div><span className="font-semibold text-gray-700">Occupation:</span> <span className="text-gray-900">{data.occupation}</span></div>}
                                {data.company && <div><span className="font-semibold text-gray-700">Company:</span> <span className="text-gray-900">{data.company}</span></div>}
                                {data.income && <div><span className="font-semibold text-gray-700">Income:</span> <span className="text-gray-900">{data.income}</span></div>}
                                {data.workLocation && <div><span className="font-semibold text-gray-700">Work Location:</span> <span className="text-gray-900">{data.workLocation}</span></div>}
                                {/* Custom Fields - Education & Professional */}
                                {data.customFields && data.customFields.filter(f => f.section === 'Education' || f.section === 'Professional').map((field, idx) => (
                                    <div key={idx}><span className="font-semibold text-gray-700">{field.name}:</span> <span className="text-gray-900">{field.value}</span></div>
                                ))}
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="border-2 border-amber-600 p-4 rounded-lg bg-white">
                            <h2 className="text-xl font-bold text-amber-800 mb-3 border-b-2 border-amber-300 pb-2">
                                CONTACT DETAILS
                            </h2>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                {data.email && <div><span className="font-semibold text-gray-700">Email:</span> <span className="text-gray-900">{data.email}</span></div>}
                                {data.phone && <div><span className="font-semibold text-gray-700">Phone:</span> <span className="text-gray-900">{data.phone}</span></div>}
                                {/* Custom Fields - Contact */}
                                {data.customFields && data.customFields.filter(f => f.section === 'Contact').map((field, idx) => (
                                    <div key={idx}><span className="font-semibold text-gray-700">{field.name}:</span> <span className="text-gray-900">{field.value}</span></div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-amber-100 p-4 text-center border-t-2 border-amber-600">
                <p className="text-gray-600 text-sm">Generated on {new Date().toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default TraditionalTemplate
