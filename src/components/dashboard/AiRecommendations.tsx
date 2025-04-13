
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  applied: boolean;
}

const recommendations: Recommendation[] = [
  {
    id: "1",
    title: "Deploy additional rescue teams to Central District",
    description: "AI analysis indicates rising water levels threaten 50+ residences.",
    impact: "high",
    applied: false
  },
  {
    id: "2",
    title: "Reroute traffic around Highway 28 interchange",
    description: "Predicted congestion increase of 35% due to evacuation traffic.",
    impact: "medium",
    applied: true
  },
  {
    id: "3",
    title: "Pre-position medical supplies at North County Hospital",
    description: "Based on evacuation patterns, facility will likely see 40% surge in patients.",
    impact: "high",
    applied: false
  }
];

const impactClasses = {
  high: "bg-severity-critical/10 text-severity-critical border-severity-critical/20",
  medium: "bg-severity-medium/10 text-severity-medium border-severity-medium/20",
  low: "bg-severity-low/10 text-severity-low border-severity-low/20"
};

export function AiRecommendations() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              AI Recommendations
              <Badge variant="outline" className="ml-2 bg-emergency-navy/10">
                3 New
              </Badge>
            </CardTitle>
            <CardDescription>AI-powered suggestions to optimize response efforts</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.map((recommendation) => (
            <div 
              key={recommendation.id}
              className={cn(
                "border rounded-lg p-3 flex flex-col md:flex-row md:items-center gap-3",
                recommendation.applied && "opacity-70"
              )}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {recommendation.applied ? (
                    <CheckCircle2 className="w-4 h-4 text-severity-low" />
                  ) : (
                    <AlertCircle className={`w-4 h-4 ${recommendation.impact === "high" ? "text-severity-critical" : "text-severity-medium"}`} />
                  )}
                  <h3 className="font-medium text-sm">{recommendation.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1 ml-6">{recommendation.description}</p>
              </div>
              
              <div className="flex items-center gap-2 ml-6 md:ml-0">
                <Badge className={cn("status-badge", impactClasses[recommendation.impact])}>
                  {recommendation.impact.toUpperCase()} IMPACT
                </Badge>
                
                {!recommendation.applied && (
                  <Button size="sm" className="whitespace-nowrap">
                    Apply <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
