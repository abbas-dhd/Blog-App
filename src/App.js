import "./App.css";
import BlogContextProvider from "./store/BlogsContextProvider";
import BlogsFilter from "./components/Blogs/BlogsFilter";
import BlogCreatorModal from "./components/BlogCreator/BlogCreatorModal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";

function App() {
    const [openCreateBlog, setPpenCreateBlog] = useState(false);

    const handleModalOpen = () => {
        setPpenCreateBlog(true);
    };
    const handleModalClose = () => {
        setPpenCreateBlog(false);
    };

    return (
        <BlogContextProvider>
            <div className="App">
                <Typography
                    gutterBottom
                    variant="h2"
                    component="h2"
                    align="center"
                    fontWeight="900"
                >
                    Welcome to my Blog!
                </Typography>
                <Button
                    onClick={handleModalOpen}
                    variant="contained"
                    sx={{ m: "1rem" }}
                >
                    + Create Blog
                </Button>
                <BlogCreatorModal
                    open={openCreateBlog}
                    onClose={handleModalClose}
                />
                {/* <BlogCreator /> */}
                <BlogsFilter />
            </div>
        </BlogContextProvider>
    );
}

export default App;
