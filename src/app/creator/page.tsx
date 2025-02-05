"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Router, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreatorOnboarding() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-xl flex flex-col items-center justify-center text-center">
        {/* Form Container */}
        <div className="space-y-6 w-full">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Let's name your page
            </h1>
            <p className="text-gray-400">
              You can get creative or start with your name. Don't worry, you can
              always change this later.
            </p>
          </div>

          <form className="space-y-6 w-full">
            <div className="flex items-center space-x-2 justify-center">
              <Checkbox id="age-check" />
              <label htmlFor="age-check" className="text-sm text-gray-400">
                My page isn't suitable for people under 18
              </label>
            </div>

            <Input
              type="text"
              placeholder="Your creator name"
              className="bg-gray-800 border-gray-700 text-white w-full"
            />

            <Button
              className="w-full bg-gray-200 text-black hover:bg-gray-300"
              onClick={() => router.push("/creator-dashboard")}
            >
              Continue
            </Button>
          </form>

          <div className="pt-4">
            <Button variant="link" className="text-gray-400 hover:text-white">
              Not a creator? Join as a fan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
