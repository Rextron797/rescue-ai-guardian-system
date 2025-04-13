
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ResourceMap() {
  return (
    <Card className="h-[400px]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Resource Deployment Map</CardTitle>
            <CardDescription>Current deployment of emergency resources</CardDescription>
          </div>
          <Tabs defaultValue="satellite">
            <TabsList>
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="satellite">Satellite</TabsTrigger>
              <TabsTrigger value="terrain">Terrain</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="bg-muted h-full w-full flex items-center justify-center relative">
          <div className="absolute inset-0 bg-emergency-navy/5 rounded-b-lg backdrop-blur-[1px]"></div>
          <div className="bg-emergency-lightblue/30 p-4 rounded-lg text-center z-10 shadow-sm">
            <p className="text-sm font-medium">Interactive map will be displayed here</p>
            <p className="text-xs text-muted-foreground mt-1">Showing 23 resources across 8 active incidents</p>
          </div>
          
          {/* Map indicators - purely decorative */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-severity-critical rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-severity-high rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-severity-medium rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
        </div>
      </CardContent>
    </Card>
  );
}
