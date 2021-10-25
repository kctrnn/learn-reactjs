import TodoCard from 'features/Todo/components/TodoCard';

function App() {
  return (
    <div className="app">
      <TodoCard text="Learn HTML/CSS" />
      <TodoCard text="Learn Javascript" />
      <TodoCard text="Learn ReactJS" />
    </div>
  );
}

export default App;
