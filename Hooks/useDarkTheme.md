# `useDarkSide` Hook

The `useDarkSide` hook is a custom React hook designed to manage and toggle between light and dark themes for your web application. It utilizes React's `useState` and `useEffect` hooks to maintain the current theme state and apply it to the DOM.

## Usage

```javascript
import useDarkSide from './useDarkSide';

function App() {
  const [theme, setTheme] = useDarkSide();

  // Use the 'theme' and 'setTheme' values to manage your application's theme
  // ...
}
```


## Overview
The useDarkSide hook performs the following tasks:

1. Initial Theme State: Upon the initial render, the hook checks if the localStorage is available (only on the client-side). If available, it retrieves the stored theme from localStorage, defaulting to "light" if not found. During server-side rendering (when localStorage is not available), it defaults to "light" as well.

2. Theme Toggle: It provides a mechanism to toggle between the "light" and "dark" themes. When you call the setTheme function returned by the hook, it updates the theme state and applies the corresponding class to the HTML root element (<html>). The theme state is also stored in localStorage for persistence.

## Returns
The useDarkSide hook returns an array with two values:

1. colorTheme (String): The current theme, either "light" or "dark" based on the state.
2. setTheme (Function): A function to set the theme. It accepts a single argument, either "light" or "dark," and updates the theme accordingly.