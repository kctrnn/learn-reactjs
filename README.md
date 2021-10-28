# Learn ReactJS 🎉

## Folder structure

```
src
|__ components (shared components between features)
|  |__ Loading
|     |__ index.tsx
|     |__ styles.scss
|
|__ features
|  |__ Todo
|     |__ components (components of feature Todo)
|     |__ pages (pages of feature Todo)
|     |__ index.tsx (entry point of feature Todo)
|
|__ App.tsx
```

---

### 1. What is `useCallBack()`

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

### 2. What is `useMemo()`

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

### 3. Higher order component `React.memo()`

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

---

## 📰 Form module

- 1 dự án có rất nhiều form
- Mỗi form đều xử lí những vấn đề như: default values, submit form, validation, form errors, ...

--> Không có cách quản lý sẽ dẫn đến việc lặp đi lặp lại những vấn đề trên rất nhiều

> Solution

![form](https://user-images.githubusercontent.com/90959206/138994205-f042fc25-6327-419b-aa93-2098a79454e0.png)

```
src
|__ components
|  |__ FormFields (base controls)
|     |__ InputField.tsx
|     |__ PasswordField.tsx
|     |__ ...
|
|__ features
|  |__ Todo
|     |__ components
|     |  |__ TodoForm (form component)
|     |
|     |__ pages
|        |__ ListPage (page/container)
|
|__ App.tsx
```

## 📰 API module

**Why**

Thiết lập một `HTTP client` và đảm bảo tất cả các `HTTP requests, response` đều phải đi qua nó, nhằm mục đích xử lý những tác vụ chung như:

- Thêm common headers: content-type,...
- Attach thêm token và xử lý expired token
- Xử lý lỗi chung

**How**

![api](https://kctrnn.vercel.app/assets/images/api-module-9ca34b1789d62ac4a31759bc7f0872b8.png)

```
src
|__ api
| |__ axiosClient.js : http client for our website
| |__ productApi.js : all apis of product resources
| |__ categoryApi.js
| |__ userApi.js
| |__ ...
|
|__ components
|__ features
|__ ...
|__ App.js
```

## Built with

- UI: `Material UI`, `SCSS`
- Routing: `react-router-dom`
- Form management: `react-hook-form`
- Form validation: `yup`
- HTTP client: `axios`
