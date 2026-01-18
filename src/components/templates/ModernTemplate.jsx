import React from 'react'

const ModernTemplate = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-2xl rounded-3xl" id="biodata-template">
            {/* Header with Photo */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-8 shadow-lg flex items-center gap-6">
                {data.photo && (
                    <img
                        src={data.photo}
                        alt="Profile"
                        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl"
                    />
                )}
                <div>
                    <h1 className="text-4xl font-bold mb-2">{data.firstName} {data.lastName}</h1>
                    <p className="text-blue-100 text-lg">Marriage Biodata</p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-5">
                {/* Personal & Physical */}
                <div className="bg-white p-5 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl">
                            👤
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Personal Details</h2>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b border-gray-200 pb-2">
                            <span className="text-gray-600 font-medium">DOB</span>
                            <span className="text-gray-900 font-semibold">{data.dob || 'N/A'}</span>
                        </div>
                        {data.height && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Height</span><span className="text-gray-900 font-semibold">{data.height}</span></div>}
                        {data.complexion && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Complexion</span><span className="text-gray-900 font-semibold">{data.complexion}</span></div>}
                        {data.bloodGroup && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Blood Group</span><span className="text-gray-900 font-semibold">{data.bloodGroup}</span></div>}
                        {/* Custom Fields - Personal & Physical */}
                        {data.customFields && data.customFields.filter(f => f.section === 'Personal' || f.section === 'Physical').map((field, idx) => (
                            <div key={idx} className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">{field.name}</span><span className="text-gray-900 font-semibold">{field.value}</span></div>
                        ))}
                    </div>
                </div>

                {/* Religious */}
                {data.religion && (
                    <div className="bg-white p-5 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl">
                                ॐ
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Religious Details</h2>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Religion</span><span className="text-gray-900 font-semibold">{data.religion}</span></div>
                            {data.caste && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Caste</span><span className="text-gray-900 font-semibold">{data.caste}</span></div>}
                            {data.gotra && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Gotra</span><span className="text-gray-900 font-semibold">{data.gotra}</span></div>}
                            {/* Custom Fields - Religious */}
                            {data.customFields && data.customFields.filter(f => f.section === 'Religious').map((field, idx) => (
                                <div key={idx} className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">{field.name}</span><span className="text-gray-900 font-semibold">{field.value}</span></div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Family */}
                <div className="bg-white p-5 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-xl">
                            👨‍👩‍👧
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Family</h2>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Father</span><span className="text-gray-900 font-semibold">{data.fatherName || 'N/A'}</span></div>
                        {data.fatherOccupation && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Father's Occupation</span><span className="text-gray-900 font-semibold">{data.fatherOccupation}</span></div>}
                        <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Mother</span><span className="text-gray-900 font-semibold">{data.motherName || 'N/A'}</span></div>
                        {data.motherOccupation && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Mother's Occupation</span><span className="text-gray-900 font-semibold">{data.motherOccupation}</span></div>}
                        {data.brothers && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Brothers</span><span className="text-gray-900 font-semibold">{data.brothers}</span></div>}
                        {data.sisters && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Sisters</span><span className="text-gray-900 font-semibold">{data.sisters}</span></div>}
                        {/* Custom Fields - Family */}
                        {data.customFields && data.customFields.filter(f => f.section === 'Family').map((field, idx) => (
                            <div key={idx} className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">{field.name}</span><span className="text-gray-900 font-semibold">{field.value}</span></div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="bg-white p-5 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-xl">
                            🎓
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Education</h2>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Qualification</span><span className="text-gray-900 font-semibold">{data.qualification || 'N/A'}</span></div>
                        {data.university && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">University</span><span className="text-gray-900 font-semibold">{data.university}</span></div>}
                        {/* Custom Fields - Education */}
                        {data.customFields && data.customFields.filter(f => f.section === 'Education').map((field, idx) => (
                            <div key={idx} className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">{field.name}</span><span className="text-gray-900 font-semibold">{field.value}</span></div>
                        ))}
                    </div>
                </div>

                {/* Professional */}
                {data.occupation && (
                    <div className="bg-white p-5 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
                                💼
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Professional</h2>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Occupation</span><span className="text-gray-900 font-semibold">{data.occupation}</span></div>
                            {data.company && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Company</span><span className="text-gray-900 font-semibold">{data.company}</span></div>}
                            {data.income && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Income</span><span className="text-gray-900 font-semibold">{data.income}</span></div>}
                            {/* Custom Fields - Professional */}
                            {data.customFields && data.customFields.filter(f => f.section === 'Professional').map((field, idx) => (
                                <div key={idx} className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">{field.name}</span><span className="text-gray-900 font-semibold">{field.value}</span></div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Contact */}
                <div className="bg-white p-5 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white text-xl">
                            📞
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Contact</h2>
                    </div>
                    <div className="space-y-2 text-sm">
                        {data.email && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Email</span><span className="text-gray-900 font-semibold text-xs">{data.email}</span></div>}
                        {data.phone && <div className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">Phone</span><span className="text-gray-900 font-semibold">{data.phone}</span></div>}
                        {/* Custom Fields - Contact */}
                        {data.customFields && data.customFields.filter(f => f.section === 'Contact').map((field, idx) => (
                            <div key={idx} className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-600 font-medium">{field.name}</span><span className="text-gray-900 font-semibold">{field.value}</span></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">Generated on {new Date().toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default ModernTemplate
