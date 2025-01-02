"use client";
import { InView } from "../ui/in-view";
import { motion } from "motion/react";

export function InViewImagesGrid() {
  return (
    <div className="h-full w-full overflow-auto bg-black">
      <div className="mb-20 py-12 text-center text-sm">Scroll down</div>
      <div className="flex h-[1200px] items-end justify-center pb-12">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-2 gap-4 px-8 sm:columns-3">
            {[
              "https://images.beta.cosmos.so/1b6f1bee-1b4c-4035-9e93-c93ef4d445e1?format=jpeg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEODqeCcEuXN4GYFNu1Doh7dS5gomDgKC2wQ&s",
              "https://yt3.googleusercontent.com/m6Lq0zDJ8qQfipdpk-bWFVUswXZhnxNbIJH7qgv6wv_RnjcYvZrrIYj--Nz3rDd_m5BSLfUYaQ=s176-c-k-c0x00ffffff-no-rj-mo",
              "https://images.beta.cosmos.so/86af92c0-064d-4801-b7ed-232535b03328?format=jpeg",
              "https://images.beta.cosmos.so/399e2a4a-e118-4aaf-9c7e-155ed18f6556?format=jpeg",
              "https://th.bing.com/th/id/OIP.StotjN4kdzLr-wgoZQ-xkAHaJP?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLBs8iyDb-u0Mr9nGSjS9aZel-XG52NJMeA&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWt2e9kG3EStglMVgYtf1e0_nu2G46zT0AQ&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nfkloJmkIv2qSmORIOadcRqX_e2fAxKVdA&sjpeg",
              "https://prasadtechintelugu.com/wp-content/uploads/2023/04/still-for-subscribe-834x1024.png",
            ].map((imgSrc, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                  key={index}
                  className="mb-4"
                >
                  <img
                    src={imgSrc}
                    alt={`Image placeholder from cosmos.so, index:${index}`}
                    className="size-full rounded-lg object-contain border-2 border-blue-600"
                  />
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}
