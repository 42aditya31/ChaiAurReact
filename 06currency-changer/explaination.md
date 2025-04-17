# React Fundamentals Notes

## 1. Custom Hooks in React

### What is a Custom Hook?
A custom hook is a JavaScript function whose name starts with `use` and that may call other hooks. Custom hooks are used to extract and reuse logic between components.

### Why Use Custom Hooks?
- To avoid repeating code in multiple components
- To encapsulate reusable logic
- To make the code more readable and maintainable

### Example:
```jsx
function useCurrencyInfo(currency) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://api.com/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
}
```

## 2. API Call

### What is an API Call?
An API call is a request sent from a client to a server to retrieve or send data. In React, API calls are often made inside `useEffect` hooks.

### Syntax:
```jsx
useEffect(() => {
  fetch('API_URL')
    .then(response => response.json())
    .then(data => console.log(data));
}, []);
```

## 3. Fetch and Then

### Fetch
`fetch` is a built-in browser API to make HTTP requests.

### Then
`.then()` is used to handle the promise returned by `fetch`. It allows you to define what to do once the response is received.

### Example:
```js
fetch('https://api.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

## 4. Convert Data into JSON

### What is JSON?
JSON (JavaScript Object Notation) is a format to represent structured data.

### Why Convert?
Most APIs return data in JSON format. To use it in JavaScript, it needs to be converted.

### Example:
```js
fetch('url')
  .then(response => response.json())
  .then(data => setData(data));
```

## 5. How to Call an API in React?
- Place the fetch call inside `useEffect`
- Add dependencies in the dependency array to control when it should run

### Example:
```js
useEffect(() => {
  fetch('api_url')
    .then(res => res.json())
    .then(data => setData(data));
}, [dependency]);
```

## 6. Key in Loops (React)

### What is the Purpose of `key`?
React uses `key` to identify which items have changed, are added, or removed. Keys help React optimize rendering.

### Rules:
- Keys must be unique among siblings
- Should not use array index if items can change order

### Example:
```jsx
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

## 7. useId Hook

### What is useId?
`useId` is a React hook that generates a unique ID for each component instance.

### Use Case:
Useful when associating form fields and labels with unique IDs.

### Example:
```jsx
const id = useId();
<label htmlFor={id}>Name</label>
<input id={id} />
```

## 8. Reusable Components

### What is a Reusable Component?
A component designed to be used multiple times with different data and configurations.

### Why Reusable?
- Reduces code duplication
- Improves maintainability

### Example:
```jsx
function InputBox({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
}
```

### Usage:
```jsx
<InputBox label="Username" value={username} onChange={handleUsernameChange} />
<InputBox label="Password" value={password} onChange={handlePasswordChange} />
```

