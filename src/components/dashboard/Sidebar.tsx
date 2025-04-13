
import { Home, MapPin, Phone, AlertTriangle, BarChart3, Settings, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  alert?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, label, active, alert, onClick }: SidebarItemProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-3 w-full p-3 rounded-md transition-colors",
        active 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/20",
      )}
      onClick={onClick}
    >
      <div className="relative">
        <Icon size={20} />
        {alert && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emergency-red rounded-full animate-pulse-emergency" />
        )}
      </div>
      <span className="font-medium">{label}</span>
    </button>
  );
};

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "Dashboard", alert: false },
    { icon: AlertTriangle, label: "Incidents", alert: true },
    { icon: MapPin, label: "Map", alert: false },
    { icon: Phone, label: "Communications", alert: false },
    { icon: BarChart3, label: "Analytics", alert: false },
    { icon: Settings, label: "Settings", alert: false },
  ];

  return (
    <div 
      className={cn(
        "bg-sidebar h-screen transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-emergency-red" size={24} />
            <h1 className="font-bold text-xl text-sidebar-foreground">Guardian AI</h1>
          </div>
        )}
        <button 
          className="p-1 rounded-md hover:bg-sidebar-accent/20 text-sidebar-foreground"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu size={20} />
        </button>
      </div>
      
      <div className="flex-1 p-3 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={collapsed ? "" : item.label}
            active={activeItem === item.label}
            alert={item.alert}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>
      
      <div className="p-4 border-t border-sidebar-border flex items-center gap-3">
        {!collapsed && (
          <>
            <div className="w-8 h-8 rounded-full bg-emergency-red flex items-center justify-center text-emergency-offwhite font-bold">
              AI
            </div>
            <div>
              <p className="text-sm font-medium text-sidebar-foreground">Guardian System</p>
              <p className="text-xs text-sidebar-foreground/70">AI Monitoring Active</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
