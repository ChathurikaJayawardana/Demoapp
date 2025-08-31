import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function AiAssistantToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center space-x-3 p-4 bg-white shadow rounded-lg">
      <Label htmlFor="ai-assistant" className="text-sm font-medium">
        AI Assistant 
      </Label>
      <Switch
        id="ai-assistant"
        checked={enabled}
        onCheckedChange={setEnabled}
      />
      <span className="text-sm text-gray-500">
        {enabled ? "Enabled" : "Disabled"}
      </span>
    </div>
  );
}
