import Image from "next/image";
import { getProjects } from "../../../sanity/sanity-utils";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Components from "./project/[projects]/components";

export default async function Home() {
  const data = await getProjects();
  return (
    <div>
      <h1 className="text-7xl font-extrabold text-pretty text-teal-700  ">
        {" "}
        Hello I'm{" "}
        <span className="bg-gradient-to-r from-orange-400 to bg-purple-600 via-red-500 bg-clip-text text-transparent">
         Syed Muhammad Ali Kazmi </span>{" "}
      </h1>
      <p className="mt-3 text-3xl text-gray-500">
        {" "}
        Hello Everyone! check out My projects{" "}
      </p>
      <h2 className="mt-20 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((datas) => (
          <Link
            href={`project/${datas.slug}`}
            key={datas._id}
            className="border-2 border-red-400 rounded-lg p-1"
          >
            <div className="container max-w-md mx-auto ">
              {datas.image && (
                <Image
                  src={datas.image}
                  alt="datas.name"
                  width={500}
                  height={200}
                  className="object-cover rounded-lg border border-red-400 hover:scale-105 hover:bg-blue-500 transition"
                />
              )}
            </div>
            <div
              className="mt-2 font-bold bg-gradient-to-r from-orange-400 to
                bg-purple-600 via-red-500 bg-clip-text text-transparent"
            >
              {datas.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
