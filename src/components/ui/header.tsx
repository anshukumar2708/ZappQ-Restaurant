import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";

const Header = () => {
    return (
        <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <div className="bg-primary p-2 rounded-lg">
                            <QrCode className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold">ZappQ</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
                        <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
                        <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                        <Button variant="outline">Sign In</Button>
                        <Button variant="hero">Get Started</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header