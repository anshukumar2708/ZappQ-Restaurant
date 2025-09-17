import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Utensils,
    ClipboardList,
    ListOrdered,
    Users,
    Settings,
    Table as TableIcon,
    Menu
} from "lucide-react";


const ownerNavItems = [
    { name: "Dashboard", path: "/owner/dashboard", icon: LayoutDashboard },
    { name: "Table Management", path: "/owner/tables", icon: TableIcon },
    { name: "Menu Management", path: "/owner/menu", icon: Utensils },
    { name: "Orders", path: "/owner/orders", icon: ClipboardList },
    { name: "Categories", path: "/owner/categories", icon: ListOrdered },
    { name: "Customers", path: "/owner/customers", icon: Users },
    { name: "Settings", path: "/owner/settings", icon: Settings },
];

const RestaurantDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen flex bg-background">
            {/* Sidebar */}
            <aside
                className={`fixed md:static inset-y-0 left-0 z-50 w-64 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform md:translate-x-0 bg-card shadow-lg border-r`}
            >
                {/* Logo */}
                <div className="flex items-center justify-center h-16 border-b">
                    <span className="text-xl font-bold text-primary">ZappQ Owner</span>
                </div>

                {/* Nav Links */}
                <nav className="p-4 space-y-2">
                    {ownerNavItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <header className="h-16 bg-background border-b flex items-center justify-between px-4 md:px-6">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-muted focus:outline-none focus:ring"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <h1 className="text-xl font-semibold text-foreground">Restaurant Dashboard</h1>
                    <div className="flex items-center space-x-3">
                        {/* Can add profile dropdown or notifications here */}
                        <span className="text-sm font-medium text-muted-foreground">Welcome, Owner</span>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                    <Outlet /> {/* Here each page (orders, menu, etc.) will be rendered */}
                </main>
            </div>
        </div>
    );
};

export default RestaurantDashboard;
