
let content = [
  {
    main_img: "blog_images/blogimg1.png",
    date: "17.11.2023",
    title: "Creating Engaging Social Media Content",
    content:
      "Techniques to create content that captures attention and drives engagement.",
    author: "- By Vijay Krishna",
  },
  {
    main_img: "blog_images/blogimg2.png",
    date: "20.11.2023",
    title: "The Power of Storytelling in Marketing",
    content:
      "How storytelling can enhance brand identity and connect with audiences.",
    author: "- By Ananya Sharma",
  },
  {
    main_img: "blog_images/blogimg3.png",
    date: "25.11.2023",
    title: "SEO Best Practices for 2024",
    content: "Key strategies to improve your website's search engine ranking.",
    author: "- By Rahul Mehta",
  },
  {
    main_img: "blog_images/blogimg4.png",
    date: "30.11.2023",
    title: "Graphic Design Trends to Watch",
    content: "Exploring the latest trends in graphic design and branding.",
    author: "- By Priya Kapoor",
  },
  {
    main_img: "blog_images/blogimg5.png",
    date: "05.12.2023",
    title: "Boosting Productivity with AI Tools",
    content: "How AI-powered tools can optimize workflow and efficiency.",
    author: "By Sandeep Reddy",
  },
  {
    main_img: "blog_images/blogimg6.png",
    date: "10.12.2023",
    title: "The Future of Influencer Marketing",
    content: "Trends and insights shaping the influencer marketing landscape.",
    author: "By Kavita Joshi",
  },
  {
    main_img: "blog_images/blogimg7.png",
    date: "15.12.2023",
    title: "How to Build a Strong Personal Brand",
    content:
      "Essential steps to create and maintain a powerful personal brand.",
    author: "By Vikram Patel",
  },
  {
    main_img: "blog_images/blogimg8.png",
    date: "20.12.2023",
    title: "Mastering Email Marketing Campaigns",
    content: "Effective strategies to increase open rates and conversions.",
    author: "By Neha Verma",
  },
  {
    main_img: "blog_images/blogimg9.png",
    date: "25.12.2023",
    title: "Top Social Media Trends for 2024",
    content: "A look at the upcoming trends shaping social media marketing.",
    author: "By Arjun Nair",
  },
];

let container = document.getElementById("blogs-main-box");

container.innerHTML = content
  .map(
    (blog) => `
      <a href="blogdetails.html">
        <div class="blogs-box">
            <div class="blog-image">
                <img src="${blog.main_img}" alt="${blog.title}">
            </div>
            <div class="blog-title">${blog.title}</div>
            <div class="blog-content">${blog.content}</div>
            <div class="blog-author-box">
                <div class="blog-author">${blog.author} <span class = "blog-date">${blog.date}</span></div>
                <div class="blog-link">
                        <img src="icon/blog-arrow.svg" alt="">
                </div>
            </div>
        </div>
      </a>
    `
  )
  .join("");
