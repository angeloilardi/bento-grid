import Image from "next/image";

export default function Home() {
  return (
    <div className="grid px-4 py-10 gap-8 md:grid-cols-4 md:grid-rows-6 md:max-h-screen">
      {/* 01 */}
      <div className="rounded-lg bg-purple-500 p-10 justify-items-center grid md:col-start-2 md:col-span-2 md:row-span-2">
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
      <div className="bg-white rounded-lg p-4 grid gap-4 md:row-start-3 md:row-span-2">
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
      <div className="bg-yellow-500 px-4 pt-4 grid rounded-lg gap-4 md:row-start-3 md:row-span-2">
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
      <div className="bg-purple-100 rounded-lg p-4 gap-6 grid justify-items-center text-center md:col-start-4 md:row-span-4">
        <p className="text-black text-3xl font-medium">
          Schedule to social media.
        </p>
        <Image
          src="/images/illustration-schedule-posts.webp"
          alt={""}
          height={270}
          width={300}
        />
        <p className="text-black font-medium text-lg">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
      {/* 05 */}
      <div className="bg-purple-500 rounded-lg p-6 grid justify-items-center gap-10 md:col-start-3 md:col-span-2 md:row-span-2 md:grid-flow-col">
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
      <div className="bg-white rounded-lg p-6 grid gap-5 md:row-start-5 md:row-span-2">
        <p className="text-black text-4xl">{">56%"}</p>
        <p className="">faster audience growth</p>
        <Image
          src="/images/illustration-audience-growth.webp"
          alt={""}
          height={70}
          width={185}
        />
      </div>
      {/* 07 */}
      <div className="bg-yellow-100 rounded-lg grid p-8 gap-5 md:order-first md:row-start-1 md:row-end-4 md:col-span-1 md:col-start-1">
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
      <div className="bg-yellow-500 rounded-lg grid p-6 gap- md:-order-2 md:col-start-1 md:row-start-4 md:row-span-3">
        <p className="text-black text-3xl font-medium">
          Write your content using AI.
        </p>
        <Image
          src="/images/illustration-ai-content.webp"
          alt={""}
          height={220}
          width={220}
        />
      </div>
    </div>
  );
}
