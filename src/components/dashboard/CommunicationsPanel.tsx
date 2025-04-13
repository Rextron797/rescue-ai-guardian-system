
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, MessageSquare } from "lucide-react";

interface ContactMethod {
  id: string;
  type: "call" | "email" | "message";
  title: string;
  target: string;
  time: string;
  status: "scheduled" | "completed" | "failed";
}

const communications: ContactMethod[] = [
  {
    id: "1",
    type: "call",
    title: "Emergency Broadcast",
    target: "All Central District Residents",
    time: "5:30 PM Today",
    status: "scheduled"
  },
  {
    id: "2",
    type: "email",
    title: "Evacuation Notice",
    target: "Northern Woods Residents",
    time: "12:45 PM Today",
    status: "completed"
  },
  {
    id: "3",
    type: "message",
    title: "Shelter Information",
    target: "Eastern Neighborhood",
    time: "2:15 PM Today",
    status: "completed"
  }
];

const statusColors = {
  scheduled: "bg-blue-100 text-blue-800 border-blue-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  failed: "bg-red-100 text-red-800 border-red-200"
};

const typeIcons = {
  call: Phone,
  email: Mail,
  message: MessageSquare
};

export function CommunicationsPanel() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Communications</CardTitle>
            <CardDescription>Recent and scheduled emergency notifications</CardDescription>
          </div>
          <Button variant="outline" size="sm">New Broadcast</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {communications.map((comm) => {
            const Icon = typeIcons[comm.type];
            
            return (
              <div 
                key={comm.id}
                className="border rounded-lg p-3 flex items-center gap-3"
              >
                <div className="bg-muted w-10 h-10 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{comm.title}</h3>
                  <p className="text-xs text-muted-foreground">{comm.target}</p>
                </div>
                
                <div className="flex flex-col items-end">
                  <Badge className={`${statusColors[comm.status]} text-xs font-normal`}>
                    {comm.status.charAt(0).toUpperCase() + comm.status.slice(1)}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {comm.time}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
