

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