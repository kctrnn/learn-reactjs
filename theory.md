**AGENDA**

1. useState
2. useEffect
3. useCallBack
4. useMemo
5. HOF React.memo

## 1. useState()

- useState() giúp functional component có thể dùng state
- useState() trả về một mảng 2 phần từ [name, setName]
- useState() áp dụng replacing thay vì merging như bên class component
- Init state callback chỉ thực thi 1 lần đầu

## 2. useEffect()

```
MOUNTING
- rendering
- run useEffect()

UPDATING
- rendering
- run `useEffect() cleanup` nếu dependencies thay đổi
- run `useEffect()` nếu dependencies thay đổi

UNMOUNTING
- run `useEffect() cleanup`
```

```js
function App() {
  const [filters, setFilters] = useState();
  // No dependencies defined
  useEffect(() => {
    // EVERY
    // Always execute after every render
    return () => {
      // Execute before the next effect or unmount.
    };
  });

  // Empty dependencies
  useEffect(() => {
    // ONCE
    // Only execute once after the FIRST RENDER
    return () => {
      // Execute once when unmount
    };
  }, []);

  // Has dependencies
  useEffect(() => {
    // On demand
    // Only execute after the first RENDER or filters state changes
    return () => {
      // Execute before the next effect or unmount.
    };
  }, [filters]);
}
```

```js
class App extends PureComponent {
  componentDidMount() {
    console.log('Component Did Mount');
  }
  componentWillUnmount() {
    console.log('Component Will Unmount');
  }
}

// viết lại tương đương với hooks
function App() {
  useEffect(() => {
    console.log('Component Did Mount');
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);
}
```

```js
class App extends PureComponent {
  componentDidMount() {
    console.log('Component Did Mount or Did Update');
  }
  componentDidUpdate() {
    console.log('Component Did Mount or Did Update');
  }
}

// viết lại tương đương với hooks
function App() {
  useEffect(() => {
    console.log('Component Did Mount or Did Update');
  });
}
```

## 3. useCallBack()

Là một react hooks giúp mình tạo ra một `memoized callback` và chỉ tạo ra callback mới khi
`dependencies thay đổi`

- Nhận vào 2 tham số: 1 là `function`, 2 là `dependencies`
- Return `memoized callback`
- Chỉ tạo ra function mới khi dependencies thay đổi
- Nếu dùng empty dependencies thì không bao giờ tạo ra function mới

```js
// App re-render --> create a new function --> Chart is re-rendered
function App() {
  const handleChartTypeChange = (type) => {};
  return <Chart onTypeChange={handleChartTypeChange} />;
}
```

```js
// useCallBack makes the function is created only once
// App re-render --> Chart IS NOT re-rendered
function App() {
  const handleChartTypeChange = useCallback((type) => {}, []);
  return <Chart onTypeChange={handleChartTypeChange} />;
}
```

## 4. useMemo()

Là một react hooks giúp mình tạo ra một `memoized value` và chỉ tính toán ra value mới khi
`dependencies thay đổi`

- Nhận vào 2 tham số: 1 là `function`, 2 là `dependencies`
- Return `memoized value`
- Chỉ tính toán value mới khi dependencies thay đổi
- Nếu dùng empty dependencies thì không bao giờ tính toán lại value mới

```js
// App re-render --> create a new array --> Chart is re-rendered
function App() {
  const data = [{}, {}, {}];
  return <Chart data={data} />;
}
```

```js
// useMemo makes the array is created only once
// App re-render --> Chart IS NOT re-rendered
function App() {
  const data = useMemo(() => [{}, {}, {}], []);
  return <Chart data={data} />;
}
```

## 5. Higher order component `React.memo()`

- React.memo() tương tự như PureComponent
- React.memo() dùng cho functional component, còn PureComponent dùng cho class component
- Chỉ render lại component nếu props thay đổi
- Sử dụng shallow comparison (so sánh nông)

```js
function Chart() {
  return <div>Yup!</div>;
}

export default React.memo(Chart);
```
