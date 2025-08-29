export default function LoanSummary({ detail }) {
  if (!detail) return null;

  return (
    <div className="bg-gray-50 rounded p-4 mb-4">
      <h3 className="font-semibold mb-3">Loan Summary</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-xs text-gray-500">Employment</p>
          <p>{detail.employment}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Existing Loan</p>
          <p>${detail.existing_loan.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Credit Score</p>
          <p>{detail.credit_score}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Source of Funds</p>
          <p>{detail.source_of_funds}</p>
        </div>
      </div>
    </div>
  );
}
