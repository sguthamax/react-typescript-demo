# React TypeScript Demo
Welcome to the React TypeScript Demo Repo! This project showcases the standard functionality and capabilities of React with TypeScript. Explore the power of type safety, enhanced code readability, and improved development experience in React applications. I am saving my code and learning journey here. Feel free to contribute or explore!

I built this demo following the [Codevolution React TypeScript Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK), an excellent resource for coders that already know JavaScript and React and want to get up to speed with TypeScript.

## Table of Contents

* [About This Project](#about-this-project)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)
* [Project Architecture and Folder Structure](#project-architecture-and-folder-structure)
* [Project Status](#project-status)
* [Contact](#contact)

## About This Project

This project encompasses multiple React Components written in TypeScript that demonstrate different functionalities, conventions and features of that programming language. 

Following is a list of the Demo components, and a description of the TypeScript's features each one demonstrates:

./src/components

* **Greet:** Basic types: Strings, numbers and booleans.
* **Person:** Importing types from another file. 
* **Person List:** Typing arrays and types within types (Types that reference/encompass other types)
* **Status:** Advanced component's properties typing (union types to define a strict set of values that a prop can take)
* **Heading:** Components with children standard types children props.
* **Fiction Award:** Components that have another React Component as children (React.ReactNode type)
* **Button:** Components with event props. These components can receive event functions as props.
* **Input:** A component with event props of increased complexity.
* **Styles Containers:** Define CSS styles for components with React.CSSProperties type.

./src/components/state
* **LoggedIn:** useState Hook.
* **User:** Allowing a useHook to take a null value and further in the lifecycle another value with typeScript's union types.
* **User With Type Assertions:** React component with type assertions for the useState Hook.
* **Counter:** Component that uses the useReducer Hook with Strict Types (union types) for its actions.

./src/components/context
* **useContext Hook:** 3 components (theme, ThemeContext and Box) that demonstrates the useContext Hook implemented with TypeScript.
* **User and UserContext:** Demonstrate using the useContext Hook in TypeScript with union types (Defining types that can be a null or a defined type value).

./src/components/ref
* **DomRef and MutableRef:** * useRef Hook with TypeScript.

./src/components/class
* **Class Counter:** Demonstates the typin of classes in TypeScript.

./src/components/auth
* **Private, Profile, Login and Auth:** These components demonstrate how to type components when passing a component as props to another.

./src/components/generics
* **List:** Use of generic props to pass and list items of multiple types, including strings, numbers and any object.

./src/components/restriction
* **Random Number:** Demonstrates type restrictions on components' props.

./src/components/template-literals
* **Toast:** Component that shows how to use template literals to make combinations of union types.

./src/components/html
* **Custom Button and Input:** Demonstrates how to wrap HTML elements, like buttons and inputs, creating custom components that, in addition to the props that are standard to them (such as onClick and onChange), you can add your own props and logic.
* **Custom Greet Component:** Extracts the Greet component prop types and use them in this component with an slightly different functionality.

./src/components/polymorphic
* **Text:** Polymorphic components, which can be rendered as different HTML elements or components based on a prop value. Provide type safety and ensure that the "as" prop only accepts valid HTML elements or components.

## Technologies

### Stack

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


### Tools and Libraries

![EsLint](	https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

### Dependencies

Check the [package.json](./package.json) file.

## Setup

### Prerequisites

- Install Node.
- Install npm.

### Setup Procedure

- Download or clone Repo.
- Navigate to the project's folder and install its dependencies using npm by entering the command:
```
npm install
```

# Usage 

## Extract from Create React App's default README.md file

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Architecture and Folder Structure

```
LICENSE
package-lock.json
package.json
[public]
    ├── favicon.ico
    ├── index.html
    ├── logo192.png
    ├── logo512.png
    ├── manifest.json
    └── robots.txt
README.md
[src]
    ├── App.css
    ├── App.test.tsx
    ├── App.tsx
    ├── [components]
        ├── [auth]
            ├── Auth.tsx
            ├── Login.tsx
            ├── Private.tsx
            └── Profile.tsx
        ├── Button.tsx
        ├── [class]
            └── Counter.tsx
        ├── Container.tsx
        ├── [context]
            ├── Box.tsx
            ├── theme.ts
            ├── ThemeContext.tsx
            ├── User.tsx
            └── UserContext.tsx
        ├── DemoAdvancedComponets.tsx
        ├── DemoTypeScriptContextAndRefHook.tsx
        ├── DemoTypeScriptProps.tsx
        ├── DemoTypeScriptStateHooks.tsx
        ├── FictionAward.tsx
        ├── [generics]
            └── List.tsx
        ├── Greet.tsx
        ├── Heading.tsx
        ├── [html]
            ├── Button.tsx
            ├── CustomComponent.tsx
            └── Input.tsx
        ├── Input.tsx
        ├── Person.tsx
        ├── Person.types.ts
        ├── PersonList.tsx
        ├── [polymorphic]
            └── Text.tsx
        ├── [ref]
            ├── DomRef.tsx
            └── MutableRef.tsx
        ├── [restriction]
            └── RandomNumber.tsx
        ├── [state]
            ├── Counter.tsx
            ├── LoggedIn.tsx
            ├── User.tsx
            └── UserWithTypeAssertion.tsx
        ├── Status.tsx
        └── [template-literals]
            └── Toast.tsx
    ├── index.css
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    └── setupTests.ts
tsconfig.json
```

## Project Status

Project is: Completed. 

Feel free to make suggestions on how to improve the project.

## Contact

Created by **Ricardo Rodriguez** - contact me on the following links:

[![Ricardo's Github Profile](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rodmor59)
[![Ricardo's Linkedin Profile](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ricartrodrig)
