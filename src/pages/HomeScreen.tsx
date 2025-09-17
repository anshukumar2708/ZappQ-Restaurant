import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, Smartphone, Clock, Users, CheckCircle, Star, ArrowRight, Utensils, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HomeScreen = () => {
    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="relative bg-gradient-hero py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 lg:gap-0 gap-5 items-center">
                        <div className="text-center lg:text-left">
                            <Badge className="mb-4 bg-primary/20 text-white font-semibold border border-white px-4 py-2 rounded-full shadow-sm tracking-wide">
                                Revolutionary QR Ordering
                            </Badge>
                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                                Transform Your Restaurant with
                                <span className="block text-primary-foreground">QR Code Ordering</span>
                            </h1>
                            <p className="text-xl text-primary-foreground/90 mb-8 max-w-lg">
                                Enable contactless dining experiences. Customers scan, order, and pay directly from their table. Boost efficiency and customer satisfaction instantly.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button size="lg" variant="secondary" className="text-lg px-8">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                    Watch Demo
                                </Button>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-glow">
                            <img
                                src={heroImage}
                                alt="QR Code Restaurant Ordering"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Restaurants</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to create a seamless dining experience for your customers and streamline operations for your staff.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-border shadow-soft hover:shadow-glow transition-all duration-300">
                            <CardHeader>
                                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                                    <QrCode className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>QR Code Generation</CardTitle>
                                <CardDescription>
                                    Generate unique QR codes for each table. Customers scan and instantly access your menu.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border shadow-soft hover:shadow-glow transition-all duration-300">
                            <CardHeader>
                                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                                    <Smartphone className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Mobile-First Design</CardTitle>
                                <CardDescription>
                                    Optimized for mobile devices. Your customers can browse and order with ease on any smartphone.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border shadow-soft hover:shadow-glow transition-all duration-300">
                            <CardHeader>
                                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Real-Time Updates</CardTitle>
                                <CardDescription>
                                    Live order tracking and status updates. Kitchen staff and customers stay informed instantly.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border shadow-soft hover:shadow-glow transition-all duration-300">
                            <CardHeader>
                                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Multi-Restaurant Support</CardTitle>
                                <CardDescription>
                                    Perfect for restaurant chains. Manage multiple locations from a single dashboard.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border shadow-soft hover:shadow-glow transition-all duration-300">
                            <CardHeader>
                                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                                    <BarChart3 className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Analytics & Reports</CardTitle>
                                <CardDescription>
                                    Detailed insights into orders, popular items, and revenue trends to grow your business.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-border shadow-soft hover:shadow-glow transition-all duration-300">
                            <CardHeader>
                                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                                    <Utensils className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Menu Management</CardTitle>
                                <CardDescription>
                                    Easy-to-use interface for updating your menu, prices, and availability in real-time.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-gradient-subtle">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How ZappQ Works</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Simple, fast, and efficient. Get your restaurant up and running in minutes.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                <span className="text-2xl font-bold text-primary-foreground">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Setup Your Restaurant</h3>
                            <p className="text-muted-foreground">Create your account, add your menu items, and configure your tables.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                <span className="text-2xl font-bold text-primary-foreground">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Generate QR Codes</h3>
                            <p className="text-muted-foreground">Create unique QR codes for each table and print them out.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                <span className="text-2xl font-bold text-primary-foreground">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Customers Scan & Order</h3>
                            <p className="text-muted-foreground">Diners scan the QR code, browse your menu, and place orders instantly.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                <span className="text-2xl font-bold text-primary-foreground">4</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Fulfill & Track</h3>
                            <p className="text-muted-foreground">Receive orders in your kitchen panel and update order status in real-time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ZappQ?</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Contactless Dining</h3>
                                        <p className="text-muted-foreground">Safe and hygienic ordering process that customers love.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Faster Service</h3>
                                        <p className="text-muted-foreground">Reduce waiting times and increase table turnover.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Reduced Staff Workload</h3>
                                        <p className="text-muted-foreground">Automate order taking and let staff focus on service.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Higher Revenue</h3>
                                        <p className="text-muted-foreground">Increase orders with better menu visibility and upselling.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Data-Driven Insights</h3>
                                        <p className="text-muted-foreground">Make informed decisions with detailed analytics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Card className="p-8 shadow-glow bg-gradient-subtle border-primary/20">
                                <div className="text-center">
                                    <div className="flex justify-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <blockquote className="text-lg mb-4">
                                        "QRDine transformed our restaurant operations. Orders are more accurate, customers are happier, and our staff can focus on providing great service."
                                    </blockquote>
                                    <cite className="font-semibold">Sarah Johnson</cite>
                                    <p className="text-sm text-muted-foreground">Owner, Bella Vista Restaurant</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                        Ready to Revolutionize Your Restaurant?
                    </h2>
                    <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of restaurants already using QRDine to enhance their customer experience and boost revenue.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-lg px-8">
                            Start Your Free Trial
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomeScreen;