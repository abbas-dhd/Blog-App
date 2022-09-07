import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

import BlogModal from "./BlogModal";

const BlogItem = ({ blog }) => {
    const [openModel, setOpenModal] = useState(false);

    const handleModalOpen = () => {
        setOpenModal(true);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Card
                sx={{
                    maxWidth: 500,
                    height: "100%",
                    p: 0,
                    backgroundColor: "azure",
                }}
            >
                <CardContent sx={{ height: "100%" }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={blog.image}
                        alt={blog.title}
                    />
                    <Typography gutterBottom variant="h5" component="h5">
                        {blog.title}
                    </Typography>
                    <Chip
                        label={blog.tag}
                        color="secondary"
                        variant="outlined"
                        size="small"
                    />
                    <CardActions
                        sx={{
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            onClick={handleModalOpen}
                            size="medium"
                            color="primary"
                            variant="contained"
                        >
                            Read
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>

            <BlogModal
                blog={blog}
                open={openModel}
                onClose={handleModalClose}
            />
        </>
    );
};

export default BlogItem;
