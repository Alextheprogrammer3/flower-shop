const express = require("express");
const router = express.Router();

// Home Route
router.get("/", (req, res) => {
  res.render("index");
});

// Bouquet Route
router.get("/bouquet", (req, res) => {
  res.render("bouquet");
});

// Blog Route - Added to route to the blog.pug page
router.get("/blog", (req, res) => {
  // Assuming you have blog data to pass, replace with actual data
  const posts = [
    { title: "Blog Post 1", excerpt: "This is a short excerpt of the first blog post.", slug: "blog-post-1" },
    { title: "Blog Post 2", excerpt: "This is a short excerpt of the second blog post.", slug: "blog-post-2" },
    { title: "Blog Post 3", excerpt: "This is a short excerpt of the third blog post.", slug: "blog-post-3" }
  ];

  // Render blog.pug and pass blog posts to it
  res.render("blog", { posts });
});

// Add Flower Route
router.post("/add-flower", (req, res) => {
  const { flower, quantity } = req.body;
  // Handle flower addition logic here
  res.send("Flower added");
});

// Reset Route
router.post("/reset", (req, res) => {
  // Handle reset logic here
  res.send("Reset successful");
});

module.exports = router;
