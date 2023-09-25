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

[Top Javascript Frameworks for Native Mobile Apps 2023](https://medium.com/@adolfokrah/top-javascript-frameworks-for-native-mobile-apps-2019-5e43cc4166df)

</details>

</div>
</div>








---

## React Native / Expo

- React Native is a JS library that uses React's declarative UI to create native (not hybrid) mobile applications
- React Native renders native UI on Android and iOS (the appearance/behavior matches the platform), and gives you access to all the native APIs on each platform (Gyroscope, Camera, etc.).
- [Expo](https://reactnative.dev/docs/environment-setup) is a framework and set of services that make it easy to get started writing, testing, building, and even publishing mobile apps. 



## React Native / Expo - Quickstart

The easiest way to get started building and testing your app on a phone is with Expo. The following is based on the [React Native](https://reactnative.dev/docs/environment-setup?guide=quickstart) and [Expo](https://docs.expo.dev/tutorial/create-your-first-app/) introductions.

1. Review the [React Fundamentals](https://reactnative.dev/docs/intro-react?language=javascript) as needed
2. Create and start a demo Expo app. This will install a basic project, then start a server to make your compiled app available on your local network. Several options will appear for testing, including a QR code.

```bash
# create new project and cd into it
npx create-expo-app AwesomeProject && cd AwesomeProject
# start expo app
npx expo start
```

3. Expo Go allows you to test your React Native app on a physical device. Install it on your device, connect to the same wireless network as your computer, and scan the QR code to access Expo app.
4. To modify your app open App.js and edit some lines. The application will reload automatically once you save your changes.


To run your app directly on your machine using an Android Virtual Device `npm run android`, or iOS Simulator `npm run ios` (mac only) you will need to install the Android (JDK, Android Studio) and Mac (Xcode) development environments. See [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup?guide=native) tab.






## React Native / Expo Quickstart - Publish

```bash
npm install -g expo-cli
expo publish
```

Reference: [How to publish a React Native application to Expo](https://www.educative.io/answers/how-to-publish-a-react-native-application-to-expo)



## React Native / Expo Quickstart - Build

[EAS Build allows you to build a ready-to-submit binary of your app for the Google Play Store or Apple App Store](https://docs.expo.dev/build/setup/)

```bash
# 1 Install the EAS (Expo) CLI
npm install -g eas-cli
# 2 Log in to your Expo account
eas login
# 3 Configure the project
eas build:configure

```







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

- [Codecademy cheatsheet](https://www.codecademy.com/learn/learn-react-native/modules/introduction-to-react-native/cheatsheet)
- [A few considerations about Expo](https://adhithiravi.medium.com/building-react-native-apps-expo-or-not-d49770d1f5b8)

</details>





---

## Cross-Platform Differences

- Much Expo/React Native code can be reused across platforms, but there are some differences.
- Native components look different because of design guidelines on each platform (see [Apple Human Interface](https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/) and [Android Material Design guidelines](https://material.io/design))
- For example, the `<Button>` component is rendered differently on iOS and Android.





---

## Desktop apps

Electron is a JS framework for building [desktop only](https://patrickhq.medium.com/react-native-vs-electron-js-what-is-better-for-cross-platform-app-development-9cf64ef399f9) applications.




--- 

## Tutorials

1. [Codecademy React Native](https://www.codecademy.com/learn/learn-react-native)
1. Expo [Introduction](https://docs.expo.dev/tutorial/introduction/)
1. Expo [Build Tutorial](https://docs.expo.dev/build/introduction/)
1. [Add fonts](https://blog.logrocket.com/adding-custom-fonts-react-native/#adding-fonts-the-expo-way)


---

## References

- 