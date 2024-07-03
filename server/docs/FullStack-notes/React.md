# Components

- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.
- Components come in two types, Class Components and Function components
### Class Component(Currently not used)
-  When creating a React component, the components's name must start with a upper case letter.
-  The component had to include the `extends React.Component` statement, this statement creates an inheritance, to React.Component, and gives your component access to React.Component's functions 
-  The component also requires a `render()` method, this method return HTML.
#### Example 

```jsx
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

## Function Components
- Function Components are simply JavaScript function.
- We can create a functional component in React by writing a JavaScript function.
- These functions may or may not receive data as parameters.
- In the functional Components, the return value if the **JSX** code to render to the DOM tree.

#### Example
```jsx
const App = () => {
	return /*Something*/ ;
}
```
# State 

- React components has a built-in **state** object.
- The state object is where you store property values that belong to the component.
- When the **state** object changes, the component re-renders.
- In react for changing the variables dynamically we use state.

```js
state = {
	taskCount = 0;
}

//Changing th taskCount variable dynamically
	//taskCount ++;
```

# Hooks

- Hooks were added to React in version 16.8.
- Hooks allow functions components to have access to state and other React features.
- Because of this, class components are generally no longer needed.
- Hooks allow us to **hook** into React features such as state and lifecycle methods.
- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional.

```jsx
	import React, {useState } from "react";

	const func = () => {
		//This is the use of hook
		const [color, setColor] = useState("red");
		
	}
```
