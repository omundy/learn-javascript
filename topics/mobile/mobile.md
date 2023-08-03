<!-- paginate: true -->

← [Learn Javascript](../../)

<a href="../../"><img width="150" src="../../assets/img/logos/logo-javascript-150w.png"></a> <a href="../../"><img width="150" src="../../assets/img/logos/logo-node-ltgreen-150w.png"></a>

# Mobile & Desktop Apps

How to build applications for desktop, mobile devices

<span class="slides-small"><a href="slides.html">slides</a> | <a href="mobile.md">md</a></span>

<!--
Presentation comments ...
-->


---

## About

- This topic is about using Javascript to publish mobile (iOS, Android) and desktop (Mac, Windows) applications.
- There are a number of Javascript frameworks to publish native apps. IOW, you don't need to learn Java (Android) and Objective C (iOS) to make your apps cross-platform. 





## Hybrid vs. Native mobile apps

<div class="twocolumn1x2">
<div class="col">

**Hybrid mobile apps** combine your mobile website with a web view (browser) into a single application. When launched web view only displays your website and none of the usual aspects of the browser like the address bar. Examples include: PhoneGap, ionic, sencha touch, Osen Ui

</div>
<div class="col">

**Native mobile apps** use the OS's native components and do not depend on a web view. They have better performance and reliability compared to hybrid apps. 
- React Native [mobile](https://reactnative.dev/) or [desktop](https://microsoft.github.io/react-native-windows/)
- Tabris.js
- Native script


<details class="caption slides-small">
<summary>References</summary>

https://medium.com/@adolfokrah/top-javascript-frameworks-for-native-mobile-apps-2019-5e43cc4166df

</details>

</div>
</div>





---

## About Electron

Electron is a JS framework for building [desktop](https://patrickhq.medium.com/react-native-vs-electron-js-what-is-better-for-cross-platform-app-development-9cf64ef399f9) applications





---

## About React Native

React Native is a JS library that uses React's declarative UI to render native components for Android and iOS.


1. Read about core components and react fundamentals in the [introduction](https://reactnative.dev/docs/getting-started)
1. Follow their [quickstart](https://reactnative.dev/docs/environment-setup?guide=quickstart) to create a project and run the hello world



---

## Start with Expo

The easiest way to get started building and testing your app on a phone is [with Expo](https://reactnative.dev/docs/environment-setup). 

```bash
# create new project and cd into it
npx create-expo-app AwesomeProject && cd AwesomeProject
# start expo app
npx expo start
```

Apps published with Expo require the [Expo SDK](https://docs.expo.dev/versions/latest/) which provides decent (but abstracted) access to native APIs. There are also [a few other considerations](https://adhithiravi.medium.com/building-react-native-apps-expo-or-not-d49770d1f5b8).




---

## Cross-Platform Differences

- Much Expo/React Native code can be reused across platforms, but there are some differences.
- Native components look different because of design guidelines on each platform (see [Apple Human Interface](https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/) and [Android Material Design guidelines](https://material.io/design))
- For example, the `<Button>` component is rendered differently on iOS and Android.




---

## Expo Services Cheatsheet

Name | Description
--- | ---
[Expo SDK](https://expo.dev/tools) | Collection of packages to access the most-used APIs for all apps.
[Expo CLI](https://docs.expo.dev/more/expo-cli/) | A CLI tool to start writing code for an Expo project.
[Expo Go](https://expo.dev/client) | Development client for Android and iOS. Loads the JS part of the project to preview your app in development.
[Expo Snack](https://snack.expo.dev/) | A web-based playground that allows you to write and run React Native apps in the browser.
[EAS](https://expo.dev/eas) | Expo Application Service builds your project into Android and iOS apps, then submits them to the app stores.


<details class="caption slides-small">
<summary>References</summary>

https://www.codecademy.com/learn/learn-react-native/modules/introduction-to-react-native/cheatsheet

</details>




--- 

## Tutorials

- [Add fonts](https://blog.logrocket.com/adding-custom-fonts-react-native/#adding-fonts-the-expo-way)
- [Codecademy React Native](https://www.codecademy.com/learn/learn-react-native)



---

## References

- 