import { useContext, useEffect, useState } from "react";
import BlogContext from "../../store/blogs-context";
import BlogList from "./BlogList";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const BlogsFilter = () => {
    const blogCtx = useContext(BlogContext);

    const [selectedTag, setSelectedTag] = useState("");
    const [filterTitle, setFilterTitle] = useState("");
    const blogList = blogCtx.blogs;
    let tagFilteredBlogs = [];
    let titleFilteredBlogs = [];

    if (blogList.length > 0) {
        tagFilteredBlogs = blogList.filter((blog) => {
            if (selectedTag.length > 0) {
                return selectedTag.includes(blog.tag);
            } else {
                return !selectedTag.includes(blog.tag);
            }
        });
    }

    if (tagFilteredBlogs.length > 0) {
        titleFilteredBlogs = tagFilteredBlogs.filter((blog) => {
            if (filterTitle.length > 0) {
                return (
                    blog.title
                        .toLowerCase()
                        .indexOf(filterTitle.toLowerCase()) !== -1
                );
            } else {
                return true;
            }
        });
    }

    useEffect(() => {
        blogCtx.getBlogs();
    }, []);

    function inputChangeHandler(event) {
        setFilterTitle(event.target.value);
    }
    function filterTagChangeHandler(event) {
        console.log(event);
        const selectedValue = event.target.value;
        setSelectedTag(selectedValue);
    }

    return (
        <div>
            <TextField
                sx={{ width: "70%", m: "1rem" }}
                id="search"
                label="Search"
                variant="outlined"
                value={filterTitle}
                onChange={inputChangeHandler}
            />

            <FormControl sx={{ width: "25%", m: "1rem" }}>
                <InputLabel id="demo-simple-select-label">
                    Filter by types
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedTag}
                    label="Filter by types"
                    onChange={filterTagChangeHandler}
                >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="tech">Tech</MenuItem>
                    <MenuItem value="entertainment">Entertainment</MenuItem>
                    <MenuItem value="community">Community</MenuItem>
                </Select>
            </FormControl>

            <BlogList
                blogList={titleFilteredBlogs}
                isListLoaded={blogCtx.isLoaded}
            />
        </div>
    );
};

export default BlogsFilter;
