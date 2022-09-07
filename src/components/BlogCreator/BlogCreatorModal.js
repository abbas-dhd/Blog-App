import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import BlogCreator from "./BlogCreator";
const BlogCreatorModal = (props) => {
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
                <BlogCreator onCreate={props.onClose} />
            </Box>
        </Modal>
    );
};

export default BlogCreatorModal;
