import { ArrowLeft } from "lucide-react";
import {useRouter} from "next/navigation";

interface StepHeaderProps {
  currentStep: number;
  totalSteps: number;
  title: string;
  subtitle: string;
  onBack?: () => void;
  onClose?: () => void;
}

export function StepHeader({
  currentStep,
  totalSteps,
  title,
  subtitle,
  onBack,
}: StepHeaderProps) {
  const router = useRouter();
  return (
    <div className="mb-4 px-10">
      {/* Main Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2 mt-5 gap-3">
        {/* Left Side - Title and Back Button */}
        <div className="flex items-start md:items-center gap-2">
          {/* Back Button */}
          <button
            onClick={onBack ? onBack : () => router.back()}
            className="px-2 py-2 bg-[#E9F0F6]  border rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </button>

          {/* Title */}
          <div className="flex flex-col">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>
            <div>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Step Indicator */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 justify-start">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-72 mt-2">
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#419E6A] transition-all duration-300 ease-out rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
