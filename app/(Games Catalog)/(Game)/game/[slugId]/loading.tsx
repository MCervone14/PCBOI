import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/Icons";
import { CardContent } from "@/components/ui/card";

const GameInfoLoadingPage = () => {
  return (
    <div className="container relative">
      <div className="flex justify-around w-full pt-16">
        <div>
          <Skeleton className="object-cover mb-5 h-[200px] w-[400px] relative ">
            <Icons.placeholder className="w-10 h-10 absolute  text-pink-500 top-1/2 left-1/2 hover:scale-105 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </Skeleton>
          <div className="mb-2">
            <Skeleton className="mb-5 h-[400px] w-[400px] relative flex p-5 items-center justify-around flex-col ">
              <div className="flex w-full justify-center gap-2">
                <p className="h-[65px] w-[100px] bg-pink-500">
                  <Skeleton />
                </p>
                <p className="h-[65px] w-[100px] bg-pink-500">
                  <Skeleton />
                </p>
              </div>
              {Array.from({ length: 6 }).map((_, idx) => (
                <p className="h-3 w-3/4 bg-pink-500 rounded-sm " key={idx}>
                  <Skeleton />
                </p>
              ))}
              <p className="h-3 w-1/2 bg-pink-500 rounded-sm">
                <Skeleton />
              </p>
            </Skeleton>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-around">
          <h2 className="text-3xl">About This Game</h2>
          <Skeleton className="object-cover mb-5 h-[900px] w-[600px] relative flex flex-col justify-around items-center">
            <h1 className="h-5 w-1/4 bg-pink-500 rounded-sm ">
              <Skeleton />
            </h1>
            {Array.from({ length: 3 }).map((_, idx) => (
              <p className="h-3 w-3/4 bg-pink-500 rounded-sm " key={idx}>
                <Skeleton />
              </p>
            ))}
            <p className="h-[250px] w-[500px] bg-pink-500">
              <Skeleton />
            </p>
            {Array.from({ length: 3 }).map((_, idx) => (
              <p className="h-3 w-3/4 bg-pink-500 rounded-sm " key={idx}>
                <Skeleton />
              </p>
            ))}
            <p className="h-[250px] w-[500px] bg-pink-500">
              <Skeleton />
            </p>
          </Skeleton>
        </div>
      </div>
      <div className="mb-10 ">
        <h2 className="text-3xl">Steam Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Skeleton className="h-[300px] flex flex-col justify-between relative rounded-lg">
            <div className="bg-blue-500 h-20 rounded flex items-center p-5 gap-2">
              <p className="h-[50px] w-[50px] bg-pink-500">
                <Skeleton />
              </p>
              <div className="flex flex-col justify-between w-full gap-2">
                <p className="w-1/3 h-2  bg-pink-500 z-10 rounded">
                  <Skeleton className="w-1/2" />
                </p>
                <p className="w-1/3 h-2  bg-pink-500 z-10 rounded">
                  <Skeleton className="w-1/2" />
                </p>
                <p className="w-1/2 h-4  bg-pink-500 z-10 rounded">
                  <Skeleton className="w-1/2" />
                </p>
              </div>
            </div>
            <CardContent className="flex flex-col justify-center items-center gap-2">
              {Array.from({ length: 8 }).map((_, idx) => (
                <p className="h-3 w-3/4 bg-pink-500 rounded-sm " key={idx}>
                  <Skeleton />
                </p>
              ))}
            </CardContent>
          </Skeleton>

          <Skeleton className="h-[400px] flex flex-col justify-between relative rounded-lg">
            <div className="bg-blue-500 h-20 rounded flex items-center p-5 gap-2">
              <p className="h-[50px] w-[50px] bg-pink-500">
                <Skeleton />
              </p>
              <div className="flex flex-col justify-between w-full gap-2">
                <p className="w-1/3 h-2  bg-pink-500 z-10 rounded">
                  <Skeleton className="w-1/2" />
                </p>
                <p className="w-1/3 h-2  bg-pink-500 z-10 rounded">
                  <Skeleton className="w-1/2" />
                </p>
                <p className="w-1/2 h-4  bg-pink-500 z-10 rounded">
                  <Skeleton className="w-1/2" />
                </p>
              </div>
            </div>
            <CardContent className="flex flex-col justify-center items-center gap-2">
              {Array.from({ length: 12 }).map((_, idx) => (
                <p className="h-3 w-3/4 bg-pink-500 rounded-sm " key={idx}>
                  <Skeleton />
                </p>
              ))}
            </CardContent>
          </Skeleton>
        </div>
      </div>
    </div>
  );
};

export default GameInfoLoadingPage;
