import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const RegistrationScreen = () => {

    const [userType, setUserType] = useState("user");

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4 my-5">
            <div className="w-full max-w-lg bg-card shadow-lg rounded-2xl p-8 space-y-6">
                {/* Company Logo & Title */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">ZappQ</h1>
                    <p className="text-muted-foreground mt-2">Create your account to get started</p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" type="text" placeholder="John Doe" required />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>

                    {/* User Type */}
                    <div className="space-y-2">
                        <Label htmlFor="userType">Account Type</Label>
                        <Select onValueChange={(val) => setUserType(val)} defaultValue="user">
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="user">User</SelectItem>
                                <SelectItem value="restaurant-owner">Restaurant Owner</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Restaurant Name - Conditional */}
                    {userType === "restaurant-owner" && (
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Restaurant Name</Label>
                            <Input id="restaurantName" type="text" placeholder="My Awesome Cafe" />
                        </div>
                    )}

                    {/* Password */}
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="••••••••" required />
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" placeholder="••••••••" required />
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <label
                            htmlFor="terms"
                            className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I agree to the{" "}
                            <a href="/terms" className="text-primary hover:underline">
                                Terms & Conditions
                            </a>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full">
                        Create Account
                    </Button>

                    {/* Login Redirect */}
                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary hover:underline">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegistrationScreen;
