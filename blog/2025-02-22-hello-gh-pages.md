---
title: Hello Docusaurus and GitHub Pages
description: Getting started with Docusaurus for building a simple blog and deploying it on GitHub Pages.
tags: [docusaurus, github-pages, blog, tutorial]
authors: [thanhvinh03]
---

Welcome to my first post using Docusaurus and GitHub Pages! In this post, I will walk you through the steps to set up your own blog with Docusaurus and deploy it on GitHub Pages. 

Docusaurus is a modern static site generator designed for creating documentation websites. It provides a great platform for writing technical articles, tutorials, and blogs with a clean and minimalistic look. GitHub Pages, on the other hand, is a simple way to host static sites directly from a GitHub repository. Together, they make a powerful combination for hosting and managing your blog.

<!-- truncate -->

## Getting Started with Docusaurus

First, you need to set up Docusaurus. Follow these steps:

1. **Install Docusaurus**:
   - To get started, you need to install Node.js if you haven't already. Then, you can install Docusaurus by running:

   ```bash
   npx @docusaurus/init@latest init my-blog classic
   ```

2. **Run Your Site Locally**:
   - After initializing, navigate to the project folder and run the following to start a local server:

   ```bash
   cd my-blog
   npm start
   ```

   - You can now access your Docusaurus blog locally by opening [http://localhost:3000](http://localhost:3000) in your browser.

3. **Create New Blog Posts**:
   - To create a blog post, simply add a markdown file in the `blog` folder. You can use the following command to generate a new blog post:

   ```bash
   npx docusaurus generate-blog
   ```

   This will create a skeleton markdown file that you can edit to write your posts.

## Deploying to GitHub Pages

Once you've set up your blog and are happy with the content, it’s time to deploy it to GitHub Pages:

1. **Push Your Code to GitHub**:
   - Initialize a git repository and push your Docusaurus site to GitHub:

   ```bash
   git init
   git remote add origin <your-repository-url>
   git add .
   git commit -m "Initial commit"
   git push -u origin master
   ```

2. **Install GitHub Pages Package**:
   - Install the GitHub Pages package in your Docusaurus project by running:

   ```bash
   npm install --save gh-pages
   ```

3. **Configure GitHub Pages**:
   - Open `docusaurus.config.js` and set the `url` field to your GitHub Pages URL and the `baseUrl` to the path where your site will be deployed.

   ```js
   module.exports = {
     url: 'https://your-username.github.io',
     baseUrl: '/your-repository-name/',
   };
   ```

4. **Deploy Your Site**:
   - Run the following command to deploy your site:

   ```bash
   npm run deploy
   ```

   Your site will now be live on GitHub Pages! You can access it via the URL provided in the `url` configuration.

<!-- truncate -->

## Conclusion

With just a few simple steps, you've set up a modern blog using Docusaurus and deployed it to GitHub Pages. This combination offers a simple, clean, and effective way to manage and share your content online. Whether you're writing about tech, AI, or your personal projects, Docusaurus provides a great platform for all your blogging needs.

Thank you for reading, and happy blogging!

## References

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
