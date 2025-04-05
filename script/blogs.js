let content = [
  {
    link: "./blogs/why-smb-need-whatsapp.html",
    main_img: "blog_images/blogimg1.png",
    title: "Why do small and mid-sized business need Whatsapp to stay competitive?",
    content:"Techniques to create content that captures attention and drives engagement.",
  },
  {
    link: "./blogs/how-omnichannel-messaging-enhances-customer-experience.html",
    main_img: "blog_images/blogimg2.png",
    title: "Omnichannel messaging",
    content:"How storytelling can enhance brand identity and connect with audiences.",
  },
];

let container = document.getElementById("blogs-main-box");

container.innerHTML = content
  .map(
    (blog) => `
      <a href="${blog.link}">
        <div class="blogs-box">
            <div class="blog-image">
                <img src="${blog.main_img}" alt="${blog.title}">
            </div>
            <div class="blog-title">${blog.title}</div>
            <div class="blog-content">${blog.content}</div>
            <div class="blog-author-box">
                <div class="blog-author"></div>
                <div class="blog-link">
                        <img src="icon/blog-arrow.svg" alt="">
                </div>
            </div>
        </div>
      </a>
    `
  )
  .join("");


// <a href="blogdetails.html">
//   <div class="blogs-box">
//       <div class="blog-image">
//           <img src="${blog.main_img}" alt="${blog.title}">
//       </div>
//       <div class="blog-title">${blog.title}</div>
//       <div class="blog-content">${blog.content}</div>
//       <div class="blog-author-box">
//           <div class="blog-author">${blog.author} <span class = "blog-date">${blog.date}</span></div>
//           <div class="blog-link">
//                   <img src="icon/blog-arrow.svg" alt="">
//           </div>
//       </div>
//   </div>
// </a>
