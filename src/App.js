import "./App.css";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <section className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </section>
        <Review />
      </section>
    </main>
  );
}

export default App;
