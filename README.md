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
