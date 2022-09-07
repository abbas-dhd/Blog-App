export async function createBlog(blogData) {
    let response = await fetch("https://abc-qsbvww.firebaseio.com/blogs.json", {
        method: "POST",
        body: JSON.stringify({
            title: blogData.title,
            body: blogData.body,
            tag: blogData.tag,
            image: blogData.image,
        }),
    })
        .then((response) => response)
        .catch((error) => {
            return { error: error, status: "CANNOT CONNECT" };
        });

    return response;
}

export async function getBlogs() {
    let response = await fetch("https://abc-qsbvww.firebaseio.com/blogs.json")
        .then((response) => response.json())
        .catch((error) => {
            return { error: error, status: "CANNOT FETCH BLOG" };
        });

    return blogListParser(response);
}

function blogListParser(blogList) {
    let parsedBlogList = [];
    for (let key in blogList) {
        let blogItem = {
            id: key,
            title: blogList[key].title,
            body: blogList[key].body,
            tag: blogList[key].tag,
            image: blogList[key].image,
        };

        parsedBlogList.push(blogItem);
    }

    return parsedBlogList;
}
