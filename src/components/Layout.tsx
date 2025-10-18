import { Link, useLocation } from "react-router-dom";
import { Home, Plus, ListTodo, Settings, User } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/add", icon: Plus, label: "Add" },
    { path: "/checklist", icon: ListTodo, label: "To-Do" },
    { path: "/profile", icon: User, label: "Profile" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-light pb-20">
      {children}
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-soft z-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-around items-center h-16">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all ${
                    active
                      ? "text-primary scale-110"
                      : "text-muted-foreground hover:text-primary hover:scale-105"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? "fill-primary/20" : ""}`} />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
