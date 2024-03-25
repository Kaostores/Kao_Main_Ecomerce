import { useState } from "react";

const TrackSteps = () => {
    const [steps] = useState({
        stepsCount: [1, 2, 3, 4],
        currentStep: 5,
    });
    
    return (
        <div className="max-w-lg  px-4 md:px-0 sm:px-0 h-[300px]">
            <ul
                aria-label="Steps"
                className="flex flex-col items-center"
            >
                {steps.stepsCount.map((_, idx) => (
                    <li
                        key={idx}
                        aria-current={steps.currentStep === idx + 1 ? "step" : false}
                        className="flex flex-col items-center"
                    >
                        <div 
                            className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center ${steps.currentStep > idx + 1 ? "bg-primary border-primary" : "" || steps.currentStep === idx + 1 ? "border-primary" : ""}`}
                        >
                            <span className={`w-2.5 h-2.5 rounded-full bg-primary ${steps.currentStep !== idx + 1 ? "hidden" : ""}`}>
                            </span>
                            {steps.currentStep > idx + 1 && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            )}
                        </div>
                        <hr className={`h-14 w-[6px] border  ${idx + 1 === steps.stepsCount.length ? "hidden" : "" || steps.currentStep > idx + 1 ? "bg-primary" : ""}`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TrackSteps;
