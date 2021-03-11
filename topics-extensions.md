
# Browser Extensions
General information and references for cross-browser extension development





#### Contents

<!-- TOC depthFrom:2 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [About](#about)
- [Tutorials](#tutorials)
- [Installing Development Versions](#installing-development-versions)
	- [Chrome, Brave, and Opera Development Installation](#chrome-brave-and-opera-development-installation)
	- [Firefox Development Installation](#firefox-development-installation)
- [Documentation](#documentation)
	- [Cross-browser compatibility](#cross-browser-compatibility)
	- [Publishing](#publishing)
- [FAQ & Tips](#faq-tips)
	- [What type of extension should I make?](#what-type-of-extension-should-i-make)
	- [What are some notable examples of browser extensions?](#what-are-some-notable-examples-of-browser-extensions)
	- [What do I need to know about CSS and browser extensions?](#what-do-i-need-to-know-about-css-and-browser-extensions)

<!-- /TOC -->





## About


If you are just getting started note this about Google Chrome recently released manifest version 3 which has some significant changes. Much is the same, like in this [Getting started](https://developer.chrome.com/docs/extensions/mv2/getstarted/) guide, but some is not. If you are reading this in 2021 I suggest you keep with the manifest v2 method as you'll find more resources, like my own tutorial, [Browser Blowup: Explode Web Pages Containing Third-Party Trackers](https://owenmundy.com/_site/content/_info/writing/sc_cookbook_2_browser_blowup.pdf), or the MDN tutorial series below:







## Tutorials

MDN Web Docs Tutorial
1. [What are extensions?](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)
1. [Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
1. [Anatomy of an extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
1. [Building a cross-browser extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)


#### Sample extensions

- [omundy/sample-extension-listener](https://github.com/omundy/sample-extension-listener)
- [omundy/sample-extension-github-tools](https://github.com/omundy/sample-extension-github-tools)







## Installing Development Versions


### Chrome, Brave, and Opera Development Installation

1. Download and unzip the [extension](https://github.com/omprojects/tally-extension/archive/master.zip)
1. In Chrome, go to `chrome://extensions`
1. Enable Developer mode by ticking the checkbox in the upper-right corner.
1. Click on the "Load unpacked extension..." button.
1. Select the directory containing your unpacked extension.

### Firefox Development Installation

1. Open Firefox browser and navigate to `about:debugging#/runtime/this-firefox`
1. Click the "Load Temporary Add-on" button.
1. Select the directory containing your unpacked extension.
1. Then select the manifest file.












## Documentation

- Chrome [download](https://www.google.com/chrome/), [Chrome Web Store](https://chrome.google.com/webstore/), [Developer Console](https://chrome.google.com/u/1/webstore/devconsole), [API Reference](https://developer.chrome.com/docs/extensions/reference/)
- Chromium - [download](https://www.chromium.org/getting-involved/download-chromium)
- Firefox [Addons Store](https://addons.mozilla.org/en-US/firefox/), [Developer Hub](https://addons.mozilla.org/en-US/developers/), [Documentation](https://extensionworkshop.com/)
- Opera [Opera Store](https://addons.opera.com/en/extensions/), [Developer portal](https://addons.opera.com/developer/)
- Brave (publish on [Chrome Web Store](https://support.brave.com/hc/en-us/articles/360017909112-How-can-I-add-extensions-to-Brave-))


### Cross-browser compatibility

* [Porting a Google Chrome extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)
* [Mozilla > Chrome incompatibilities](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
* [Mozilla > Browser support for JavaScript APIs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)


### Publishing

See links above for platforms.

#### Packaging

1. Zip extension files (Chrome: Zip `extension/` directory; Firefox: Zip []*only files inside*](https://mzl.la/2r2McKv) `extension/` directory)
1. Remove hidden files from the Firefox version (see [this page for details](https://github.com/sneakaway-studio/tally-extension/blob/master/DEVELOPMENT.md))
1. Upload to respective web stores









## FAQ & Tips

### What type of extension should I make?
There are many web browser brands, but most are based on just three [browser engines](https://en.wikipedia.org/wiki/Browser_engine) "types".
- [Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine)) (part of the [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) project) is used by [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome), [Opera](https://en.wikipedia.org/wiki/Opera_(web_browser)), [Brave](https://en.wikipedia.org/wiki/Brave_(web_browser)), and [Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft_Edge)
- [Gecko](https://en.wikipedia.org/wiki/Gecko_(software)) used by [Firefox](https://en.wikipedia.org/wiki/Firefox)
- [Webkit](https://en.wikipedia.org/wiki/WebKit) used by Safari (and [several others](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based) including Google Chrome and Firefox for iOS)


### What are some notable examples of browser extensions?
- Add-Art [source](https://github.com/coreytegeler/add-art-chrome/)
- [Catblock](https://getcatblock.com/)
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
