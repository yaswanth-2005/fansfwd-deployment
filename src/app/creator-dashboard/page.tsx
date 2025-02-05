import Link from "next/link";
import { MoreHorizontal, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Banner */}
      <div className="relative h-[300px]">
        <div className="absolute inset-0 bg-[#B388E8]" />

        {/* Top buttons */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/10 backdrop-blur-sm rounded-full"
          >
            <span className="sr-only">Edit banner</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
              <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
            </svg>
          </Button>

          {/* <div className="flex gap-2">
            <Button variant="secondary" className="rounded-full">
              Preview page
            </Button>
            <Button className="rounded-full">Publish page</Button>
          </div> */}
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative px-4 pb-4">
        <div className="flex justify-between items-start -mt-12 mb-4">
          <div className="h-24 w-24 bg-blue-600 rounded-lg flex items-center justify-center text-3xl font-bold">
            Y
          </div>
          <div className="flex gap-2">
            <Button className="rounded-full">Create</Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-semibold">yaswanth-varada</h1>
            <p className="text-zinc-400">Add headline</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8 border-b border-zinc-800">
          <ul className="flex gap-6">
            {[
              "Home",
              "Collections",
              "Shop",
              "Membership",
              "About",
              "Recommendations",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className={`inline-block px-1 py-4 text-sm ${
                    item === "Home"
                      ? "text-white border-b-2 border-white"
                      : "text-zinc-400"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Setup Card */}
        <div className="mt-8 p-6 rounded-lg bg-zinc-900">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Your fansFWD is ready! Here's how to make it yours
              </h2>
              <p className="text-zinc-400">
                Adding some details helps visitors learn more about you and what
                you plan to share here.
              </p>
              <p className="mt-2 text-emerald-500">1 of 5 complete</p>
            </div>
            <Button variant="ghost" size="icon">
              <span className="sr-only">Collapse</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M5 12h14" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
