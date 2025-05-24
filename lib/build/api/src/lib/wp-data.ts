interface WPPost {
    id: number;
    slug: string;
    status: string;
    date: string;
    type: string;
    link: string;
    title: { rendered: string };
    excerpt: {rendered: string;}
    content: { rendered: string };
    categories: number[];
    tags: number[];
    classList: string[];
    author: number;
}

interface PostIdConfig {
    response: {
        id: number;
        slug: string;
        title: string;
        content_rendered: string;
    }
}

interface PostSlugConfig{
    response: {
        slug: string;
        title: string;
        content: string;
    }
}

export default class WPData { 
    private wpurl = {
        base: '/wp-json/wp/v2',
        forum: '',
        post: '/posts',
        pages: '/pages',
        menus: '',
        users: '',
        comments: '/comments?post=',
        revisions: '/revisions', // @url /post/${id}/revisions
        products: '/product',
        fourms: '/forums'
    }

    constructor() {

    }

    // GET Methods ONLY
    // This class is meant to
    // pull data from the WordPress API of your site
    // the WPCreate library is where you setup your
    // custom SET methods
    
    // Methods that pull entire post data

    // TODO: Need to get comment and author data which is pulled from another source in the WP API
    async getPostById(id: number, url: string): Promise<PostIdConfig["response"]> {
        const response = await fetch(url + id);
        const postData = await response.json()  as WPPost;
        const post = postData
        return {
            id: post.id,
            slug: post.slug,
            title: post.title.rendered,
            content_rendered: post.content.rendered
        }
    }

    async getPostBySlug(slug: string): Promise<PostSlugConfig["response"]> {
        const response = await fetch(slug);
        const postData = await response.json()  as WPPost;
        const post = postData;
        return {
            slug: post.slug,
            title: post.title.rendered,
            content: post.content.rendered
        }
    }

    // PAGES
    async getPageBySlug(slug: string) {
        const response = await fetch(slug);
        const pageData = await response.json();
        const page = pageData;
        
    }

    async getPageById(id: number, url: string) {
        const response = await fetch(url + id);
        const pageData = await response.json();
        const page = pageData;
    }
}