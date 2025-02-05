"use client";
import { InView } from "../ui/in-view";
import { motion } from "motion/react";

export function InViewImagesGrid() {
  return (
    <div className="h-full w-full overflow-auto bg-black">
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
              "https://images.news18.com/ibnlive/uploads/2022/08/devarakonda-varaprasad-youtuber-166064472116x9.png", // prasadtechintelugu
              "https://pbs.twimg.com/profile_images/1566350148908683264/2bhBMGaV_400x400.jpg", // tech wiser
              "https://img.gurugamer.com/resize/740x-/2020/06/16/carryminati-ajey-nagar-1200x905-076d.jpg", // carryminati
              "https://th.bing.com/th/id/OIP.vmeoQS0a7rtD2BLNQsC7tAAAAA?rs=1&pid=ImgDetMain", //mr beast
              "https://th.bing.com/th/id/OIP.AtgZq7Vzk8BjkiFtlfO2tgHaE_?rs=1&pid=ImgDetMain", // naa anveshana
              "https://th.bing.com/th/id/OIP.npMDHwCgLgHmbedSap8jyQHaE8?rs=1&pid=ImgDetMain", // hitesh choudary
              "https://cdn.gadgets360.com/content/assets/technical-guruji-exclusive-on-ndtv.jpg", // technical guruji.
              // "https://prasadtechintelugu.com/wp-content/uploads/2023/04/still-for-subscribe-834x1024.png",
              "https://networthchart.com/wp-content/uploads/2023/08/ezgif.com-gif-maker-2023-08-23T232201.948.webp", // codewithharry
              // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nfkloJmkIv2qSmORIOadcRqX_e2fAxKVdA&sjpeg",
              "https://framerusercontent.com/images/6Ic2IkzovoYoP8InNiJkKnbaptc.png", // 100x engineers
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
