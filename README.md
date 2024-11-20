# React Native Tutorial

1. [Initial Setup](https://github.com/tirthraj07/React-Native/tree/72ee9a1b2e98e5ad93d1afa3ba12a39a632f7e23)
1. [Core Components](https://github.com/tirthraj07/React-Native/tree/cbcf6a5def175ba247744814c27206ff0ae48b29)
1. [View](https://github.com/tirthraj07/React-Native/tree/bac2bffac3cc8e85efe28b039113b88a48736bec)
1. [Text](https://github.com/tirthraj07/React-Native/tree/b924b06778c4475a571ac7aef962e4f56bd8c92f)
1. [Image](https://github.com/tirthraj07/React-Native/tree/2d8433ed34a24ac4ba00fd376e3d91fc04a599a7)
1. [Scroll View](https://github.com/tirthraj07/React-Native/tree/114d1e1ec9d1e2a27890d65b6bb3d284f9ba22e5)
1. [Button](https://github.com/tirthraj07/React-Native/tree/a15f31d87bed11f190d8f4177fcba86d63a113bf)
1. [Pressable](https://github.com/tirthraj07/React-Native/tree/9567c7740eacb8b4d998d026c94971837f9dbe7a)
1. [Modal](https://github.com/tirthraj07/React-Native/tree/52dfdef8cc4a48c956598349c76791c45a753632)
1. [Status Bar](https://github.com/tirthraj07/React-Native/tree/f71be0bb838c40e7adb0d1769eb81d4905997634)
1. [Activity Indicator](https://github.com/tirthraj07/React-Native/tree/782f75d9a2020cf1b91f84096dcd57a5dd0427a8)
1. [Alert](https://github.com/tirthraj07/React-Native/tree/eebda41fc309bd68acef7296403e1f961eefcccb)
1. [Custom Components](https://github.com/tirthraj07/React-Native/tree/0302bbaa5503769b226725e36caa551424f9ceaf)
1. [Project Structure](https://github.com/tirthraj07/React-Native/tree/d9c11c0495f6130faef3b9fbebe808c718813fe1)
1. [StyleSheet API](https://github.com/tirthraj07/React-Native/tree/50f2aabaf6c286da3696eef9e0db92b064626749)
1. [Multiple Styles](https://github.com/tirthraj07/React-Native/tree/86d912b866a48fdc17859d6b8d968fac35fb2409)
1. [Shadow and Elevation](https://github.com/tirthraj07/React-Native/tree/f36c8afdfe5de0ed8f6df8b2264c7315663a2287)
1. [Style Inheritance](https://github.com/tirthraj07/React-Native/tree/b3dd6c183973fa928078023a8b70087a6364dc99)
1. [Relative and Absolute Layout](https://github.com/tirthraj07/React-Native/tree/498c081c0cf7cb0ac0e8d48710e796d0907511cf)
1. [Dimensions API](https://github.com/tirthraj07/React-Native/tree/d196eec62a0cb1f6a9a27a65d21e3c976235e1b3)
1. [useWindowDimensions](https://github.com/tirthraj07/React-Native/tree/6e131f34b0467976596675c5ccd137ffe074d573)
1. [SafeAreaView](https://github.com/tirthraj07/React-Native/tree/e6c3331c4c022c62498504324253fae5f3c38dfa)
1. [Platform Specific Code](https://github.com/tirthraj07/React-Native/tree/4863934be452afcbf6a35d940bc451b4cc0e728e)
1. [FlatList](https://github.com/tirthraj07/React-Native/tree/c982fcf25c1966ea149785952f1667878388ea71)
1. [Item Separator](https://github.com/tirthraj07/React-Native/tree/acab0b5ea19499cbc2c72d74c4556b619f324a97)
1. [List Empty](https://github.com/tirthraj07/React-Native/tree/fc69afc91d006fecb6ab3e000e9c2ddf32700d79)
1. [List Header and Footer](https://github.com/tirthraj07/React-Native/tree/4951a242eabef6f648c134cce6915c6052a76050)
1. [SectionList](https://github.com/tirthraj07/React-Native/tree/14de25a975dca91d3ee22f8c79f017e51a4b10eb)

---

## Setup Instructions

### Step 1: Install Expo CLI

```bash
npm i -g expo-cli
```

### Step 2: Create a new React Native Project

```bash
expo init <project-name>
```

### Step 3: Start the project

```bash
cd <project-name>
npm start
```

## Ideal Project Structure

Reference: [React Native folder structure](https://medium.com/@nitishprasad/react-native-folder-structure-e9ceab3150f3)

```
AwesomeProject
  -src
    |--- assets
    |      |--- fonts
    |            |--- <<Your Fonts>>
    |      |--- images
    |            |--- << Your Images>>
    |
    |
    |--- route
    |      |--- screenName
    |      |      |--- index.js
    |      |      |--- styles.ts
    |      |      |--- helper.ts
    |      |      |--- screenName.tsx
    |      |      |--- screenName.test.tsx
    |      |      |--- useAnimated.ts (Optional)
    |      |      |--- components (Optional)
    |      |
    |      |--- screenName2
    |              |--- index.js
    |              |--- styles.ts
    |              |--- helper.ts
    |              |--- screenName.tsx
    |              |--- screenName.test.tsx
    |              |--- useAnimated.ts (Optional)
    |              |--- components (Optional)
    |
    |--- navigation
    |      |--- NavigationContainer
    |      |--- Route
    |      |--- NavigationService
    |      |--- linking
    |
    |--- networking
    |      |--- apiclient
    |      |--- requestInterceptor (Assuming axios)
    |      |--- responseInterceptor (Assuming axios)
    |      |--- urls
    |      |--- UserApi (You can create a file for a group of related api calls)
    |
    |--- components
    |      |---Button (This is will have same structure as the screen)
    |      |      |--- index.ts
    |      |      |--- Button.tsx
    |      |      |--- styles.ts
    |      |      |--- helper.ts
    |      |      |--- useAnimated.ts (Optional)
    |      |
    |      |--- <<Any other component>>
    |
    |--- hooks
    |      |--- useBackHandler.ts
    |      |--- useKeyboard.ts
    |      |--- useUploadImage.ts
    |      |--- useCamera.ts
    |      |--- <<Any other hook>>
    |
    |--- types
    |      |--- UserInterface
    |      |--- MediaInterface
    |      |--- AppConfigInterface
    |
    |--- redux
    |      |--- store.ts
    |      |--- slices
    |            |--- UserSlice
    |            |--- IntermittentSlice
    |            |--- ToastSlice
    |
    |--- utils
    |      |--- Analytics.ts
    |      |--- CommonUtils.ts
    |      |--- Logger.ts
    |      |--- ErrorManager.ts
    |      |--- DateTimeUtils.ts
    |      |--- EncryptedStore.ts
    |      |--- string.ts
    |      |--- constants.ts
    |      |--- enums.ts
    |
---------------------------- << MULTIPLE MODULE APP >> ----------------
    |--- Module_Name
          |--- routes
          |--- components
          |--- hooks
```
