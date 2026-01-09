import React from 'react'
import Input from "../../utils/Input"
import ErrorMessage from "../../utils/ErrorMessage"
import AddCustomField from "../AddCustomField"

const StepReligious = ({ register, errors, customFields, setCustomFields }) => {
    return (
        <div className="w-full flex-shrink-0 px-2 space-y-4 animate-slideIn overflow-y-auto h-full max-h-[550px] custom-scrollbar">
            <h3 className="text-white text-lg font-semibold mb-2">Religious Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <Input
                        placeholder="Religion"
                        {...register("religion", { required: "Religion required" })}
                    />
                    {errors.religion && <ErrorMessage message={errors.religion.message} />}
                </div>

                <div className="relative">
                    <Input
                        placeholder="Caste"
                        {...register("caste")}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <Input
                        placeholder="Sub-Caste"
                        {...register("subCaste")}
                    />
                </div>

                <div className="relative">
                    <Input
                        placeholder="Gotra"
                        {...register("gotra")}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <Input
                        placeholder="Nakshatra (Star)"
                        {...register("nakshatra")}
                    />
                </div>

                <div className="relative">
                    <Input
                        placeholder="Rashi (Moon Sign)"
                        {...register("rashi")}
                    />
                </div>
            </div>

            <AddCustomField
                customFields={customFields}
                setCustomFields={setCustomFields}
                section="Religious"
            />
        </div>
    )
}

export default StepReligious
