import React, { useState } from "react"
import { useForm } from "react-hook-form"

import StepPersonal from "./steps/StepPersonal"
import StepPhysical from "./steps/StepPhysical"
import StepReligious from "./steps/StepReligious"
import StepFamily from "./steps/StepFamily"
import StepEducation from "./steps/StepEducation"
import StepProfessional from "./steps/StepProfessional"
import StepContact from "./steps/StepContact"
import StepCustomFields from "./steps/StepCustomFields"
import StepTemplate from "./steps/StepTemplate"
import ProgressBar from "./ProgressBar"

import TraditionalTemplate from "./templates/TraditionalTemplate"
import RoyalTemplate from "./templates/RoyalTemplate"
import ModernTemplate from "./templates/ModernTemplate"
import ElegantTemplate from "./templates/ElegantTemplate"

const StepForm = () => {
  const [step, setStep] = useState(1)
  const [selectedTemplate, setSelectedTemplate] = useState('traditional')
  const [formData, setFormData] = useState(null)
  const [showBiodata, setShowBiodata] = useState(false)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [customFields, setCustomFields] = useState([])

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" })

  const stepFields = {
    1: ["firstName", "lastName", "dob"],
    2: ["height"],
    3: ["religion"],
    4: ["fatherName", "motherName"],
    5: ["qualification", "university", "year"],
    6: ["occupation"],
    7: ["email", "phone"],
    8: [], // Custom fields - no validation
    9: [], // Template selection - no validation
    10: [], // Review - no validation
  }

  const nextStep = async () => {
    const valid = await trigger(stepFields[step])
    if (valid) setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000))
    const completeData = {
      ...data,
      photo: photoPreview,
      customFields: customFields
    }
    setFormData(completeData)
    setShowBiodata(true)
  }

  const handlePrint = () => {
    window.print()
  }

  const handleReset = () => {
    setShowBiodata(false)
    setStep(1)
    setFormData(null)
    setPhotoPreview(null)
    setCustomFields([])
    setSelectedTemplate('traditional')
  }

  // Render biodata template
  if (showBiodata && formData) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 print:py-0">
        <div className="max-w-6xl mx-auto px-4 print:px-0">
          {/* Action Buttons - Hidden on print */}
          <div className="flex justify-center gap-4 mb-8 print:hidden">
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all"
            >
              🖨️ Print Biodata
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-700 transition-all"
            >
              ← Create New
            </button>
          </div>

          {/* Template Display */}
          {selectedTemplate === 'traditional' && <TraditionalTemplate data={formData} />}
          {selectedTemplate === 'royal' && <RoyalTemplate data={formData} />}
          {selectedTemplate === 'modern' && <ModernTemplate data={formData} />}
          {selectedTemplate === 'elegant' && <ElegantTemplate data={formData} />}
        </div>
      </div>
    )
  }

  // Render form
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 animate-fadeIn"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Marriage Biodata Maker
          </h1>
          <p className="text-white/70 text-sm">
            Create your professional marriage biodata
          </p>
        </div>

        <ProgressBar step={step} totalSteps={10} />

        {/* SLIDE CONTAINER */}
        <div className="relative h-[550px] overflow-hidden mb-8">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
          >
            <StepPersonal register={register} errors={errors} photoPreview={photoPreview} setPhotoPreview={setPhotoPreview} customFields={customFields} setCustomFields={setCustomFields} />
            <StepPhysical register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepReligious register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepFamily register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepEducation register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepProfessional register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepContact register={register} errors={errors} customFields={customFields} setCustomFields={setCustomFields} />
            <StepCustomFields customFields={customFields} setCustomFields={setCustomFields} />
            <StepTemplate selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />

            {/* Step 10: Review */}
            <div className="w-full flex-shrink-0 px-2 animate-slideIn">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-4">Ready to Generate!</h3>
                <p className="text-white/70 mb-6">
                  Click the button below to generate your beautiful biodata
                </p>
                <div className="bg-white/10 p-6 rounded-xl">
                  <p className="text-white text-sm mb-2">Selected Template:</p>
                  <p className="text-white font-bold text-lg capitalize">{selectedTemplate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between items-center gap-4">
          {step > 1 ? (
            <button type="button" onClick={prevStep} className="btn-secondary">
              ← Back
            </button>
          ) : (
            <div></div>
          )}

          {step < 10 && (
            <button type="button" onClick={nextStep} className="btn-primary ml-auto">
              Next →
            </button>
          )}

          {step === 10 && (
            <button type="submit" disabled={isSubmitting} className="btn-success ml-auto">
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate Biodata ✨"
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default StepForm
