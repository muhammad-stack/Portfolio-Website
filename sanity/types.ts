import { PortableTextBlock } from "sanity"

export  type Iprojects = {
    _id : string,
    _createdAt : Date,
    name : string,
    slug:string,
    image : string,
    content :PortableTextBlock[],
    url : string,
}