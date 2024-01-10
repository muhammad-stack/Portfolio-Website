import { PortableText } from "@portabletext/react";
import { Page } from "../../../../sanity/sanity-utils";

type Props = {
  params: { slug: string };
};
const Paage = async ({ params }: Props) => {
  const project = await Page(params.slug);
  return (
    <div>
      <h1 className=" mt-2 font-extrabold text-5xl drop-shadow bg-gradient-to-r from-orange-400 to bg-purple-600 via-red-500 bg-clip-text text-transparent">
        {project.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
      <PortableText  value={project.content}/>

      </div>
    </div>
  );
};

export default Paage;
