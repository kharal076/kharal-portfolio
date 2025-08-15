import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center sm:text-left">
          Explore my projects, skills, and experiences. Feel free to reach out!
        </p>
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
      </main>
      <footer className="text-gray-500 text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
