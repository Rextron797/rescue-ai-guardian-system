
import { CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  title: string;
  count: number;
  status: "low" | "medium" | "high" | "critical";
  icon?: React.ElementType;
}

const StatusCard = ({ title, count, status, icon: Icon }: StatusCardProps) => {
  const statusColors = {
    low: "bg-severity-low/10 border-severity-low/20 text-severity-low",
    medium: "bg-severity-medium/10 border-severity-medium/20 text-severity-medium",
    high: "bg-severity-high/10 border-severity-high/20 text-severity-high",
    critical: "bg-severity-critical/10 border-severity-critical/20 text-severity-critical"
  };

  const statusIcons = {
    low: CheckCircle2,
    medium: AlertTriangle,
    high: AlertTriangle,
    critical: AlertCircle
  };
  
  const IconToUse = Icon || statusIcons[status];

  return (
    <div className={cn("rounded-lg border p-4", statusColors[status])}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-2xl font-bold">{count}</p>
        </div>
        <IconToUse className={cn("w-6 h-6", status === "critical" && "animate-pulse-emergency")} />
      </div>
    </div>
  );
};

export function StatusOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatusCard title="Active Incidents" count={12} status="critical" />
      <StatusCard title="Resources Deployed" count={37} status="high" />
      <StatusCard title="Pending Actions" count={8} status="medium" />
      <StatusCard title="Resolved Today" count={23} status="low" />
    </div>
  );
}
