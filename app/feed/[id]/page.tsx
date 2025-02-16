import { cache } from "react";
import prisma  from "@/lib/db"

const getPost = cache(async (id:string) => {
    const post = await prisma.post.findUnique({
        where: { id } ,
      });
    
      return post;

})

export default async function Page({params : {id}}){
    const post = getPost(id)
    return (
        <div>
                {post}
        </div>
    )
}