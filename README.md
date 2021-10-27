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

### 📰 How to use `useMemo`

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- Nhận vào 2 tham số: 1 là `function`, 2 là `dependencies`
- Return `memoized value`
- Chỉ tính toán value mới khi dependencies thay đổi
- Nếu dùng empty dependencies thì không bao giờ tính toán lại value mới

Demo

```js title='/features/Todo/ListPage'
const [todoList, setTodoList] = useState(initTodoList);

const renderedTodoList = useMemo(() => {
  return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
}, [todoList, filteredStatus]);

<TodoList todoList={renderedTodoList} />;
```

### 📰 Form module

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
