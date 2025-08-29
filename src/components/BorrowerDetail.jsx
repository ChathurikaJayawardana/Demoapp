import { useEffect, useState } from "react";
import { useBorrowerStore } from "../store/useBorrowerStore";
import { getBorrowerDetail } from "../api/mockApi";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoanSummary from "./LoanSummary";   

export default function BorrowerDetail() {
  const { activeBorrower } = useBorrowerStore();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (activeBorrower) {
      getBorrowerDetail(activeBorrower.id).then(setDetail);
    }
  }, [activeBorrower]);

  if (!detail) {
    return (
      <div className="bg-white shadow rounded p-4 flex items-center justify-center text-gray-500">
        Select a borrower to view details
      </div>
    );
  }

  return (
    <div data-testid="borrower-detail" className="bg-white shadow rounded p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">{detail.name}</h2>
          <p className="text-sm text-gray-600">{detail.email}</p>
          <p className="text-sm text-gray-600">{detail.phone}</p>
        </div>
        <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
          {detail.status}
        </span>
      </div>

      <p className="font-semibold mb-4">
        Loan Amount: ${detail.loan_amount.toLocaleString()}
      </p>

      <Accordion type="single" collapsible className="mb-4">
        <AccordionItem value="ai-flags">
          <AccordionTrigger>AI Explainability</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {detail.ai_flags.map((flag, idx) => (
                <li key={idx} className="flex items-center text-red-600">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  {flag}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-3">
              <Button size="sm" variant="secondary" onClick={() => console.log("Request Docs")}>
                Request Documents
              </Button>
              <Button size="sm" variant="secondary" onClick={() => console.log("Send to Valuer")}>
                Send to Valuer
              </Button>
              <Button size="sm" onClick={() => console.log("Approve Loan")}>
                Approve
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <LoanSummary detail={detail} />   

      {detail.risk_signal && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 mb-4">
          ⚠️ {detail.risk_signal}
        </div>
      )}

      <Button className="w-full" onClick={() => console.log("Escalate to Credit Committee")}>
        Escalate to Credit Committee
      </Button>
    </div>
  );
}
