# Learn ReactJS 🎉

- Every theory ever: [theory.md](theory.md)
- [Learn Nextjs](https://github.com/kimchantr/learn-nextjs)
- [Practice projects in course](practice.md)

---

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

## Built with

- UI: `Material UI`, `SCSS`
- Routing: `react-router-dom`
- Form management: `react-hook-form`
- Form validation: `yup`
- HTTP client: `axios`
- Global state management: `redux-toolkit`, `redux-saga`

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

## 📰 Global state management

**Why Redux-toolkit (The standard way to write Redux)**

- Configuring a Redux store is too complicated.
- I have to add a lot of packages to get Redux to do anything useful.
- Redux requires too much boilerplate code.

![redux](https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif)

**Example RTK**

1. Setup todo slice

```js
// features/Todo/todoSlice.js
const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
    // todo: { id:1, title: 'code' }
  },

  reducers: {
    addTodo(state, action) {
      state.list.push(action.payload);
    },

    removeTodo(state, action) {
      const todoId = action.payload;
      const index = state.list.findIndex((x) => x.id === todoId);
      state.list.splice(index, 1);
    },
  },
});

// actions
export const { addTodo, removeTodo } = actions;

// selectors
export const selectTodoList = (state) => state.todo.list;

// reducer
const todoReducer = todoSlice.reducer;
export default todoReducer;
```

2. Setup redux store

```js
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from 'features/todos/todoSlice';
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
```

3. Bind Redux Provider to App

```js
// src/index.js
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
```

4. Using redux in component

```js
// features/Todo/pages/ListPage.jsx
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, selectTodoList } from '../todoSlice';

function TodoListPage() {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

  const handleTodoClick = (todoId) => {
    const action = removeTodo(todoId);
    dispatch(action);
  };

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id} onClick={() => handleTodoClick(todo.id)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
```

**Example redux saga**

- [productSlice.ts](src/features/Product/productSlice.ts)
- [productSaga.ts](src/features/Product/productSaga.ts)
