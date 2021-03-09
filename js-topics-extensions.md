
# Browser Extensions
Extensions literally "extend" what browsers can do by adding additional functionality


<!-- TOC depthFrom:2 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [FAQ](#faq)
- [Browser Extension Development](#browser-extension-development)
	- [Chrome, Brave, and Opera Development Installation](#chrome-brave-and-opera-development-installation)
	- [Firefox Development Installation](#firefox-development-installation)
- [Publishing](#publishing)
	- [Packaging](#packaging)
- [Platform References & Notes](#platform-references-notes)
	- [Browsers](#browsers)
	- [Cross-browser compatibility](#cross-browser-compatibility)
- [Tips for building extensions](#tips-for-building-extensions)
	- [CSS](#css)

<!-- /TOC -->




## FAQ

#### What type of extension should I make?
There are many web browser brands, but most are based on just three [browser engines](https://en.wikipedia.org/wiki/Browser_engine) "types".
- [Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine)) (part of the [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) project) is used by [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome), [Opera](https://en.wikipedia.org/wiki/Opera_(web_browser)), [Brave](https://en.wikipedia.org/wiki/Brave_(web_browser)), and [Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft_Edge)
- [Gecko](https://en.wikipedia.org/wiki/Gecko_(software)) used by [Firefox](https://en.wikipedia.org/wiki/Firefox)
- [Webkit](https://en.wikipedia.org/wiki/WebKit) used by Safari (and [several others](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based) including Google Chrome and Firefox for iOS)


#### What are some notable examples of browser extensions?
- Add-Art [source](https://github.com/coreytegeler/add-art-chrome/)
- [Catblock](https://getcatblock.com/)
- Adblock [source](http://code.getadblock.com/releases/)













## Browser Extension Development
General information and references for cross-browser extension development



- https://developer.chrome.com/docs/extensions/mv2/getstarted/
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension






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











## Publishing

* [Chrome Web Store Developer Console](https://chrome.google.com/u/1/webstore/devconsole) - upload ZIP file
* [Opera](https://addons.opera.com/developer/) - Upload CRX
* Firefox - [upload ZIP of extension files themselves, not the containing directory](https://mzl.la/2r2McKv)
* Brave - uses Chrome Web Store version


### Packaging

1. Zip extension files
	- Chrome: Zip `extension/` directory
	- Firefox: Zip *only files inside* extension directory
1. Remove hidden files from the Firefox version (see [this page for details](https://github.com/sneakaway-studio/tally-extension/blob/master/DEVELOPMENT.md))
1. Upload to respective web stores















## Platform References & Notes

### Browsers

- Chrome (Chromium) - [download](https://www.google.com/chrome/)
- Chromium - [download](https://www.chromium.org/getting-involved/download-chromium)
- Firefox - [Addons Store](https://addons.mozilla.org/en-US/firefox/), [Developer Hub](https://addons.mozilla.org/en-US/developers/), [Documentation](https://extensionworkshop.com/)
- Opera (Chromium) - [Opera Store](https://addons.opera.com/en/extensions/), [Developer portal](https://addons.opera.com/developer/)
- Brave ([Chromium](https://support.brave.com/hc/en-us/articles/360017909112-How-can-I-add-extensions-to-Brave-))


### Cross-browser compatibility

* [Porting a Google Chrome extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)
* [Mozilla > Chrome incompatibilities](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
* [Mozilla > Browser support for JavaScript APIs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)






## Tips for building extensions

### CSS

CSS from web pages will affect ("pollute") display properties in your extension, often messing up your own styling. For example, if this rule is set on a page your extension (html that you show in the content scripts) will inherit it:
```css
p { color: red; }
```
To make sure your code doesn't inherit page styles (listed in increasing potential to protect your own styles):
- Use uncommon class and id names. This works unless the styling rules are applied very broadly (like above).
- Wrap all your code within a unique class or id.
- Using `!important` on all your rules.
- Explicitly set a default for every property within your extension.

```css
#uniquePrefix p { color: black !important; }
```
