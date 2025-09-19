import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";


const AuthLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex bg-background relative">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <header className="h-16 bg-background border-b flex items-center justify-between px-4 md:px-6">
                    <div className="flex justify-start items-center">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="md:hidden p-2 rounded-md hover:bg-muted focus:outline-none focus:ring"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <h1 className="text-xl font-semibold text-foreground">Restaurant Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* Can add profile dropdown or notifications here */}
                        <span className="text-sm font-medium text-muted-foreground">Welcome, Owner</span>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>

        </div>
    );
};

export default AuthLayout;
