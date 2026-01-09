import React, { useState } from 'react'
import Input from "../../utils/Input"

const StepCustomFields = ({ customFields, setCustomFields }) => {
    const [fieldName, setFieldName] = useState('')
    const [fieldValue, setFieldValue] = useState('')

    const addCustomField = () => {
        if (fieldName && fieldValue) {
            setCustomFields([...customFields, { name: fieldName, value: fieldValue }])
            setFieldName('')
            setFieldValue('')
        }
    }

    const removeField = (index) => {
        setCustomFields(customFields.filter((_, i) => i !== index))
    }

    return (
        <div className="w-full flex-shrink-0 px-2 space-y-4 animate-slideIn overflow-y-auto h-full max-h-[550px] custom-scrollbar">
            <h3 className="text-white text-lg font-semibold mb-2">Additional Information</h3>

            {/* Display existing custom fields */}
            {customFields.length > 0 && (
                <div className="space-y-2 mb-4">
                    {customFields.map((field, index) => (
                        <div key={index} className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                            <div>
                                <p className="text-white/70 text-xs">{field.name}</p>
                                <p className="text-white font-medium">{field.value}</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => removeField(index)}
                                className="text-red-400 hover:text-red-300 text-sm"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Add new custom field */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
                <p className="text-white/80 text-sm font-medium">Add Custom Field</p>
                <Input
                    placeholder="Field Name (e.g., Hobbies)"
                    value={fieldName}
                    onChange={(e) => setFieldName(e.target.value)}
                />
                <Input
                    placeholder="Field Value (e.g., Reading, Traveling)"
                    value={fieldValue}
                    onChange={(e) => setFieldValue(e.target.value)}
                />
                <button
                    type="button"
                    onClick={addCustomField}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                    + Add Field
                </button>
            </div>

            <p className="text-white/50 text-xs text-center">
                Add any additional information you'd like to include in your biodata
            </p>
        </div>
    )
}

export default StepCustomFields
