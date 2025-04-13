
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Dashboard } from "@/components/dashboard/Dashboard";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Index;
