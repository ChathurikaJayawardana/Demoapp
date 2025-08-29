export default function OnboardingWorkflow({ steps }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Onboarding Workflow</h3>
      <ol className="space-y-2">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xs">
              {idx + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
