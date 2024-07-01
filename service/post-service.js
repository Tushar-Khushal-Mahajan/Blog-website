
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
        console.log("inside if");
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
        this.userID = userId;
    }
}

/*
*   this method is for Register the user
*/
function RegisterUser(userId, email, username, password) {
    console.log(blogData.users);
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
function AddBlog(userID, blogId, category, title, content, img, date) {

    //add blog to blogdata
    let blog = new Blog(userID, blogId, category, title, content, img, date);
    blogData.blogs.push(blog);

    localStorage.setItem("blogs", JSON.stringify(blogData.blogs))
}

/**
 * This method is used for add a comments on the blog post with user-id, and post-id
*/
function AddComment(blogId, text, date, userId) {
    console.log(blogId, text, date, userId);
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

console.log(blogData);

// console.log(getTotalCommentOnBlog());
// console.log("blog data = ", blogData);

// console.log(getTotalCommentOnBlog(1).length);

// console.log("getAllBlogs : ", getAllBlogs());

//*******-WELCOME DATA-*******

// //create users
// RegisterUser(1, "tushar@gmail.com", "tushar", "tushar123");
// RegisterUser(2, "jayesh@gmail.com", "jayesh", "jayesh123");

// // add blogs
// AddBlog(1, 1, "prog", "what is java", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita? Ut natus neque tenetur et est fugit dolore eligendi laboriosam minus, voluptates ad dolorum doloremque, maxime, corrupti similique eum distinctio.", "../images/blog.jpg", new Date().getDate());
// AddBlog(1, 2, "prog", "what is python", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita? Ut natus neque tenetur et est fugit dolore eligendi laboriosam minus, voluptates ad dolorum doloremque, maxime, corrupti similique eum distinctio.", "../images/blog.jpg", "../images/blog.jpg", new Date().getDate());
// AddBlog(2, 3, "prog", "what is C++", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita? Ut natus neque tenetur et est fugit dolore eligendi laboriosam minus, voluptates ad dolorum doloremque, maxime, corrupti similique eum distinctio.", "../images/blog.jpg", "../images/blog.jpg", new Date().getDate());

// let date = new Date();
// AddComment(1, "Hello Guys!..", date.getDate() + "/" + date.getMonth(), 1);
// AddComment(1, "nice info!..", date.getDate() + "/" + date.getMonth(), 2);
// AddComment(3, "very good!..", date.getDate() + "/" + date.getMonth(), 1);
