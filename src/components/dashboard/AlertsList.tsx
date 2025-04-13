
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  title: string;
  location: string;
  time: string;
  severity: "low" | "medium" | "high" | "critical";
  description: string;
}

const alerts: Alert[] = [
  {
    id: "1",
    title: "Flash Flood Warning",
    location: "Central District",
    time: "15 minutes ago",
    severity: "critical",
    description: "Flash flooding detected in Central District due to heavy rainfall. Multiple streets underwater."
  },
  {
    id: "2",
    title: "Wildfire Alert",
    location: "Northern Woods",
    time: "2 hours ago",
    severity: "high",
    description: "Wildfire spreading in Northern Woods area. Currently 120 acres affected."
  },
  {
    id: "3",
    title: "Power Outage",
    location: "Eastern Neighborhood",
    time: "4 hours ago",
    severity: "medium",
    description: "Power outage affecting 500+ households due to damaged transmission lines."
  },
  {
    id: "4",
    title: "Road Closure",
    location: "Highway 101",
    time: "6 hours ago",
    severity: "low",
    description: "Highway 101 closed between exits 23-28 due to road maintenance."
  }
];

const severityClasses = {
  low: "status-badge-low",
  medium: "status-badge-medium",
  high: "status-badge-high",
  critical: "status-badge-critical"
};

export function AlertsList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Alerts</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className={cn(
            "animate-slide-in border-l-4",
            alert.severity === "critical" && "border-l-severity-critical",
            alert.severity === "high" && "border-l-severity-high",
            alert.severity === "medium" && "border-l-severity-medium",
            alert.severity === "low" && "border-l-severity-low"
          )}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{alert.title}</CardTitle>
                <Badge className={cn("status-badge", severityClasses[alert.severity])}>
                  {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                </Badge>
              </div>
              <CardDescription>
                {alert.location} • {alert.time}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{alert.description}</p>
            </CardContent>
            <CardFooter className="pt-2 flex justify-end gap-2">
              <Button variant="outline" size="sm">Dismiss</Button>
              <Button size="sm">Take Action</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
