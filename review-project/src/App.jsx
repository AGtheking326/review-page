import { useState } from "react";
import { reviews } from "./data";

function App() {
  const [currIndex, setCurrentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const currReview = reviews[currIndex];

  const prevReview = () => {
    let currId = currIndex - 1;
    if (currId < 0) {
      currId = reviews.length - 1;
    }
    setCurrentIndex(currId);
  };

  const nextReview = () => {
    let currId = currIndex + 1;
    if (currId >= reviews.length) {
      currId = 0;
    }
    setCurrentIndex(currId);
  };

  const randomReview = () => {
    const idx = Math.floor(Math.random() * reviews.length);
    setCurrentIndex(idx);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={darkMode ? "dark-mode" : ""}>
      <section className="container">
        <div className="title">
          <h2>Voices of Experience</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img src={currReview.image} alt="Error" id="person-img" />
          </div>

          <h4 id="author">{currReview.username}</h4>
          <p id="job">{currReview.job}</p>
          <p id="info">{currReview.text}</p>

          <div className="button-container">
            <button className="prev-btn" onClick={prevReview}>
              &#x2039;
            </button>
            <button className="next-btn" onClick={nextReview}>
              &#x203A;
            </button>
          </div>

          <button className="random-btn" onClick={randomReview}>
            New Testimonial
          </button>

          {/* Dark Mode Toggle Button */}
          <button className="darkmode-btn" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;
