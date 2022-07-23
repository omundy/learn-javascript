<!-- paginate: true -->

← [Learn Javascript](../README.md)

# Browser Extensions
Tutorials, references, and tips for cross-browser extension development


<!--
Presentation comments ...
-->


---

### Contents

1. [Browser Blowup Tutorial](#hello-world-tutorial) - Introduction to browser extensions
1. [More Tutorials](#more-tutorials) - Mozilla, Chrome, etc. web tutorials
1. [Sample Browser Extensions](#sample-browser-extensions) - Code samples to get started
1. [Documentation](#documentation) - Cross-browser compatibility, publishing, packaging
1. [FAQ & Tips](#faq-tips) - Browsers, specific issues




---

## Browser Blowup Tutorial

An introduction to browser extensions, starting with the basics and building up to an extension that can detect web trackers and explode web pages.<sup>*</sup>

- [0-Introduction](https://sneakaway-studio.github.io/explode-the-web/tutorial/slides/0-introduction.html) ([md](https://github.com/sneakaway-studio/explode-the-web/blob/main/tutorial/markdown/0-introduction.md)) - What are browser extensions?
- [1-Hello World!](https://sneakaway-studio.github.io/explode-the-web/tutorial/slides/1-hello-world.html) ([md](https://github.com/sneakaway-studio/explode-the-web/blob/main/tutorial/markdown/1-hello-world.md)) - Write HTML/CSS/JS to create your first extension
- [2-Architecture](https://sneakaway-studio.github.io/explode-the-web/tutorial/slides/2-architecture.html) ([md](https://github.com/sneakaway-studio/explode-the-web/blob/main/tutorial/markdown/2-architecture.md)) - Extension architecture, scripts, debugging
- [3-DOM](https://sneakaway-studio.github.io/explode-the-web/tutorial/slides/3-dom.html) ([md](https://github.com/sneakaway-studio/explode-the-web/blob/main/tutorial/markdown/3-dom.md)) - Browser actions, assets, explosion animation
- [4-Explosion](https://sneakaway-studio.github.io/explode-the-web/tutorial/slides/4-explosion.html) ([md](https://github.com/sneakaway-studio/explode-the-web/blob/main/tutorial/markdown/4-explosion.md)) - Report trackers in the console, wrapping up


<div class="slides-small">* Originally published in 2019 as <a href="https://owenmundy.com/_site/content/_info/writing/sc_cookbook_2_browser_blowup.pdf">Browser Blowup: Explode Web Pages Containing Third-Party Trackers</a> in <a href="http://signalculture.org/cookbookvol2.html#.XvZmqJNKiL4">Signal Culture Cookbook Vol.2</a>, the tutorial has been updated to Manifest 3 as of 2022. Also see this <a href="https://www.youtube.com/watch?v=IKsM8fWyBvs&list=PLhpnnpt3tw-SGxCwGuTLMgKpf4I74Ftdn&index=2&ab_channel=OwenMundy">video</a> (44:41)</div>












---

## More Tutorials



### MDN Web Docs Tutorial

1. [What are extensions?](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)
1. [Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
1. [Anatomy of an extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
1. [Building a cross-browser extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)
1. [Example Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples) ([Github](https://github.com/mdn/webextensions-examples))
1. [Content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)


### Advanced Tutorials

- [Setting up Chrome Extensions for use with ES6](https://www.coreycleary.me/setting-up-chrome-extensions-for-use-with-es6) - Webpack, testing, modules



---

## Sample Browser Extensions

- [omundy/sample-extension-messages](https://github.com/omundy/sample-extension-messages)
- [omundy/sample-extension-observer](https://github.com/omundy/sample-extension-observer)
- [omundy/sample-extension-github-tools](https://github.com/omundy/sample-extension-github-tools)
- [sneakaway-studio/explode-the-web](https://github.com/sneakaway-studio/explode-the-web)
- [sneakaway-studio/stop-slide-scrolling](https://github.com/sneakaway-studio/stop-slide-scrolling)
- [sneakaway-studio/tally-extension](https://github.com/sneakaway-studio/tally-extension)
- [mdn/webextensions-examples](https://github.com/mdn/webextensions-examples)











---

## Documentation

- [Chrome Getting started](https://developer.chrome.com/docs/extensions/mv2/getstarted/) guide
- Chrome [download](https://www.google.com/chrome/), [Chrome Web Store](https://chrome.google.com/webstore/), [Developer Console](https://chrome.google.com/u/1/webstore/devconsole), [API Reference](https://developer.chrome.com/docs/extensions/reference/)
- Chromium [download](https://www.chromium.org/getting-involved/download-chromium)
- Firefox [Addons Store](https://addons.mozilla.org/en-US/firefox/), [Developer Hub](https://addons.mozilla.org/en-US/developers/), [Documentation](https://extensionworkshop.com/)
- Opera [Opera Store](https://addons.opera.com/en/extensions/), [Developer portal](https://addons.opera.com/developer/)
- Brave (publish on [Chrome Web Store](https://support.brave.com/hc/en-us/articles/360017909112-How-can-I-add-extensions-to-Brave-))


---

### Cross-browser compatibility

- [Porting a Google Chrome extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)
- [Mozilla > Chrome incompatibilities](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Mozilla > Browser support for JavaScript APIs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)


---

### Publishing

See links above for platforms.

### Packaging

1. Zip extension files
	- Chrome: Zip the `extension/` directory
	- Firefox: Zip [*only files inside*](https://mzl.la/2r2McKv) the `extension/` directory
1. Remove hidden files from the Firefox version (see [this page for details](https://github.com/sneakaway-studio/tally-extension/blob/master/DEVELOPMENT.md))
1. Upload to respective web stores (see above)







---

## FAQ & Tips > What web browsers should I target?

There are many web browser brands, but most are based on just three [browser engines](https://en.wikipedia.org/wiki/Browser_engine) "types".

- [Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine)) (part of the [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) project) is used by [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome), [Opera](https://en.wikipedia.org/wiki/Opera_(web_browser)), [Brave](https://en.wikipedia.org/wiki/Brave_(web_browser)), and [Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft_Edge)
- [Gecko](https://en.wikipedia.org/wiki/Gecko_(software)) used by [Firefox](https://en.wikipedia.org/wiki/Firefox)
- [Webkit](https://en.wikipedia.org/wiki/WebKit) used by Safari (and [several others](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based) including Google Chrome and Firefox for iOS)


---

## FAQ & Tips > What are some notable examples of browser extensions?

- Add-Art [source](https://github.com/coreytegeler/add-art-chrome/)
- [Catblock](https://getcatblock.com/) [source](https://github.com/CatBlock/catblock)
- Adblock [source](http://code.getadblock.com/releases/)

---

## FAQ & Tips > Issues with CSS and browser extensions

CSS from web pages will affect ("pollute") display properties in your extension, often messing up your own styling. For example, if this rule is set on a page your extension then html that you show in the content scripts will inherit it:

```css
p { color: red; }
```

---

## FAQ & Tips > Issues with CSS and browser extensions

These tips help ensure your code won't inherit other styles (listed in increasing potential to protect your own):
- Use uncommon class and id names. This works unless the styling rules are applied very broadly (like above).
- Wrap all your code within a unique class or id.
- Use `!important` on all your rules.
- If all else fails, explicitly set a default for **every** property in your extension.

```css
#uniquePrefix p { color: black !important; }
```


---

## FAQ & Tips > Common Errors and Issues


#### Uncaught Error: Extension context invalidated.
The error, `Uncaught Error: Extension context invalidated`, can occur when you update an in-development extension and then interact with a web page without refreshing the page to get the newly updated extension. The issue is that the (now outdated) content scripts injected and running on the page have attempted to access an extension that no longer exists (since it was updated).
