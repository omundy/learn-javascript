
← [Learn Javascript](../README.md)

# Javascript – Data Persistence

How to save, update, and display dynamic data.




---

## What is data persistence?

Data persistence describes the ability to store data beyond the life of a program. Some common examples:

1. Use a text editor to create a file, save it to your computer, and open it again later.
1. Open a mobile app like Instagram and it remembers you have already logged in.
1. Use a web-based CMS (Content Management System) like Wordpress to post text and images to the internet.

The various technologies in each case may change, but the concept remains the same: the software stores information as part of its function, security, or customization.



---

## Methods

In the above examples, the data persists because it is saved in one or more locations:

Software | Data on your PC | Data in a client | Data across a network
--- | --- | --- | ---
TextEdit | Saves text files to your hard drive | Stores settings in `~/Library/Preferences/` | Can also store files in the cloud
Instagram mobile app | Saves edited photos in your library | Stores preferences and user authentication | Stores text in database and images on server via their API
Google Docs | Saves files for offline use | Stores authentication (cookies) in browser | Stores text in database and images on server via their API





---

## Client-side storage

> Modern web browsers support a number of ways for web sites to store data on the user's computer — with the user's permission — then retrieve it when necessary. This lets you persist data for long-term storage, save sites or documents for offline use, retain user-specific settings for your site, and more.
— [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)

Javascript in a browser can use the following methods to persist data for a user.

1. **Cookies** - A small piece of data stored in the browser.
1. **Web-based storage APIs** (localStorage and sessionStorage)
1. **Cache** - web browsers store copies of files locally in a **cache** so websites load faster.

Node.js (run-time Javascript) can write data directly to the hard drive.




---

## Cookies

Cookies can be used to personalize a user’s web experience with a website.

Cookies can store user preferences, inputs, or authentication information to customize a web experience.




 or inputs when accessing that website. A user can customize their web browser to accept, reject, or delete cookies.

Cookies can be set and modified at the server level using the Set-Cookie HTTP header, or with JavaScript using document.cookie.




---

## LocalStorage

```js
localStorage.setItem('location','Davidson College');
```









[demos/client-side-storage.html](demos/client-side-storage.html)







---

## Other client-side storage options

When you create an app that runs on its own (outside of a web browser) you have many additional options for storing data in the client.

- Use a mobile app to comment on your friend's photo.






## Databases

Database | tabular | MySQL RDBMS
- Database
- Server
- API - A web service that save data in either of the above.





## References

1. Mozilla Web Docs [Client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
