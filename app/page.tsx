import Image from "next/image";
import aicontent from "/public/images/illustration-ai-content.webp"

export default function Home() {
  return (
    <div className="grid px-4 py-10 gap-8 xl:grid-cols-4 xl:grid-rows-10 xl:gap-8  mx-auto xl:max-w-6xl md:grid-cols-8  md:h-fit md:gap-4 overflow-hidden  md:grid-rows-[35%_45%_20%] [@media(min-height:1200px)]:max-h-screen">
      {/* 01 */}
      <div className="rounded-lg bg-purple-500 p-10 justify-items-center grid xl:col-start-2 xl:col-span-2 xl:row-span-4 xl:row-start-1 md:col-span-4 md:row-span-1">
        <p className="text-white text-5xl font-medium text-center">
          Social Media <span className="text-yellow-500">10x</span>{" "}
          <span className="italic">Faster</span> with AI
        </p>
        <Image
          src="/images/illustration-five-stars.webp"
          width={200}
          height={40}
          alt={""}
        />
        <p className="text-white text-lg">Over 4,000 5-star reviews</p>
      </div>
      {/* 02 */}
      <div className="bg-white rounded-lg p-4 grid gap-4 xl:row-start-5 xl:row-span-3 xl:col-start-2 xl:col-span-1 md:row-start-1 md:col-span-2 md:col-start-5 ">
        <Image
          src="/images/illustration-multiple-platforms.webp"
          alt={""}
          height={150}
          width={300}
        />
        <p className="text-black text-3xl font-medium">
          Manage multiple accounts and platforms.
        </p>
      </div>
      {/* 03 */}
      <div className="bg-yellow-500 px-4 pt-4 grid rounded-lg gap-4 xl:row-start-5 xl:row-span-3 overflow-hidden xl:col-start-3 xl:col-span-1 md:col-start-5 md:col-span-4 md:row-start-3">
        <p className="text-black text-3xl font-medium">
          Maintain a consistent posting schedule.
        </p>
        <Image
          src="/images/illustration-consistent-schedule.webp"
          alt={""}
          height={300}
          width={200}
        />
      </div>
      {/* 04 */}
      <div className="bg-purple-100 rounded-lg p-4 xl:gap-3 gap-6 grid justify-items-center text-center xl:col-start-4 xl:row-span-7 xl:col-span-1 xl:row-start-1 md:col-start-4 md:col-span-3 xl:text-left">
        <p className="text-black text-3xl font-medium">
          Schedule to social media.
        </p>
        <Image
          src="/images/illustration-schedule-posts.webp"
          alt={""}
          height={270}
          width={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="md-w-40%"
        />
        <p className="text-black font-medium text-lg">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
      {/* 05 */}
      <div className="bg-purple-500 rounded-lg p-6 grid md:grid-cols-2 justify-items-center gap-10 xl:col-start-3 xl:col-span-2 xl:row-span-3 md:grid-flow-col xl:row-start-8 md:col-span-4 md:col-start-1">
        <Image
          src="/images/illustration-grow-followers.webp"
          alt={""}
          height={200}
          width={230}
        />
        <p className="text-white text-3xl font-medium">
          Grow followers with non-stop content.
        </p>
      </div>
      {/* 06 */}
      <div className="bg-white rounded-lg p-6 flex flex-col gap-5 xl:row-start-8 xl:row-span-3 xl:col-start-2 xl:col-span-1 md:col-span-2 md:col-start-7 md:row-start-2">
        <p className="text-black text-4xl font-medium">{">56%"}</p>
        <p className="text-black">faster audience growth</p>
        <Image
          src="/images/illustration-audience-growth.webp"
          alt={""}
          height={70}
          width={185}
        />
      </div>
      {/* 07 */}
      <div className="bg-yellow-100 rounded-lg grid p-8 gap-5 xl:row-start-1 xl:row-span-5 xl:col-span-1 xl:col-start-1 md:col-start-7 md:row-start-1 md:col-span-2">
        <p className="text-black text-3xl font-medium">
          Create and schedule content{" "}
          <span className="italic text-purple-500">quicker.</span>
        </p>
        <Image
          src="/images/illustration-create-post.webp"
          alt={""}
          height={85}
          width={195}
        />
      </div>
      {/* 08 */}
      <div className="bg-yellow-500 rounded-lg flex flex-col p-6 xl:col-start-1 xl:col-span-1 xl:row-start-6 xl:row-span-5 gap-6 overflow-hidden  md:col-start-1 md:col-span-3 md:row-start-2">
        <p className="text-black text-3xl font-medium">
          Write your content using AI.
        </p>
        <Image src={aicontent} alt={""} />
      </div>
    </div>
  );
}
