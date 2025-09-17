import { QrCode } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-primary p-2 rounded-lg">
                                <QrCode className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold">ZappQ</span>
                        </div>
                        <p className="text-muted-foreground">
                            Transforming restaurants with contactless QR code ordering solutions.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Demo</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; 2024 ZappQ. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 