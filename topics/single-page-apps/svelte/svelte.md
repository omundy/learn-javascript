

# Svelte


## tl;dr

- Svelte is a lightweight framework for building websites and apps. 
- Svelte compiles into highly optimized vanilla JavaScript code for faster performance. 
- [SvelteKit](https://kit.svelte.dev/) is a framework that adds features like SSR, code splitting, file-based routing, and API routes for building more complex Svelte apps.
- [Svelte Native](https://svelte-native.technology/) is a mobile application framework powered by Svelte that compiles 

https://prismic.io/blog/svelte-and-sveltekit


## SvelteKit

- A single page app is fine with Svelte only.
- Multiple pages or routes, APIs, databases, use SvelteKit

Not really, SvelteKit uses adapters to run all the server-side functionality so following the pattern of already implemented adapters to make the SvelteKit app part of an Express API shouldn't be too hard.

Routing, server-side rendering, cookies, middlewares, server side functions






### Svelte Tutorials

- Declaring props example https://svelte.dev/tutorial/svelte/declaring-props
- Svelte Components https://kit-docs-demo.vercel.app/docs/component-format/script
- [Svelte Tutorial for Beginners #4 - User Input & Data Binding](https://www.youtube.com/watch?v=n8Kk7uvsx9A&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO&index=7) (2020)
- [How to build a simple Svelte app](https://blog.logrocket.com/how-to-build-simple-svelte-js-app/) (2024)
- [Svelte tutorial: Building an app using Svelte 5](https://www.contentful.com/blog/svelte-tutorial/) (2025)
- [Beginner's Guide to Svelte and SvelteKit](https://prismic.io/blog/svelte-and-sveltekit) (2023)


### Setup

[SvelteKit > Project Structure](https://svelte.dev/docs/kit/project-structure)

```bash
# create a new project in the current directory
npm create svelte@latest
# install dependencies
npm install 
# or start the server and open the app in a new browser tab
npm run dev -- --open
```




### CSS

- [Add Bootstrap to Svelte](https://github.com/svelte-add/bootstrap)
- [How to Customize Bootstrap with Sass](https://www.freecodecamp.org/news/how-to-customize-bootstrap-with-sass/)


```bash
npx svelte-add@latest bootstrap
```


## Routing & Data

- The <svelte:head> element [allows you to insert elements inside the `<head>` of your document](https://svelte.dev/tutorial/svelte-head) 
- Use `class:active={$page.url.pathname === '/about'}` to insert a [class name in a nav](https://svelte.dev/examples/classes) 
- Access page properties https://stackoverflow.com/a/68578884/441878

```js
<script>
  import { page } from '$app/stores';
</script>

<h1>{$page.url.pathname}</h1>
```

- [In SvelteKit, what's the difference between +page.js, +page.server.js and +page.svelte?](https://stackoverflow.com/questions/76244344/in-sveltekit-whats-the-difference-between-page-js-page-server-js-and-page)
- [Trouble converting svelte skeleton site to static, using adapter-static](https://github.com/sveltejs/kit/issues/7411)




## Static Site Generation

Note: See https://github.com/omundy/givememydata for example of static site built with Svelte

- [How to Build a Static SvelteKit Site](https://www.philkruft.dev/blog/how-to-build-a-static-sveltekit-site/), 2023
- [Building your static website with Svelte, SvelteKit](https://dev.to/robertobutti/how-to-start-building-your-static-website-with-svelte-and-tailwindcss-hbk), 2021
- [SvelteKit > Static site generation](https://kit.svelte.dev/docs/adapter-static)

```bash
npm i -D @sveltejs/adapter-static@latest
```

```bash
# create a production version of your app
npm run build
# preview the production build
npm run preview
```




## Static Site Deployment

Setup project

- [How to deploy a SvelteKit website to GitHub pages](https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages), 2023
- [metonym/sveltekit-gh-pages](https://github.com/metonym/sveltekit-gh-pages)
- [Publishing an Astro site to Github Pages](https://futurewebdesign.au/posts/gh-pages/)
- https://www.npmjs.com/package/gh-pages
- See also
  - https://svelte.dev/docs/kit/configuration#paths
  - https://svelte.dev/docs/kit/adapter-static#GitHub-Pages


```bash
# deply to github
npm run deploy
```