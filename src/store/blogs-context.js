import { createContext } from "react";

const BlogContext = createContext({
    blogs: [],
    getBlogs: () => {},
    addBlog: (blogData) => {},
});

export default BlogContext;
