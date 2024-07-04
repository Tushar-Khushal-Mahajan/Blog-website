
// Define initial data structure
let blogData = {
    users: [],
    blogs: [],
    comments: []
};

/**
 * This is the initial method that is used for load a data from local-storage to the blogData global array
*/
function loadDataFromStorage() {

    if (localStorage.getItem("blogs") != null) {

        blogData.blogs = JSON.parse(localStorage.getItem("blogs"));
    }
    if (localStorage.getItem("comments") != null) {
        blogData.comments = JSON.parse(localStorage.getItem("comments"));
    }
    if (localStorage.getItem("user") != null) {
        blogData.users = JSON.parse(localStorage.getItem("user"));
    }
}

localStorage.setItem("data_loaded", false);
if (localStorage.getItem("data_loaded") == "false") {
    loadDataFromStorage();
    localStorage.setItem("data_loaded", true);
}


// User object structure
class User {
    constructor(userId, email, username, password) {
        this.userId = userId;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

// Blog object structure
class Blog {
    constructor(userId, blogId, category, title, content, img, date) {
        this.userId = userId;
        this.blogId = blogId;
        this.category = category;
        this.title = title;
        this.content = content;
        this.img = img;
        this.date = date || new Date(); // Default to current date if not provided
    }
}

// Comment object structure
class Comment {
    constructor(blogId, text, date, userId) {
        this.blogId = blogId;
        this.text = text;
        this.date = date;
        this.userId = userId;
    }
}

/*
*   this method is for Register the user
*/
function RegisterUser(userId, email, username, password) {

    blogData.users.push(new User(userId, email, username, password));
    localStorage.setItem("user", JSON.stringify(blogData.users));
    localStorage.setItem("loginUser", userId);
}

function getUserById(userId) {
    for (let User of blogData.users) {
        if (User.userId == userId) {
            return User;
        }
    }
    return null;
}

function findUserByEmailAndPassword(email, password) {
    for (let user of blogData.users) {
        if (user.email == email && user.password == password) {
            localStorage.setItem("loginUser", user.userId);
            return true;
        }
    }
    return false;
}

/**
 * this method is use for adding a blog to the local-storage
*/
function AddBlog(category, title, content, img) {
    let bId = Number(+blogData.blogs.length + 1);
    //add blog to blogdata
    let blog = new Blog(localStorage.getItem("loginUser"), bId, category, title, content, img, new Date());
    blogData.blogs.push(blog);

    localStorage.setItem("blogs", JSON.stringify(blogData.blogs));
}

/**
 * This method is used for add a comments on the blog post with user-id, and post-id
*/
function AddComment(blogId, text, date, userId) {

    blogData.comments.push(new Comment(blogId, text, date, userId));

    localStorage.setItem("comments", JSON.stringify(blogData.comments));
}

/**
 * This method returns the all the comments on a perticular blog-post 
 * from blogId
*/
function getTotalCommentOnBlog(blogId) {
    let allComments = blogData.comments.filter(e => {
        return (e.blogId == blogId) ? e : false;
    });

    return allComments;
}

function getBlogByBlogId(blogId) {

    for (let blog of blogData.blogs) {
        if (blog.blogId == blogId) {
            let blogObj = {
                BlogId: blog.blogId,
                Title: blog.title,
                Content: blog.content,
                Category: blog.category,
                Date: blog.date,
                Img: blog.img,
                Comments: getTotalCommentOnBlog(blog.blogId),
                User: getUserById(blog.userId)
            }

            return blogObj;
        }
    }

    return null;

}

function getAllBlogs() {
    let blogList = [];

    for (let blog of blogData.blogs) {
        blogObj = {
            BlogId: blog.blogId,
            Title: blog.title,
            Content: blog.content,
            Category: blog.category,
            Date: blog.date,
            Img: blog.img,
            Comments: getTotalCommentOnBlog(blog.blogId),
            User: getUserById(blog.userId)
        }

        blogList.push(blogObj);
    }

    return blogList;
}


function getTrendingBlogs() {
    let TrendingBlogs = [];

    let allBlogs = getAllBlogs();

    for (let blog of allBlogs) {

        if (Number(blog.Comments.length) >= 4) {
            blogObj = {
                BlogId: blog.BlogId,
                Title: blog.Title,
                Content: blog.content,
                Category: blog.Content,
                Date: blog.Date,
                Img: blog.Img,
                Comments: blog.Comments,
                User: blog.User
            }

            TrendingBlogs.push(blogObj);
        }
    }
    return TrendingBlogs;
}

// console.log(blogData);
// console.log("trending blogs = ", getTrendingBlogs());
// console.log(getTotalCommentOnBlog());
// console.log("blog data = ", blogData);

// console.log(getTotalCommentOnBlog(1).length);

// console.log("getAllBlogs : ", getAllBlogs());
