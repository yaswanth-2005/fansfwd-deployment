"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
// import AuthLayout from "../components/auth-layout";
import AuthLayout from "../layout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", email, password);
  };

  return (
    <AuthLayout title="Log In">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-white">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 bg-gray-800 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 bg-gray-800 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-900 text-white"
        >
          Log In
        </Button>

        <Separator className="my-8" />

        <Button
          type="button"
          variant="outline"
          className="w-full bg-gray-800 text-white hover:bg-gray-700"
          onClick={() => {
            /* Handle Google Login */
          }}
        >
          Continue with Google
        </Button>

        <p className="mt-2 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-500 hover:text-blue-400"
          >
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
