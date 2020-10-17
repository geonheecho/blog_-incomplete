const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// view engine setup

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public"))); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.get("/",function(req, res) {
    res.render("index");
});
app.get("/blog-details",function(req, res) {
    res.render("blog-details");
});
app.get("/elements",function(req, res) {
    res.render("elements");
});
app.get("/archive",function(req, res) {
    res.render("archive");
});
app.get("/blog_edit_db",function(req, res) {
    res.render("blog_edit_db");
});

app.get("/login",function(req, res) {
    res.render("login");
});
app.get("/sigh_up",function(req, res) {
    res.render("sigh_up");
});
app.get("/admin_page",function(req, res) {
    res.render("admin_page");
});



//routes

var category = require("./routes/category");
var contact = require("./routes/contact");
var detail = require("./routes/detail");
var insert = require("./routes/insert");
var content = require("./routes/content");
var blog_detail = require("./routes/blog_detail")
var blog_edit = require("./routes/blog_edit")
var archiveRouter = require("./routes/archive");
var sign_up = require("./routes/sign_up");
var page_count = require("./routes/page_count");
var comment_insert = require("./routes/comment_insert");
var comment = require("./routes/comment");
var update = require("./routes/update");
var research = require("./routes/research");
var heart = require("./routes/heart");
var top_list = require("./routes/top_list");
var logout = require("./routes/logout");
var admin_update = require("./routes/admin_update");
var admin_delete = require("./routes/admin_delete");
var admin = require("./routes/admin")


app.use("/admin", admin);
app.use("/detail",detail)
app.use("/category", category);
app.use("/insert", insert);
app.use("/contact", contact);
app.use("/blog", blog_detail);
app.use("/content",content)
app.use("/blog_edit",blog_edit)
app.use("/archive", archiveRouter);
app.use("/sign_up", sign_up);
app.use("/comment_insert", comment_insert);
app.use("/page_count", page_count);
app.use("/comment", comment);
app.use("/update", update);
app.use("/research", research);
app.use("/heart", heart);
app.use("/top_list", top_list);
app.use("/logout", logout);


app.use("/admin_update", admin_update);
app.use("/admin_delete", admin_delete);

app.listen("4000", () => {
    console.log("server start 4000");
});