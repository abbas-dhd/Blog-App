import { createContext } from "react";

const BlogContext = createContext({
    blogs: [],
    isLoaded: false,
    getBlogs: () => {},
    addBlog: (blogData) => {},
});

export default BlogContext;
