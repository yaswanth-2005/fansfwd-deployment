import { Spotlight } from "../ui/spotlight";
import { Cursor1 } from "./cursor";

export function SpotlightBasic() {
  return (
    <div className="relative aspect-video h-[200px] w-full rounded  bg-black dark:border-zinc-800 dark:bg-black">
      <Spotlight
        className="bg-zinc-700 blur-2xl"
        size={64}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
      <div className="w-full h-full">
        <Cursor1 />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded text-white text-5xl p-2 dark:bg-black w-full h-200">
          <h1 className="flex flex-col justify-center items-center">
            Complete Creative Control
          </h1>
        </div>
      </div>
    </div>
  );
}
