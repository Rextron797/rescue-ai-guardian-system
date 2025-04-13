
import { StatusOverview } from "./StatusOverview";
import { AlertsList } from "./AlertsList";
import { ResourceMap } from "./ResourceMap";
import { AiRecommendations } from "./AiRecommendations";
import { CommunicationsPanel } from "./CommunicationsPanel";

export function Dashboard() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Emergency Response Dashboard</h1>
          <p className="text-muted-foreground">
            AI-Powered monitoring and coordination for disaster response
          </p>
        </div>
        
        {/* Status Overview */}
        <StatusOverview />
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ResourceMap />
            <AlertsList />
          </div>
          
          <div className="space-y-6">
            <AiRecommendations />
            <CommunicationsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
