<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Jamstack

How to save, update, and display dynamic data.




---

## What is a Jamstack?

Originally, "JAM" in Jamstack stood for JavaScript, API & Markup Jamstack, but now it refer to an architectural approach for building websites:

1. The frontend is static, typically built using a static site generator (SSG).
1. With no backend, benefits include faster response times, better security, and cheaper to host.
1. Additionally, the project can scale easily and (with static files) traffic can be offloaded to a CDN. 

Read more [jamstack.wtf](https://jamstack.wtf/)


ADD THIS SEOMEEHWKHJHWEH
https://www.cloudflare.com/en-gb/learning/performance/static-site-generator/


## Convert a PHP/MySQL site to Jamstack to host on Github Pages


I decided my first sabbatical project would be to convert the site I created during <a href="https://owenmundy.com/site/camp-la-jolla" target="_blank" rel="noopener">my master's thesis</a> to a static <a href="https://jamstack.wtf/">Jamstack</a> site. This post documents that process.

Moving the project to Github Pages would simplify maintenance and hosting costs, but it would be no small task. I originally created the site as a research tool using PHP/MySQL database, to record, organize, and ultimately publish research about the military history of UCSD. There are a <a href="https://news.ycombinator.com/item?id=24683127" target="_blank" rel="noopener">plethora of tools</a> one can use to publish a database-driven site on a static host. They mostly can be categorized as follows (ordered by most to least dynamic data sources):

<ul>
 	<li><b>Continue using a database</b> but move it (including reading/writing) to a remote service (like <a href="https://firebase.google.com" target="_blank" rel="noopener">Firebase</a>, <a href="https://www.mongodb.com/atlas/database" target="_blank" rel="noopener">Atlas</a>, et al) — ⚠️ This will ultimately create vendor lock-in, potential hidden costs, and probably more maintenance issues in the future.</li>
 	<li><b>Create a static version of the database</b> by converting MySQL to flat files (JSON, CSV, etc.) which still allows for querying using one of various tools — 🤔 This method is interesting, because it still decouples the data from the presentation and allows for potentially more options later, including a remote database. I am already using this in various forms (JSON is JSON after all) but worry again about maintenance, or issues with the client's ability to manipulate the data as needed.</li>
 	<li><b>Generate a static version of the site</b>, including all its pages which contain the data formerly dynamically inserted from MySQL. — 🤔 I like this concept, and have been using it to auto-publish my class lectures and tutorials using Markdown and Grunt with <a href="https://marp.app/" target="_blank" rel="noopener">Marp</a>. Plus, there <a href="https://jamstack.org/generators/" target="_blank" rel="noopener">are many site generators</a> to choose from, which I explore below.</li>
 	<li><b>Scrape the site and save pages as static files</b>. After all, everything is static once the HTML is rendered on the frontend. — ⚠️ While fast, this requires the site be built first and would make updates difficult.</li>
</ul>




<h4>Essential Concepts</h4>

Before I go further, it would be good to establish some concepts about rendering. See <a href="https://www.educative.io/answers/ssr-vs-csr-vs-isr-vs-ssg" target="_blank" rel="noopener">SSR vs CSR vs ISR vs SSG</a> for more.

<ul>
 	<li><strong>Single-Page Application (SPA)</strong> || <strong>Client-Side Rendering (CSR)</strong> - JS renders pages in client’s browser with empty HTML files + raw data from the server. See: React, Vue, Angular...</li>
 	<li><strong>Fullstack</strong> || <strong>Server-Side Rendering (SSR)</strong> - generates pages on server with dynamic data before delivering to client. Improves SEO and loading, decreases server performance. See: <a href="https://ejs.co/" target="_blank" rel="noopener">EJS</a>, PHP, or Next.js</li>
 	<li><strong>JAMStack</strong> || <strong>Static Site Generation (SSG)</strong> - pre-renders all pages as static HTML during build process. Fast loading times, enhanced security, .</li>
 	<li><strong>Incremental Static Regeneration (ISR)</strong> - combines SSR and SSG to pre-render static pages during build time while periodically regenerating specific pages with updated data.</li>
 	<li><strong>Edge-Side Rendering (ESR)</strong> - rendering process is pushed to the CDN's edge servers which handles requests and generates the HTML. Requires Nitro engine.</li>
</ul>


<h4>Requirements</h4>

Here are the reqs for most of the projects I mention above.

<ol>
 	<li>The data will be static, but editable using Git</li>
 	<li>The data should be searchable using a tool like <a href="https://harvesthq.github.io/chosen/">chosen</a></li>
 	<li>The site design will be simple, but I should have creative control</li>
 	<li>The site will be public, and be presented mostly using the same design as the original site</li>
 	<li>HTML/CSS validation + Accessibility checks</li>
 	<li>Convert from Google Maps to Leaflet</li>
 	<li>Host the site on Github Pages</li>
</ol>

While planning the project I also wanted to select a method I could use for other potential static (or nearly static) sites like:

<ol>
 	<li>A new site documenting the hundreds of examples and overlapping categories of Critical Web Design and internet art I've been collecting for an upcoming book</li>
 	<li>Converting <a href="https://tallysavestheinternet.com" target="_blank" rel="noopener">tallysavestheinternet.com</a> to a static site (currently SSR) and unlinking the extension from the server to use local data only</li>
 	<li>Moving away from Wordpress (and its security problems) and blogging with Markdown, starting with this blog (NO MORE TYPING IN A WEB FORM!!)</li>
</ol>

Finally, it's always great to learn new tools. I already have some experiences with React, Next.js, and Vue.js, but wouldn't say I'm confident in any. I had some very bad experiences trying to publish an app using React Native, and my general distrust of Facebook makes me lean towards Vue. Still, I'm going in with an open attitude.


<h4>Tool Comparison</h4>

Here is a breakdown of tools I considered:

https://github.com/myles/awesome-static-generators

<table class="table">
<tbody>
<tr>
<th>Framework</th>
<th>SPA</th>
<th>SSR</th>
<th>SSG</th>
<th>MD</th>
<th>Themes</th>
<th>Search</th>
<th>Cons</th>
</tr>

<tr>
<td><a href="https://jekyllrb.com/" target="_blank" rel="noopener">Jekyll</a></td>
<td>❌</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
<td><a href="https://jamstackthemes.dev/ssg/jekyll/" rel="noopener" target="_blank">✅</a></td>
<td>?</td>
<td>❌ Ruby</td>
</tr>

<tr>
<td><a href="https://gohugo.io/about/what-is-hugo/" target="_blank" rel="noopener">Hugo</a></td>
<td>❌</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
<td><a href="https://themes.gohugo.io/" rel="noopener" target="_blank">✅</a></td>
<td>?</td>
<td>❌ Go</td>
</tr>

<tr>
<td><a href="https://astro.build/" target="_blank" rel="noopener">Astro</a></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td><a href="https://docs.astro.build/en/guides/markdown-content/" target="_blank">✅</a></td>
<td><a href="https://astro.build/themes/?categories%5B%5D=blog" target="_blank" rel="noopener">✅</a></td>
<td><a href="https://docs.astro.build/en/guides/content-collections/#querying-collections" rel="noopener" target="_blank">✅</a></td>
<td>Add React or Vue if you like. <a href="https://johnzanussi.com/posts/nextjs-to-astro-migration#client-side-events" rel="noopener" target="_blank">Testimonial</a>, <a href="https://docs.astro.build/en/core-concepts/routing/">routing</a> is easy</td>
</tr>


<tr>
<td><a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a></td>
<td><a href="https://vuejs.org/guide/extras/ways-of-using-vue.html#single-page-application-spa" target="_blank" rel="noopener">✅</a></td>
<td><a href="https://vuejs.org/guide/scaling-up/ssr.html" target="_blank" rel="noopener">✅</a></td>
<td><a href="https://vuejs.org/guide/extras/ways-of-using-vue.html#jamstack-ssg">✅</a></td>
<td><a href="https://vuejs.org/examples/#markdown" rel="noopener" target="_blank">✅</a></td>
<td><a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">✅ vuepress</a></td>
<td>?</td>
<td></td>
</tr>


<tr>
<td><a href="https://nuxt.com/" target="_blank" rel="noopener">Nuxt.js</a></td>
<td>✅</td>
<td>✅</td>
<td><a href="https://nuxt.com/docs/guide/concepts/rendering" target="_blank" rel="noopener">✅</a></td>
<td>✅</td>
<td><a href="https://vitepress.dev/guide/custom-theme" rel="noopener" target="_blank">✅</a></td>
<td>?</td>
<td>Built on Vue</td>
</tr>
</tbody>
</table>


Use JS components in Markdown files https://mdxjs.com/

https://nextjs.org/docs/pages/building-your-application/configuring/mdx

https://nextjs.org/docs/app/building-your-application/configuring/mdx



Astro

https://7.dev/how-to-create-astro-js-project/

https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog?file=src%2Fcontent%2Fblog%2Fsecond-post.md

https://caisy.io/blog/astro-vs-next

Process
https://docs.astro.build/en/install/auto/

1. Install `npm create astro@latest`
1. Start `npm run dev`

Deploy
https://docs.astro.build/en/guides/deploy/

1. Continuous deployment (Vercel) with Git
1. Or build locally `npm run build`


Themes

1. Install with theme https://github.com/satnaing/astro-paper
`npm create astro@latest -- --template satnaing/astro-paper`


1. Rip out tailwind, add [bootstrap](https://stackoverflow.com/questions/73879494/import-bootstrap-in-astro)

Other good (non TS) Astro 3 examples (with search)
- https://github.com/markteekman/accessible-astro-starter - no search
- https://github.com/one-aalam/astro-ink - ugly search
- https://github.com/robertguss/Astro-Theme-Creek - not updated
- https://github.com/ixartz/Astro-boilerplate/ - no search
- https://github.com/onwidget/astrowind - no search
- https://astro.build/themes/details/astro-paper/ - TS, ugly animation



Next


Process with Next.js SSG - painful. 
- Constantly running into subtle changes in syntax across versions
- Adding an image is rediculously inane.
- Exporting the SSG ultimately created dead links, packaged up in Next code that was hard to understand. 
- So much automation to make a static site in the end you can't do anything unless you have the exact right code, in the right version, in the right paths. 
- Error messages are rarely helpful or pinpoint the line number causing the issue in the stack.

1. This one failed https://tina.io/blog/simple-markdown-blog-nextjs/
1. Then followed this series https://medium.com/frontendweb/build-the-static-blog-with-next-js-and-markdown-59576c75fbf2
1. Get new code https://getbootstrap.com/docs/5.3/getting-started/introduction/
1. Integrate with Next https://blog.logrocket.com/handling-bootstrap-integration-next-js/
1. https://pagepro.co/blog/how-to-use-next-js-static-site-generator/

Others

https://cmdcolin.github.io/posts/2023-04-08-nextjs-appdir-blog
https://vercel.com/templates/next.js/blog-starter-kit