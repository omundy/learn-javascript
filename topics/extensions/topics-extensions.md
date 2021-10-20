
← [Learn Javascript](../README.md)

# Browser Extensions
Tutorials, references, and tips for cross-browser extension development




<!-- TOC depthFrom:2 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [What is a browser extension?](#what-is-a-browser-extension)
- [Hello World Tutorial](#hello-world-tutorial)
	- [1. Create the manifest file](#1-create-the-manifest-file)
	- [2. Install In-Development Extension](#2-install-in-development-extension)
	- [3. Browser extension files](#3-browser-extension-files)
	- [4. Add content and background scripts](#4-add-content-and-background-scripts)
- [More Tutorials](#more-tutorials)
	- [Browser Blowup Tutorial](#browser-blowup-tutorial)
	- [MDN Web Docs Tutorial](#mdn-web-docs-tutorial)
	- [Sample Browser Extensions](#sample-browser-extensions)
- [Documentation](#documentation)
	- [Cross-browser compatibility](#cross-browser-compatibility)
	- [Publishing](#publishing)
	- [Packaging](#packaging)
- [FAQ & Tips](#faq-tips)
	- [What web browsers should I target?](#what-web-browsers-should-i-target)
	- [What are some notable examples of browser extensions?](#what-are-some-notable-examples-of-browser-extensions)
	- [What do I need to know about CSS and browser extensions?](#what-do-i-need-to-know-about-css-and-browser-extensions)
	- [Common Errors and Issues](#common-errors-and-issues)

<!-- /TOC -->





## What is a browser extension?

Watch the video [Radical Software - Browser Extensions](https://www.youtube.com/watch?v=IKsM8fWyBvs&list=PLhpnnpt3tw-SGxCwGuTLMgKpf4I74Ftdn&index=2&ab_channel=OwenMundy) (44:41)

Browser extensions are software that add features to a web browser. The functionality they add can be useful, like the [Wayback Machine extension](https://web.archive.org/) that shows you what a web page looked like in the past, even if it was deleted, or [Google Translate](https://translate.google.com/) which changes text on a web page into any language. Others are more whimsical, such as the [Meow Met](https://chrome.google.com/webstore/detail/meow-met/annljkgbhnihbghkbfammlacnlfkdclp?hl=en) (2015) extension created by Emily McAllister at the Metropolitan Museum of Art, which displays a new random image from their collection that contains a cat whenever you open a new browser window or tab.





## Hello World Tutorial

Browser extensions are made using HTML, CSS, and Javascript code. They are installed to the browser either locally (for development and testing) or packaged and then published on the Chrome Web Store or the Firefox Add-ons page. The simplest possible browser extension contains a single `manifest.json` file, which specifies only the metadata required to load an extension into the browser.

```json
{
	"name": "My First Browser Extension",
	"description": "🐌",
	"version": "1.0",
	"manifest_version": 2
}
```

### 1. Create the manifest file

1. Create a new folder named `hello-extension`. All your files will live inside this folder.
1. Create a new file inside `hello-extension` named `manifest.json` and paste the above example into it.
1. Install the extension in your browser using the appropriate instructions below.



### 2. Install In-Development Extension

#### In Chrome, Brave, and Opera

1. Go to `chrome://extensions`
1. Enable Developer mode by ticking the checkbox in the upper-right corner.
1. Click "Load unpacked extension..." and select the directory containing your unpacked extension.

#### In Firefox

1. Go to `about:debugging#/runtime/this-firefox`
1. Click "Load Temporary Add-on" and select *the manifest file* in your unpacked extension.



### 3. Browser extension files

Browser extensions contain multiple types of scripts, each of which run in a different context and with specific permissions.

![extension architecture](assets/img/browser-extensions-architecture.png)
<small>Diagram showing basic structure and contexts of a browser extension</small>

Script | Description
--- | ---
Content scripts | Loaded (a.k.a. "injected") into *each* page a user visits and therefore the only scripts in your extension that can access web page content.
Browser action | a.k.a. "popup script" is the page that appears when a user clicks on the extension icon at the top right of the browser.
Background scripts | Loaded once, when a user installs the extension, and operate continuously in the background. While the background is the only script which can use certain browser APIs (e.g. [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), you can [send messages](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts) between all scripts.

> Manifest v.3 was recently released and has some significant changes (background scripts now use service workers). If you are reading this in 2021 I suggest you stick to manifest v2 as you'll find more resources.


### 4. Add content and background scripts

Update your `manifest.json` file to look like
```json
{
	"name": "My First Browser Extension",
	"description": "🐌",
	"version": "1.1",
	"manifest_version": 2,
	"content_scripts": [{
		"matches": ["<all_urls>"],
		"js": ["content.js"]
	}],
	"background": {
		"scripts": ["background.js"]
	}
}
```

Add a `content.js` with the following,
```js
console.log("Hello from the content script at " + window.location.href);
```
a `background.js` file with,
```js
console.log("Hello from the background script!");
```
and then click the "refresh" button on the extension at `chrome://extensions` to reload the program.

The content script is injected in the page, so you can see this message in the regular dev tools on any page. To see the message from the background script, click on "Inspect views background page" at `chrome://extensions`








## More Tutorials



### Browser Blowup Tutorial

The above steps come from the [Browser Blowup: Explode Web Pages Containing Third-Party Trackers](https://owenmundy.com/_site/content/_info/writing/sc_cookbook_2_browser_blowup.pdf) tutorial published in [Signal Culture Cookbook Vol.2](http://signalculture.org/cookbookvol2.html#.XvZmqJNKiL4) (2019). You can continue reading or follow one of the tutorials below.



### MDN Web Docs Tutorial

1. [What are extensions?](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)
1. [Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
1. [Anatomy of an extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
1. [Building a cross-browser extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)
1. [Example Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples) ([Github](https://github.com/mdn/webextensions-examples))
1. [Content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)


### Advanced

- [Setting up Chrome Extensions for use with ES6](https://www.coreycleary.me/setting-up-chrome-extensions-for-use-with-es6) - Webpack, testing, modules


### Sample Browser Extensions

- [omundy/sample-extension-messages](https://github.com/omundy/sample-extension-messages)
- [omundy/sample-extension-observer](https://github.com/omundy/sample-extension-observer)
- [omundy/sample-extension-github-tools](https://github.com/omundy/sample-extension-github-tools)
- [sneakaway-studio/explode-the-web](https://github.com/sneakaway-studio/explode-the-web)
- [sneakaway-studio/stop-slide-scrolling](https://github.com/sneakaway-studio/stop-slide-scrolling)
- [sneakaway-studio/tally-extension](https://github.com/sneakaway-studio/tally-extension)
- [mdn/webextensions-examples](https://github.com/mdn/webextensions-examples)













## Documentation

- [Chrome Getting started](https://developer.chrome.com/docs/extensions/mv2/getstarted/) guide
- Chrome [download](https://www.google.com/chrome/), [Chrome Web Store](https://chrome.google.com/webstore/), [Developer Console](https://chrome.google.com/u/1/webstore/devconsole), [API Reference](https://developer.chrome.com/docs/extensions/reference/)
- Chromium [download](https://www.chromium.org/getting-involved/download-chromium)
- Firefox [Addons Store](https://addons.mozilla.org/en-US/firefox/), [Developer Hub](https://addons.mozilla.org/en-US/developers/), [Documentation](https://extensionworkshop.com/)
- Opera [Opera Store](https://addons.opera.com/en/extensions/), [Developer portal](https://addons.opera.com/developer/)
- Brave (publish on [Chrome Web Store](https://support.brave.com/hc/en-us/articles/360017909112-How-can-I-add-extensions-to-Brave-))


### Cross-browser compatibility

* [Porting a Google Chrome extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)
* [Mozilla > Chrome incompatibilities](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
* [Mozilla > Browser support for JavaScript APIs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)


### Publishing

See links above for platforms.

### Packaging

1. Zip extension files
	- Chrome: Zip the `extension/` directory
	- Firefox: Zip [*only files inside*](https://mzl.la/2r2McKv) the `extension/` directory
1. Remove hidden files from the Firefox version (see [this page for details](https://github.com/sneakaway-studio/tally-extension/blob/master/DEVELOPMENT.md))
1. Upload to respective web stores (see above)









## FAQ & Tips

### What web browsers should I target?
There are many web browser brands, but most are based on just three [browser engines](https://en.wikipedia.org/wiki/Browser_engine) "types".
- [Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine)) (part of the [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) project) is used by [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome), [Opera](https://en.wikipedia.org/wiki/Opera_(web_browser)), [Brave](https://en.wikipedia.org/wiki/Brave_(web_browser)), and [Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft_Edge)
- [Gecko](https://en.wikipedia.org/wiki/Gecko_(software)) used by [Firefox](https://en.wikipedia.org/wiki/Firefox)
- [Webkit](https://en.wikipedia.org/wiki/WebKit) used by Safari (and [several others](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based) including Google Chrome and Firefox for iOS)


### What are some notable examples of browser extensions?
- Add-Art [source](https://github.com/coreytegeler/add-art-chrome/)
- [Catblock](https://getcatblock.com/) [source](https://github.com/CatBlock/catblock)
- Adblock [source](http://code.getadblock.com/releases/)


### What do I need to know about CSS and browser extensions?
CSS from web pages will affect ("pollute") display properties in your extension, often messing up your own styling. For example, if this rule is set on a page your extension then html that you show in the content scripts will inherit it:
```css
p { color: red; }
```
These tips help ensure your code won't inherit other styles (listed in increasing potential to protect your own):
- Use uncommon class and id names. This works unless the styling rules are applied very broadly (like above).
- Wrap all your code within a unique class or id.
- Use `!important` on all your rules.
- If all else fails, explicitly set a default for **every** property in your extension.

```css
#uniquePrefix p { color: black !important; }
```

### Common Errors and Issues


#### Uncaught Error: Extension context invalidated.
The error, `Uncaught Error: Extension context invalidated`, can occur when you update an in-development extension and then interact with a web page without refreshing the page to get the newly updated extension. The issue is that the (now outdated) content scripts injected and running on the page have attempted to access an extension that no longer exists (since it was updated).
