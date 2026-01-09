import React from 'react'
import Input from "../../utils/Input"
import ErrorMessage from "../../utils/ErrorMessage"
import AddCustomField from "../AddCustomField"

const StepPhysical = ({ register, errors, customFields, setCustomFields }) => {
    return (
        <div className="w-full flex-shrink-0 px-2 space-y-4 animate-slideIn overflow-y-auto h-full max-h-[550px] custom-scrollbar">
            <h3 className="text-white text-lg font-semibold mb-2">Physical Attributes</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <Input
                        placeholder="Height (e.g., 5'8)"
                        {...register("height", { required: "Height required" })}
                    />
                    {errors.height && <ErrorMessage message={errors.height.message} />}
                </div>

                <div className="relative">
                    <Input
                        placeholder="Weight (e.g., 65 kg)"
                        {...register("weight")}
                    />
                </div>
            </div>

            <div className="relative">
                <Input
                    placeholder="Complexion (e.g., Fair, Wheatish)"
                    {...register("complexion")}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <Input
                        placeholder="Blood Group (e.g., O+)"
                        {...register("bloodGroup")}
                    />
                </div>

                <div className="relative">
                    <Input
                        placeholder="Body Type (e.g., Slim, Athletic)"
                        {...register("bodyType")}
                    />
                </div>
            </div>

            <AddCustomField
                customFields={customFields}
                setCustomFields={setCustomFields}
                section="Physical"
            />
        </div>
    )
}

export default StepPhysical
