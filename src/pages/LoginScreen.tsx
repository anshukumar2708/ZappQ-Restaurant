import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { QrCode } from "lucide-react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
            <Card className="w-full max-w-md shadow-xl">
                <CardHeader className="flex flex-col items-center space-y-2">
                    {/* Company Logo + Name */}
                    <div className="bg-primary p-3 rounded-xl">
                        <QrCode className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">ZappQ</CardTitle>
                    <p className="text-muted-foreground text-sm text-center">
                        Sign in to access your dashboard
                    </p>
                </CardHeader>

                <CardContent>
                    <form className="space-y-4">
                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="********"
                                required
                            />
                        </div>

                        {/* Login Button */}
                        <Button type="submit" className="w-full">
                            Sign In
                        </Button>

                        {/* Extra Links */}
                        <div className="flex justify-between text-sm mt-2">
                            <Link to="/forgot-password" className="text-primary hover:underline">
                                Forgot password?
                            </Link>
                            <Link to="/registration" className="text-primary hover:underline">
                                Create an account
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginScreen;
