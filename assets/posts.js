/*
 * << HOW TO ADD NEWS POSTS >>
 * 
 * IMPORTANT: Read all of the instructions before making ANY changes!!
 * 
 * The const below contains a list of javascript objects. Each object (a group of "key" : "value" pairs, 
 * with a start and end delinated by the {curly braces} above and below) represents a blog post,
 * and contains the following properties:
 *
 * REQUIRED:
 * "title" - The title of the blog post.
 * "date" - The date the blog post was posted (so today if you are adding one).
 * "body" - The actual text content of the blog post, shown once the post is clicked on.
 * 
 * OPTIONAL: (if you do not want to include this, use a null value)
 * "link" - Many of these blog posts just link to articles on other sites, include the url here as a string.
 * "img" - Place the image file in the assets folder. Then, put the relative path here, eg if
 * the file is named "image.png", then put "assets/image.png".
 *
 * The blog posts are displayed in the order they are listed in the const. You can re-order them
 * if you'd like.
 * 
 * Copy and past the below template into the posts list to get started if you are adding a 
 * new blog post, then fill out its properties. Please add to the bottom of the list, as the
 * list is reversed such that the most recent (closest to the bottom) are shown first on the page.
 * 
 * TEMPLATE:

  {
    "title": "TITLE_HERE",
    "date": "00/00/00",
    "body": "BODY_HERE",
    "link": "about:blank",
    "img": "assets/demo.jpg"
  },

 */

const posts = [
  {
    "title": "Sample Article #1",
    "date": "5/30/22",
    "body": "This article is not about anything. It should be replaced in the posts.js file with an actual article, as it is simply a placeholder at the moment.",
    "link": "about:blank",
    "img": null,
  },
  {
    "title": "Sample Article #2",
    "date": "9/20/21",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "link": null,
    "img": "assets/demo.jpg"
  },
  {
    "title": "Sample Article #3",
    "date": "6/3/21",
    "body": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "link": "google.com",
    "img": null
  },
];