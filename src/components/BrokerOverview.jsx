import { useEffect, useState } from "react";
import { getBrokerInfo, getOnboardingWorkflow } from "../api/mockApi";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import OnboardingWorkflow from "./OnboardingWorkflow";
import AiAssistantToggle from "./AiAssistantToggle";


export default function BrokerOverview() {
  const [broker, setBroker] = useState(null);
  const [workflow, setWorkflow] = useState([]);

  useEffect(() => {
    getBrokerInfo().then(setBroker);
    getOnboardingWorkflow().then((res) => setWorkflow(res.steps));
  }, []);

  if (!broker) return null;

  return (
    <div className="bg-white shadow rounded shadow-lg p-4">
        <Accordion type="single" collapsible defaultValue="overview">
        {/* --- Broker Overview Section --- */}
        <AccordionItem value="overview">
          <AccordionTrigger className={"text-[18px] font-bold mb-4 p-0"}>Broker Overview</AccordionTrigger>
          <AccordionContent>
            <p className="text-[18px] font-semibold">{broker.name}</p>

            <div className="grid grid-cols-3 gap-4 text-center my-4">
              <div>
                <p className="text-2xl font-bold">{broker.deals}</p>
                <p className="text-xs text-gray-500">Deals</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{broker.approval_rate}</p>
                <p className="text-xs text-gray-500">Approval Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold">
                  ${broker.pending.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">Pending</p>
              </div>
            </div>

            <div className="flex gap-2 mb-2 justify-center">
              <Button data-testid='btn-call' onClick={() => console.log("Calling broker...")} size="sm" variant="secondary">
                <Phone className="w-4 h-4 mr-1" /> Call
              </Button>
              <Button data-testid='btn-email' onClick={() => console.log("Sending email...")} size="sm" variant="secondary">
                <Mail className="w-4 h-4 mr-1" /> Email
              </Button>
              <Button data-testid='btn-chat' onClick={() => console.log("Starting chat...")} size="sm" variant="secondary">
                <MessageSquare className="w-4 h-4 mr-1" /> Chat
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* --- Onboarding Workflow Section --- */}
        <AccordionItem value="workflow">
          <AccordionTrigger className={"text-lg font-bold"}>Onboarding Workflow</AccordionTrigger>
          <AccordionContent>
            <OnboardingWorkflow steps={workflow} />
          </AccordionContent>
        </AccordionItem>
        </Accordion>
       <AiAssistantToggle />
    </div>
  );
}
