import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import sanitizeHTML from 'sanitize-html'
import MarkdownIt from 'markdown-it'

const parser = new MarkdownIt()

export async function GET(context: APIContext){
    const posts = await getCollection('blog')
    return rss({
        title: 'My Astro Site',
        description: 'A site built with Astro',
        site: context.site?.toString() || "https://junaidburke.com",

        items: posts.map((post) => ({
            title: post.data.title,
            // description: post.data.description,
            pubDate: post.data.date,
            link: `/blog/${post.slug}`,
            content: sanitizeHTML(parser.render(post.body)), 
        })),
    })
}