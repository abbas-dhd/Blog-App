import { useReducer } from "react";
import { getBlogs, createBlog } from "../api/blog-api";
import BlogContext from "./blogs-context";

const defaultState = { blog: [] };

const blogsReducer = (state, action) => {
    if (action.type === "FETCH") {
        return action.data;
    }
    if (action.type === "CREATE") {
        console.log(action.data);
        return [...state, action.data];
    }

    return defaultState;
};

const BlogContextProvider = (props) => {
    const [blogList, dispatchBlogAction] = useReducer(
        blogsReducer,
        defaultState
    );

    const fetchBlog = async () => {
        let blogs = await getBlogs();
        dispatchBlogAction({ type: "FETCH", data: blogs });
    };

    const createNewBlog = async (blogData) => {
        let response = await createBlog(blogData);
        let responseBody = await response.json();
        const newBlog = { ...blogData, id: responseBody.name };
        if (response.status === 200)
            dispatchBlogAction({ type: "CREATE", data: newBlog });

        return response;
    };

    const blogCtx = {
        blogs: blogList,
        getBlogs: fetchBlog,
        addBlog: createNewBlog,
    };

    return (
        <BlogContext.Provider value={blogCtx}>
            {props.children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;
