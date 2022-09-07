import { useContext, useState } from "react";
import classes from "./BlogCreator.module.css";
import BlogContext from "../../store/blogs-context";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import FileBase from "react-file-base64";

const BlogCreator = (props) => {
    const blogCtx = useContext(BlogContext);
    const [title, setTitle] = useState("");
    const [titleTouched, setTitleTouched] = useState(false);

    const [body, setBody] = useState("");
    const [bodyTouched, setBodyTouched] = useState(false);

    const [tag, setTag] = useState("");
    const [image, setImage] = useState("");

    const titleIsValid = title.trim() !== "";
    const titleIsInvalid = !titleIsValid && titleTouched;

    const bodyIsValid = title.trim() !== "";
    const bodyIsInvalid = !bodyIsValid && bodyTouched;

    const tagIsValid = tag.trim() !== "";
    const imageIsValid = image !== null && image.trim() !== "";

    let isFormValid = titleIsValid && bodyIsValid && tagIsValid && imageIsValid;
    let postMessage = "";

    async function createPostHandler(e) {
        e.preventDefault();

        if (!isFormValid) return;
        const newBlog = { title, body, tag, image };
        const response = await blogCtx.addBlog(newBlog);

        if (response.status === 200) {
            console.log("blog created sucessfully");
            resetForm();
            postMessage = (
                <p style={{ color: "lightgreen" }}>Blog Created Successfully</p>
            );
        } else {
            console.log("blog not created");
            postMessage = (
                <p style={{ color: "lightcoral" }}>
                    Something went wrong, blog could not be created.
                </p>
            );
        }
    }

    function resetForm() {
        setTitle("");
        setBody("");
        setTag("");
        setImage(null);
        setTitleTouched(false);
        setBodyTouched(false);
        props.onCreate();
    }

    function titleChangeHandler(e) {
        setTitle(e.target.value);
    }

    function titleBlurHandler(e) {
        setTitleTouched(true);
    }

    function bodyChangeHandler(e) {
        setBody(e.target.value);
    }

    function bodyBlurHandler(e) {
        setBodyTouched(true);
    }

    function tagChangeHandler(e) {
        setTag(e.target.value);
        console.log(tag);
    }
    function imageChangeHandler({ base64 }) {
        setImage(base64);
    }

    // const titleClass = titleIsInvalid ? classes.invalid : "";
    // const bodyClass = bodyIsInvalid ? classes.invalid : "";

    return (
        <form autoComplete="off" onSubmit={createPostHandler}>
            <TextField
                sx={{ width: "90%", m: "1rem" }}
                id="title"
                label="Title"
                variant="outlined"
                value={title}
                onChange={titleChangeHandler}
                onBlur={titleBlurHandler}
                error={titleIsInvalid}
                helperText={titleIsInvalid ? "Incorrect entry." : ""}
            />
            <br />
            <TextField
                sx={{ width: "90%", m: "1rem" }}
                id="body"
                label="Content"
                variant="outlined"
                value={body}
                onChange={bodyChangeHandler}
                onBlur={bodyBlurHandler}
                error={bodyIsInvalid}
                multiline
                rows={10}
                cols={50}
                helperText={bodyIsInvalid ? "Incorrect entry." : ""}
            />
            <br />
            <FormLabel
                id="tag-radio-buttons-group-label"
                sx={{ width: "90%", m: "1rem" }}
            >
                Tag
            </FormLabel>
            <RadioGroup
                aria-labelledby="tag-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={tagChangeHandler}
                sx={{ width: "90%", m: "1rem" }}
            >
                <FormControlLabel
                    value="tech"
                    control={<Radio />}
                    label="Tech"
                />
                <FormControlLabel
                    value="entertainment"
                    control={<Radio />}
                    label="Entertainment"
                />
                <FormControlLabel
                    value="community"
                    control={<Radio />}
                    label="Community"
                />
            </RadioGroup>

            <div className={classes.fileInput}>
                <FileBase
                    id="fileInput"
                    value={image}
                    type="file"
                    multiple={false}
                    onDone={imageChangeHandler}
                />
            </div>
            <Button
                sx={{ m: "1rem" }}
                type="submit"
                size="medium"
                color="primary"
                variant="contained"
                disabled={!isFormValid}
            >
                create post
            </Button>
            {postMessage}
        </form>
    );
};

export default BlogCreator;
