export default function OnboardingWorkflow({ steps }) {
  return (
    <div>
      
      <ol className="space-y-2">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-center gap-2 text-[14px] font-semibold">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-[14px] font-semibold">
              {idx + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
