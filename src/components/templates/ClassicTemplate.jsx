import React from 'react'

const ClassicTemplate = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-12 shadow-2xl" id="biodata-template">
            {/* Header */}
            <div className="text-center border-b-4 border-amber-600 pb-6 mb-8">
                <h1 className="text-4xl font-bold text-amber-800 mb-2">BIODATA</h1>
                <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
                {/* Personal Information */}
                <section>
                    <h2 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-300 pb-2">
                        Personal Information
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="font-semibold text-gray-700">First Name:</span>
                            <span className="ml-2 text-gray-900">{data.firstName || 'N/A'}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Last Name:</span>
                            <span className="ml-2 text-gray-900">{data.lastName || 'N/A'}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Date of Birth:</span>
                            <span className="ml-2 text-gray-900">{data.dob || 'N/A'}</span>
                        </div>
                    </div>
                </section>

                {/* Family Information */}
                <section>
                    <h2 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-300 pb-2">
                        Family Information
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="font-semibold text-gray-700">Father's Name:</span>
                            <span className="ml-2 text-gray-900">{data.fatherName || 'N/A'}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Mother's Name:</span>
                            <span className="ml-2 text-gray-900">{data.motherName || 'N/A'}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Marital Status:</span>
                            <span className="ml-2 text-gray-900">{data.maritalStatus || 'N/A'}</span>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-300 pb-2">
                        Educational Qualification
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="font-semibold text-gray-700">Qualification:</span>
                            <span className="ml-2 text-gray-900">{data.qualification || 'N/A'}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">University:</span>
                            <span className="ml-2 text-gray-900">{data.university || 'N/A'}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Passing Year:</span>
                            <span className="ml-2 text-gray-900">{data.year || 'N/A'}</span>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-300 pb-2">
                        Contact Information
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="font-semibold text-gray-700">Email:</span>
                            <span className="ml-2 text-gray-900">{data.email || 'N/A'}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Phone:</span>
                            <span className="ml-2 text-gray-900">{data.phone || 'N/A'}</span>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-6 border-t-2 border-amber-300 text-center">
                <p className="text-gray-600 text-sm">
                    Generated on {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    )
}

export default ClassicTemplate
