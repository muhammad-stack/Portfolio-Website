import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Iprojects } from "./types";
import { Pages } from "./type2";

export async function getProjects(): Promise<Iprojects[]> {
  return client.fetch(groq`*[_type == 'Project' ]{
    _id,
     _createdAt,
     name,
     "slug":slug.current,
     "image":image.asset->url,
       url,
      content}`);
}

export async function getProject(slug: string): Promise<Iprojects> {
  return client.fetch(
    groq`*[_type == "Project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}

export async function Pages(): Promise<Pages[]> {
  return client.fetch(
    groq`*[_type == "Page"]{
    _id,
    _createdAt,
    title,
    'slug' : slug.current,
    
    }`
  );
}
export async function Page(slug: string): Promise<Pages> {
  return client.fetch(
    groq`*[_type == "Page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      'slug' : slug.current,
      content
    }`,
    { slug }
  );
}
