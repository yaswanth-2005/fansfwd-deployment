"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { useRef, useState } from "react";
import { Cursor } from "@/components/ui/cursor";
import { AnimatePresence, motion } from "motion/react";
import { PlusIcon } from "lucide-react";

export default function SpotlightBasic() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };
  const targetRef2 = useRef<HTMLDivElement>(null);

  const handlePositionChange2 = (x: number, y: number) => {
    if (targetRef2.current) {
      const rect = targetRef2.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering2(isInside);
    }
  };
  return (
    <div className="relative aspect-video h-full bg-black border-zinc-800 flex flex-col gap-5">
      <Spotlight
        className="bg-zinc-700 blur-2xl"
        size={64}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
      {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-2 dark:bg-black">
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
          aria-label="MP Logo"
          width="70"
          height="70"
          className="h-8 w-auto stroke-black dark:stroke-white"
          fill="none"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="3"
            d="M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"
          ></path>
        </svg>
      </div> */}
      <div className="w-fit">
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          springConfig={{
            bounce: 0.001,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.15,
          }}
          onPositionChange={handlePositionChange}
        >
          <motion.div
            animate={{
              width: isHovering ? 80 : 16,
              height: isHovering ? 32 : 16,
            }}
            className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
          >
            <AnimatePresence>
              {isHovering ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="inline-flex w-full items-center justify-center"
                >
                  <div className="inline-flex items-center text-sm text-white dark:text-black">
                    More <PlusIcon className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </Cursor>
        <div ref={targetRef} className="w-fit">
          <img
            src="https://i.pinimg.com/564x/75/3c/3f/753c3f1a9f85871ffa7a7a78bcf49f66.jpg"
            alt="Olympic logo Paris 2024"
            className="h-52 max-w-48 rounded-[8px] border border-zinc-100 object-cover"
          />
        </div>
      </div>
      <div className="w-fit">
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          springConfig={{
            bounce: 0.001,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.15,
          }}
          onPositionChange={handlePositionChange2}
        >
          <motion.div
            animate={{
              width: isHovering2 ? 80 : 16,
              height: isHovering2 ? 32 : 16,
            }}
            className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
          >
            <AnimatePresence>
              {isHovering2 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="inline-flex w-full items-center justify-center"
                >
                  <div className="inline-flex items-center text-sm text-white dark:text-black">
                    More <PlusIcon className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </Cursor>
        <div ref={targetRef2} className="w-fit">
          <img
            src="https://i.pinimg.com/564x/75/3c/3f/753c3f1a9f85871ffa7a7a78bcf49f66.jpg"
            alt="Olympic logo Paris 2024"
            className="h-52 max-w-48 rounded-[8px] border border-zinc-100 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
