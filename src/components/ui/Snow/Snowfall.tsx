"use client";

import { useEffect, useState } from "react";
import SnowFlakes from "./Snowflakes";
import { ISnowFlakesStyle } from "@/utils/definition";


export default function SnowFall({ count }: { count: number }) {
  const [snowFlakes, setSnowFlakes] = useState<ISnowFlakesStyle[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: count }).map(() => {
      return {
        left: `${Math.random() * 100}vw`, // Random position
        animationDuration: `${Math.random() * 4 + 2}s`, // Random duration
        animationDelay: `${Math.random() * -5}s`, // Random delay
        size: `${Math.random() * 29 + 1}px`, // Random size between 5px and 10px
        blur: `${Math.random() * 0 + 1}px`, //Random blur btw 2px 5px
      };
    });
    setSnowFlakes(flakes);
  }, [count]);

  return (
    <>
      <div className="snowfall absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {snowFlakes.map((flake, index) => {
          return (
            <SnowFlakes
              key={index}
              style={{
                left: flake.left,
                width: flake.size,
                height: flake.size,
                filter: `blur(${flake.blur})`,
                animationDuration: flake.animationDuration,
                animationDelay: flake.animationDelay,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
