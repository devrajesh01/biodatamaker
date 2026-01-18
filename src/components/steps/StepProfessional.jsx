import React from 'react'
import Input from "../../utils/Input"
import ErrorMessage from "../../utils/ErrorMessage"
import AddCustomField from "../AddCustomField"

const StepProfessional = ({ register, errors, customFields, setCustomFields }) => {
    return (
        <div className="w-full flex-shrink-0 px-2 space-y-4 animate-slideIn overflow-y-auto h-full max-h-[550px] custom-scrollbar">
            <h3 className="text-white text-lg font-semibold mb-2">Professional Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <Input
                        placeholder="Occupation/Profession"
                        {...register("occupation")}
                    />
                    {errors.occupation && <ErrorMessage message={errors.occupation.message} />}
                </div>

                <div className="relative">
                    <Input
                        placeholder="Company/Organization"
                        {...register("company")}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <Input
                        placeholder="Designation/Position"
                        {...register("designation")}
                    />
                </div>

                <div className="relative">
                    <Input
                        placeholder="Annual Income (e.g., 10 LPA)"
                        {...register("income")}
                    />
                </div>
            </div>

            <div className="relative">
                <Input
                    placeholder="Work Location/City"
                    {...register("workLocation")}
                />
            </div>

            <AddCustomField
                customFields={customFields}
                setCustomFields={setCustomFields}
                section="Professional"
            />
        </div>
    )
}

export default StepProfessional
