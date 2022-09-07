import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import classes from "./BlogModal.module.css";
const BlogModal = (props) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "65%",
        height: "95%",
        bgcolor: "#ddf7ff",
        boxShadow: 24,
        borderRadius: "0.25rem",
        overflow: "auto",
        p: 4,
    };
    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    variant="h2"
                    component="h2"
                    align="center"
                >
                    {props.blog.title}
                </Typography>
                <div className={classes.modal}>
                    <img
                        className={classes.blogImg}
                        src={props.blog.image}
                        alt={props.blog.image}
                    />
                </div>
                <Typography
                    sx={{
                        p: "1rem",
                        pl: "2rem",
                        pr: "2rem",
                        whiteSpace: "pre-wrap",
                    }}
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    align="justify"
                >
                    {props.blog.body}
                </Typography>
                <Chip
                    label={props.blog.tag}
                    color="secondary"
                    variant="outlined"
                    size="small"
                />
                <br />
                <Button
                    onClick={props.onClose}
                    size="medium"
                    color="primary"
                    variant="contained"
                    sx={{ mt: "1rem", justifySelf: "flex-end" }}
                >
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default BlogModal;
