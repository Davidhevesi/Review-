import './App.css'
import Review from './Review'

function App() {
  return (
    <main className="container">
      <section className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </section>
      <Review />
    </main>
  )
}

export default App
