import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    // Navigation items array
    const navItems = [
        { name: "Features", path: "/features" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "Pricing", path: "/pricing" },
        { name: "Sign In", path: "/login" },
    ];

    return (
        <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-999">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-primary p-2 rounded-lg">
                            <QrCode className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold">ZappQ</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`transition-colors ${isActive
                                        ? "text-primary font-medium"
                                        : "text-muted-foreground hover:text-primary"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <Button variant="hero">Get Started</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
