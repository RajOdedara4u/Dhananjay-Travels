import Image from "next/image";
export default function TrackDivider() {
  return (
    <div className="absolute z-[1] -rotate-5 mt-3 md:-mt-30 w-[100vw] overflow-hidden opacity-15">
      <Image
      src="/tracks.png"
      alt="track"
      width={1440}
      height={80}
      className="w-full h-auto block"
    />
    </div>
  );
}
