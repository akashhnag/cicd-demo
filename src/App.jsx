import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <h1>React CI/CD Demo</h1>

      <p className="subtitle">
        A simple React application for learning Azure DevOps CI/CD.
      </p>

      <section className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>

        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </section>

      <section className="card">
        <h2>CI/CD Learning Flow</h2>
        <ol>
          <li>Push code to Git</li>
          <li>Azure Pipeline installs dependencies</li>
          <li>Pipeline runs tests</li>
          <li>Pipeline creates a production build</li>
          <li>Build output becomes an artifact</li>
          <li>Artifact is deployed to Azure</li>
        </ol>
      </section>

      <p className="footer">
        Change this text later and push it to Git to see CI/CD in action.
      </p>
    </main>
  );
}

export default App;