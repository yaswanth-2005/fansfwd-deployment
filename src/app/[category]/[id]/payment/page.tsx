"use client";

import { useState } from "react";
import { CreditCard, Eye, EyeOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function PaymentGateway({
  params,
}: {
  params: { id: string; category: string };
}) {
  const { id, category } = params;

  const file = categories.filter((doc) => doc.name === category)[0];

  const profile = file.products.filter(
    (product: { name: string; id: number; image: string; artist: string }) => {
      return product.id === +id;
    }
  );

  console.log(profile);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCVC, setShowCVC] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 flex gap-10 flex-col">
        <h1 className="text-4xl font-semibold">
          <span className="text-[#1d4ed8] text-5xl">{profile[0].name}</span>
          's community
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Credit Card Details Form */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6">Payment Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="cardName"
                  className="text-sm font-medium text-gray-300"
                >
                  Name on Card
                </Label>
                <Input
                  id="cardName"
                  placeholder="John Doe"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="cardNumber"
                  className="text-sm font-medium text-gray-300"
                >
                  Card Number
                </Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 pl-10"
                    required
                  />
                  <CreditCard
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="expiry"
                    className="text-sm font-medium text-gray-300"
                  >
                    Expiry Date
                  </Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="cvc"
                    className="text-sm font-medium text-gray-300"
                  >
                    CVC
                  </Label>
                  <div className="relative">
                    <Input
                      id="cvc"
                      type={showCVC ? "text" : "password"}
                      placeholder="123"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 pr-10"
                      maxLength={3}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowCVC(!showCVC)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showCVC ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Pay Now"
                )}
              </Button>

              <p className="text-center text-sm text-gray-400">
                By clicking Pay Now, you agree to our{" "}
                <Link href="#" className="text-blue-400 hover:underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
          {/* Payment Invoice */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Payment Summary</h2>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Pro Plan (Monthly)</span>
                <span className="font-semibold">${profile[0].pirce}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Tax</span>
                <span className="font-semibold">$2.99</span>
              </div>
              <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">
                    ${profile[0].pirce + 2.99}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Pro Plan Features:
              </h3>
              <ul className="space-y-2">
                {[
                  "Unlimited access to all features",
                  "Priority customer support",
                  "Advanced analytics",
                  "Custom integrations",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
