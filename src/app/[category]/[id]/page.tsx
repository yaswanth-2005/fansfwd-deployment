import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { categories } from "@/lib/data";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

type Props = {};

const CommunityProfile = ({
  params,
}: {
  params: { id: string; category: string };
}) => {
  const { id, category } = params;
  const file = categories.filter((doc) => doc.name === category)[0];
  const profile = file.products.filter(
    (product: { name: string; id: number; image: string; artist: string }) => {
      return product.id === +id;
    }
  );
  return <Profile profile={profile[0]} category={category} id={id} />;
};
export default CommunityProfile;

function Profile({
  profile,
  category,
  id,
}: {
  profile: {
    id: number;
    name: string;
    image: string;
    artist: string;
    pirce: number;
  };
  category: string;
  id: string;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={profile.image}
            alt="Background"
            width={1200}
            height={300}
            className="w-full h-full object-cover opacity-50"
            priority
          />
        </div>
        <h1 className="relative text-6xl md:text-8xl font-bold tracking-tighter z-10">
          {profile.artist}
        </h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center -mt-12 relative z-20 px-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-black">
          <Image
            src={profile.image}
            alt="Aaron Bennett"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold mt-4 text-white">
          {profile.name}
        </h2>
        <p className="text-gray-400">Helping you navigate the crypto world</p>
        <div className="flex gap-2 text-sm text-gray-400 mt-2">
          <span>1,346 members</span>
          <span>•</span>
          <span>20 posts</span>
          <span>•</span>
          <span className="text-white">${profile.pirce}/month</span>
        </div>

        <Link href={`/${category}/${id}/payment`}>
          <Button className="mt-4 w-[200px]">Join </Button>
        </Link>
        <div className="flex gap-4 mt-4">
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Youtube className="w-5 h-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
        <nav className="flex gap-6 mt-6 border-b border-gray-800 w-full max-w-screen-md justify-center pb-4">
          <Link href="#" className="text-white">
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Chats
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>
      </div>

      {/* Membership Section */}
      <div className="max-w-screen-md mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Choose your membership</h2>
        <Card className="bg-gray-900 border-gray-800 p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-white">
                {profile.artist}&apos;s Community
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">
                  ${profile.pirce}
                </span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>
            <Link href={`/${category}/${id}/payment`}>
              <Button className="w-full">Join</Button>
            </Link>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-400">
                What&apos;s included
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  • Aaron&apos;s Insights (More frequent updates on the market,
                  changes to my portfolio, buys & sells)
                </li>
                <li>• Market Analysis & Leveraging My 11 Years In Crypto</li>
                <li>• 2 Q&A Sessions Per Month</li>
                <li>• Video Updates</li>
                <li>• How-To Video Tutorials</li>
                <li>• Community Chat</li>
                <li>• Discord access</li>
              </ul>
            </div>
            <div className="mt-6 bg-gray-800 rounded-lg p-4 flex items-center gap-4">
              <div className="flex-1">
                <h4 className="text-sm font-medium">Gift membership</h4>
                <p className="text-sm text-gray-400">
                  Buy the benefits of Aaron Bennett for your friends and family.
                </p>
              </div>
              <Button variant="outline">Gift</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Posts Section */}
      <div className="max-w-screen-md mx-auto px-4 pb-12">
        <h2 className="text-2xl font-semibold mb-6">Demo Video</h2>
        <div className="relative">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/watch?v=qh3NGpYRG3I"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/watch?v=qh3NGpYRG3I"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
      <div className="text-center w-full">
        <h1>You need to upgrade to view the course content</h1>
      </div>
    </div>
  );
}
