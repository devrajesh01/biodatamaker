import React from 'react'

const ProfessionalTemplate = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto bg-white shadow-2xl" id="biodata-template">
            {/* Header */}
            <div className="bg-slate-800 text-white p-10">
                <h1 className="text-4xl font-bold tracking-wide">{data.firstName} {data.lastName}</h1>
                <div className="w-20 h-1 bg-blue-500 mt-3"></div>
                <p className="mt-2 text-slate-300">Professional Biodata</p>
            </div>

            {/* Content */}
            <div className="p-10">
                {/* Personal Information */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-300 uppercase tracking-wide">
                        Personal Information
                    </h2>
                    <table className="w-full">
                        <tbody>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold w-1/3">First Name</td>
                                <td className="py-3 text-slate-900">{data.firstName || 'N/A'}</td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold">Last Name</td>
                                <td className="py-3 text-slate-900">{data.lastName || 'N/A'}</td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold">Date of Birth</td>
                                <td className="py-3 text-slate-900">{data.dob || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Family Information */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-300 uppercase tracking-wide">
                        Family Background
                    </h2>
                    <table className="w-full">
                        <tbody>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold w-1/3">Father's Name</td>
                                <td className="py-3 text-slate-900">{data.fatherName || 'N/A'}</td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold">Mother's Name</td>
                                <td className="py-3 text-slate-900">{data.motherName || 'N/A'}</td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold">Marital Status</td>
                                <td className="py-3 text-slate-900">{data.maritalStatus || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-300 uppercase tracking-wide">
                        Educational Qualifications
                    </h2>
                    <table className="w-full">
                        <tbody>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold w-1/3">Qualification</td>
                                <td className="py-3 text-slate-900">{data.qualification || 'N/A'}</td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold">University</td>
                                <td className="py-3 text-slate-900">{data.university || 'N/A'}</td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold">Passing Year</td>
                                <td className="py-3 text-slate-900">{data.year || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-300 uppercase tracking-wide">
                        Contact Details
                    </h2>
                    <table className="w-full">
                        <tbody>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold w-1/3">Email Address</td>
                                <td className="py-3 text-slate-900">{data.email || 'N/A'}</td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="py-3 text-slate-600 font-semibold">Phone Number</td>
                                <td className="py-3 text-slate-900">{data.phone || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>

            {/* Footer */}
            <div className="bg-slate-100 p-6 text-center border-t border-slate-300">
                <p className="text-slate-600 text-sm">
                    Document generated on {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    )
}

export default ProfessionalTemplate
