import Image from "next/image";
import { getProject } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

type Props = {
  params: { projects: string};
};

export default async function Project({ params }: Props) {
  const slug = params.projects;

  const project = await getProject(slug);

  return (
    <div >
      <header className="flex justify-between items-center">
        <h1 className=" mt-2 font-extrabold text-5xl drop-shadow bg-gradient-to-r from-orange-400 to bg-purple-600 via-red-500 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <Link
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:text-pink-100 hover:bg-pink-500 transition-all"
        >
          View Project
        </Link>
      </header>

      {/* content goes here */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      {/* Image goes here */}
      <Image src={project.image} alt="project.name" width={720  } height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl">

      </Image>
    </div>
  );
}
