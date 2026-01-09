import React, { useState } from 'react'

const AddCustomField = ({ customFields, setCustomFields, section }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [fieldName, setFieldName] = useState('')
    const [fieldValue, setFieldValue] = useState('')

    const handleAdd = () => {
        if (fieldName && fieldValue) {
            setCustomFields([
                ...customFields,
                { name: fieldName, value: fieldValue, section: section }
            ])
            setFieldName('')
            setFieldValue('')
            setIsOpen(false)
        }
    }

    return (
        <div className="mt-4 border-t border-white/10 pt-4">
            {!isOpen ? (
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="text-blue-300 text-sm flex items-center gap-2 hover:text-blue-200"
                >
                    <span className="text-lg">+</span> Add Custom Field
                </button>
            ) : (
                <div className="bg-white/5 p-3 rounded-lg border border-white/10 animate-fadeIn">
                    <div className="flex gap-2 mb-2">
                        <input
                            placeholder="Field Name"
                            value={fieldName}
                            onChange={(e) => setFieldName(e.target.value)}
                            className="flex-1 bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-sm placeholder-white/50 focus:outline-none focus:border-blue-400"
                        />
                        <input
                            placeholder="Value"
                            value={fieldValue}
                            onChange={(e) => setFieldValue(e.target.value)}
                            className="flex-1 bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-sm placeholder-white/50 focus:outline-none focus:border-blue-400"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="text-xs text-white/60 hover:text-white"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleAdd}
                            className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600"
                        >
                            Add
                        </button>
                    </div>
                </div>
            )}

            {/* Display Added Fields for this Section */}
            <div className="mt-2 space-y-2">
                {customFields
                    .filter(f => f.section === section)
                    .map((field, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/5 px-3 py-2 rounded text-sm">
                            <div>
                                <span className="text-white/60 text-xs">{field.name}:</span>
                                <span className="text-white ml-2">{field.value}</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setCustomFields(customFields.filter(f => f !== field))}
                                className="text-red-400 hover:text-red-300"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default AddCustomField
