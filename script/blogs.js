let content = [
  {
    link: "./blogs/why-smb-need-whatsapp.html",
    main_img: "blog_images/blogimg1.png",
    title: "Why SMBs Need WhatsApp to Stay Competitive? ",
    content:"Discover why small and mid-sized businesses must leverage WhatsApp for customer engagement, marketing, and support to stay ahead in today's digital landscape.",
  },
  {
    link: "./blogs/how-omnichannel-messaging-enhances-customer-experience.html",
    main_img: "blog_images/blogimg2.png",
    title: "How Omnichannel Messaging Improves Customer Experience?",
    content:"Learn how omnichannel messaging streamlines communication, enhances customer satisfaction, and drives engagement across WhatsApp, SMS, chatbots, and more.",
  },
  {
    link: "./blogs/setup-and-manage-whatsapp-business-account.html",
    main_img: "blog_images/blogimg3.png",
    title: "How to Set Up & Manage Your WhatsApp Business Account?",
    content:"Step-by-step guide on setting up and optimizing your WhatsApp Business account. Learn tips on automation, messaging, and customer support.",
  },
  {
    link: "./blogs/send-bulk-messages-on-whatsapp-without-getting-banned.html",
    main_img: "blog_images/blogimg4.png",
    title: "How to send bulk messages on WhatsApp without getting banned?",
    content:"Learn safe and compliant methods to send bulk messages on WhatsApp. Avoid bans with best practices, automation tools, and official WhatsApp Business solutions.",
  },
  {
    link: "./blogs/whatsapp-broadcast.html",
    main_img: "blog_images/blogimg5.png",
    title: "WhatsApp Broadcast: How It Works & Best Practices?",
    content:"Master WhatsApp Broadcast messaging! Learn how to send mass messages, use WhatsApp Broadcast features, and maximize engagement without getting blocked.",
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
