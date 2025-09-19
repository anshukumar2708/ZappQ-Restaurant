import { sidebarItems } from "@/utils/constant";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen }: { sidebarOpen: boolean }) => {

  const location = useLocation();

  return (
    <aside
      className={`fixed md:static inset-y-0 left-0 pos z-0 w-64 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 bg-card shadow-lg border-r`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-xl font-bold text-primary">ZappQ Owner</span>
      </div>

      {/* Nav Links */}
      <nav className="p-4 space-y-2">
        {sidebarItems?.map((item) => {
          const Icon = item?.icon;
          const isActive = location?.pathname === item?.path;
          return (
            <Link
              key={item?.name}
              to={item?.path}
              className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-primary hover:text-white"
                }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item?.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  )
}

export default Sidebar