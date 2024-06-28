import { defineCollection, z } from "astro:content";

const product = defineCollection({
    type: "content",
    schema: z.object({
        srcImage:z.string(),
        name:z.string(),
        description:z.string(),
        tags:z.string().array(),
        price:z.string(),
        altImage:z.string()
    })
})

export const collections = {product}