import { useState } from 'react'

export const useForm = steps => {
    const [currentStep, setCurrentStep] = useState(0);

    const changeStep = (index, event) => {
        if(event) event.preventDefault();

        if(index < 0 || index >= steps.length) return
        
        setCurrentStep(index)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep
    }
}