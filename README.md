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
