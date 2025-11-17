<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a>

# Jamstack

How to save, update, and display dynamic data.




---

## What is a Jamstack?

[Jamstack](https://jamstack.org/) is an architectural approach for building websites that uses "JAM" (Javascript + API + Markup) to render a fully- or mostly-static site:

1. The frontend is static, typically built using a <a href="https://www.cloudflare.com/en-gb/learning/performance/static-site-generator/" target="_blank" rel="noopener">Static Site Generation (SSG)</a>.
1. With no backend, it runs faster, has better security, and hosting is cheap (even free).
1. Can scale easily and (static files) traffic can be offloaded to a CDN. 


---

## Overview of rendering concepts

- [Client-Side Rendering (CSR)](https://www.educative.io/answers/ssr-vs-csr-vs-isr-vs-ssg) e.g. Single-Page Application (SPA) – JS renders pages in client’s browser with empty HTML files + raw data from the server. (e.g. React, Vue, Angular)
- [Server-Side Rendering (SSR)](https://www.educative.io/answers/ssr-vs-csr-vs-isr-vs-ssg) e.g. Fullstack – Generates pages on server with dynamic data before delivering to client. Improves SEO and loading, decreases server performance. (e.g. [EJS](https://ejs.co/), PHP, or Next.js)
- [Static Site Generation (SSG)](https://www.cloudflare.com/en-gb/learning/performance/static-site-generator/) e.g. [JAMStack](https://www.cloudflare.com/learning/performance/what-is-jamstack/) – Pre-renders all pages as static HTML during build process. Fast loading times, enhanced security, and dynamic content can still be achieved via “islands”.




---

## Overview of rendering concepts (cont.)

- [Incremental Static Regeneration (ISR)](https://www.educative.io/answers/ssr-vs-csr-vs-isr-vs-ssg) – Combines SSR and SSG to pre-render static pages during build time while periodically regenerating specific pages with updated data.
- [Edge-Side Rendering (ESR)](https://edgeone.ai/blog/details/esr) – Rendering process is pushed to the CDN’s edge servers which handles requests and generates HTML. Requires Nitro engine.




---

## Jamstack Examples

- [Convert a PHP/MySQL site to Jamstack and host on Github Pages](https://owenmundy.com/blog/2025/11/convert-a-php-mysql-site-to-jamstack-and-host-on-github-pages/) Mundy
- [Astro Starlight tutorial](https://omundy.github.io/dig345-radical-software/tutorials/astro-starlight/) Mundy
 

