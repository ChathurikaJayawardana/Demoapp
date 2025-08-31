import { useEffect, useState } from "react";
import { useBorrowerStore } from "../store/useBorrowerStore";
import { getBorrowerDetail } from "../api/mockApi";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoanSummary from "./LoanSummaryCard";

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
      <div className="bg-white shadow-lg rounded p-4 flex items-center justify-center text-gray-500">
        Select a borrower to view details
      </div>
    );
  }

  return (
    <div data-testid="borrower-detail" className="bg-white shadow-lg rounded p-3">
<div className="flex justify-between items-start mb-4">
  {/* Left side: name, email, phone */}
  <div>
    <h2 className="text-[18px] font-bold">{detail.name}</h2>
    <p className="text-[12px] text-gray-600">{detail.email}</p>
    <p className="text-[12px] text-gray-600">{detail.phone}</p>
  </div>

  {/* Right side: status badge */}
  <div>
    <span className="px-3 py-1 text-xs font-normal rounded-md bg-gray-100 text-yellow-800">
      {detail.status}
    </span>
  </div>
</div>


      <div className="flex justify-between items-start mb-4">
         <div>
           <p className="text-[16px] font-semibold mb-4">
        Loan Amount: 
      </p>
         </div>
         <div>
              ${detail.loan_amount.toLocaleString()}
         </div>
      </div>


      <Accordion type="single" collapsible className="text-[14px] font-semibold mb-4">
        <AccordionItem value="ai-flags">
          <AccordionTrigger data-testid="explainability-accordion">
            AI Explainability
          </AccordionTrigger>
          <AccordionContent data-testid="explainability-content">
            <ul className="space-y-2">
              {detail.ai_flags.map((flag, idx) => (
                <li key={idx} className="flex items-center text-red-600">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  {flag}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-3 justify-center">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => console.log("Request Docs")}
              >
                Request Documents
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => console.log("Send to Valuer")}
              >
                Send to Valuer
              </Button>
              <Button
                size="sm"
                data-testid="btn-approve"
                onClick={() => console.log("Approve Loan")}
              >
                Approve
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <LoanSummary detail={detail} />

      {detail.risk_signal && (
        <div data-testid="risky-container">
          <div className="p-2 bg-red-50 border border-red-200 rounded text-red-700 mb-4 text-center">
            ⚠️ {detail.risk_signal}
          </div>
          <Button
            className="w-full"
            variant={"destructive"} data-testid="btn-escalate"
            onClick={() => console.log("Escalate to Credit Committee")}
          >
            Escalate to Credit Committee
          </Button>
        </div>
      )}
    </div>
  );
}
