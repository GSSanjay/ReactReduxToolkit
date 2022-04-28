import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, getPosts } from "./reducer";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const { entities, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h2>Blog Posts</h2>
      {entities.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default App;
