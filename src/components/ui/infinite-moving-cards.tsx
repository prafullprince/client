"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  //   items: {
  //     user: string;
  //     reviews: string;
  //     rating: number;
  //     image: string
  //   }[];
  items: any;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-[100]  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-2 flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items?.map((item: any, idx: any) => (
          <li
            className="w-[300px] max-w-full relative rounded-2xl border flex-shrink-0 border-richblack-800 bg-richblack-800 px-8 py-6 md:w-[450px] shadow-sm shadow-blue-50"
            style={
              {
                //   background:
                //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              }
            }
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20 flex flex-col gap-1">
                {/* user profile */}
                <span className="flex items-center gap-3">
                  <img
                    className="text-sm leading-[1.6] text-richblack-25 font-normal w-10 h-10 min-w-10 min-h-10 rounded-full"
                    src={item.user.image}
                  />
                  <div className=" flex flex-col gap-[1px]">
                    <span className=" text-lg font-medium leading-[1.6] text-richblack-5">
                      {item.user.name}
                    </span>
                    <span className=" text-sm leading-[1.6] text-richblack-400 font-normal">
                      {item.user.email}
                    </span>
                  </div>
                </span>
                {/* reviews */}
                <div className="">
                  <p className="text-sm leading-[1.6] text-richblack-25 font-normal">
                    {item.reviews}
                  </p>
                </div>
                {/* rating */}
                <div className=" flex gap-2 items-center text-xl">
                  <div className=" text-yellow-200 font-bold text-lg">{item.rating}</div>
                  <div className="flex gap-[2px] items-center">
                    {
                        Array.from({length:5},(_,index)=>{
                            if(index < Math.floor(item.rating)){
                                return <FaStar key={index} className=" text-yellow-100 text-xl" />
                            }
                            else if(index<item.rating){
                                return <FaStarHalfStroke key={index} className=" text-yellow-100 text-xl" />
                            }
                            else{
                                return <FaRegStar key={index} className=" text-yellow-300 text-xl" />
                            }
                        })
                    }
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
