import BlogItem from "./BlogItem";
import Grid from "@mui/material/Grid";

const BlogList = (props) => {
    const blogList = props.blogList;
    let blogListContent = null;

    if (blogList.length > 0) {
        blogListContent = blogList.map((blog) => {
            return (
                <Grid item xs={4}>
                    <BlogItem key={blog.id} blog={blog} />
                </Grid>
            );
        });
    } else {
        return <h3 style={{ textAlign: "center" }}>No Blogs Found</h3>;
    }
    return (
        <Grid container spacing={2}>
            {blogListContent}
        </Grid>
    );
};

export default BlogList;
