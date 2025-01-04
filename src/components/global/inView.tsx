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
              "https://yt3.googleusercontent.com/DLer1VC9KzQIOiTYFPrNXSndwrgXHplj6e4r0_JNkPcTaB0PfRwDQTPGWhhXoA12JiSGi991rCU=s160-c-k-c0x00ffffff-no-rj",
              "https://yt3.googleusercontent.com/r09RpDUvcrXhuGYFqVujMChDqX_MTQbH6ronxmHWQuT5detla632gIkElqz-1lvKBAz7rzR50g=s160-c-k-c0x00ffffff-no-rj",
              "https://yt3.googleusercontent.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s160-c-k-c0x00ffffff-no-rj",
              "https://yt3.googleusercontent.com/66OTTHSdZwqnz75I-z_sCFmf-EKQ9q4_OZsluCDm3KqPrcauc16Si1gGQuUgqe82Pi05Y2vnpw=s160-c-k-c0x00ffffff-no-rj",
              "https://yt3.googleusercontent.com/vLLYSMUqgq8v8lNVFodiBTrvDZJvTPYkDATk0LxPcYQcZVCqHvca499gj2ZkdroX3LfJtWg5=s160-c-k-c0x00ffffff-no-rj",
              "https://yt3.googleusercontent.com/ytc/AIdro_ljNzHZ3SguEFdt1hJvtdx-btjNUQV1plknPziW9278yxA=s160-c-k-c0x00ffffff-no-rj",
              "https://yt3.googleusercontent.com/DLer1VC9KzQIOiTYFPrNXSndwrgXHplj6e4r0_JNkPcTaB0PfRwDQTPGWhhXoA12JiSGi991rCU=s160-c-k-c0x00ffffff-no-rj",
              "https://prasadtechintelugu.com/wp-content/uploads/2023/04/still-for-subscribe-834x1024.png",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWt2e9kG3EStglMVgYtf1e0_nu2G46zT0AQ&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nfkloJmkIv2qSmORIOadcRqX_e2fAxKVdA&sjpeg",
              "https://yt3.googleusercontent.com/ytc/AIdro_my0_ZKr9LesvJFsIy1SFOJO_FiipmLjjbz-3wQlVOb7Q=s160-c-k-c0x00ffffff-no-rj",
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
