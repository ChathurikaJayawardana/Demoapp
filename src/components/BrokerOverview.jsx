import { useEffect, useState } from "react";
import { getBrokerInfo, getOnboardingWorkflow } from "../api/mockApi";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import OnboardingWorkflow from "./OnboardingWorkflow";

export default function BrokerOverview() {
  const [broker, setBroker] = useState(null);
  const [workflow, setWorkflow] = useState([]);

  useEffect(() => {
    getBrokerInfo().then(setBroker);
    getOnboardingWorkflow().then((res) => setWorkflow(res.steps));
  }, []);

  if (!broker) return null;

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-2">Broker Overview</h2>
      <p className="text-xl font-semibold">{broker.name}</p>

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
          <p className="text-2xl font-bold">${broker.pending.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Pending</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <Button size="sm" variant="secondary"><Phone className="w-4 h-4 mr-1" />Call</Button>
        <Button size="sm" variant="secondary"><Mail className="w-4 h-4 mr-1" />Email</Button>
        <Button size="sm" variant="secondary"><MessageSquare className="w-4 h-4 mr-1" />Chat</Button>
      </div>

      <OnboardingWorkflow steps={workflow} />
    </div>
  );
}
