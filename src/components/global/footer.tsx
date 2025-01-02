import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Our Community</h3>
            <p className="text-base leading-relaxed">
              Our community is dedicated to bringing people together and
              fostering meaningful connections. Join us in creating a vibrant
              and supportive environment for all members.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                "Home",
                "Events",
                "Members",
                "Blog",
                "Resources",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-base hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Connect</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Newsletter
            </h3>
            <p className="mb-4 text-base">
              Stay updated with our latest news and events.
            </p>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 py-3 text-base"
              />
              <Button type="submit" className="w-full py-3 text-base">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-base">
            &copy; {new Date().getFullYear()} Your Community Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
