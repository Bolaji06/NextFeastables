"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SnowFlakes({ style }: { style: any }){

  return (
    <>
      <div className={`absolute -top-[10px] bg-white/50 rounded-full animate-snow`} style={style}/>
    </>
  )
}