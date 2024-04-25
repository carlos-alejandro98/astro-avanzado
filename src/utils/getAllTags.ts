import { getCollection } from 'astro:content';

export async function getAllTags() {
    const posts = await getCollection('blog');
    return Array.from(new Set(posts.flatMap((post) => post.data.tags).sort()));
}