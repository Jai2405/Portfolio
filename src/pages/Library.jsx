export default function Library() {
  return (
    <main>
      <h1>Library</h1>

      <section className="books">
        <h2>Books</h2>

        <div className="book">
          <h3>Sapiens</h3>
          <p className="author">Yuval Noah Harari</p>
          <p>Interesting perspective on how society as we know it was formed</p>
        </div>

        <div className="book">
          <h3>Mahabharata</h3>
          <p>A story about war, strategy, politics and the complexity of human nature</p>
        </div>
      </section>

      <section className="quotes">
        <h2>Quotes</h2>

        <blockquote>
          <p>"The highest form of human intelligence is to observe without judgment"</p>
          <footer>— J. Krishnamurti</footer>
        </blockquote>

        <blockquote>
          <p>"An investment in knowledge pays the best interest"</p>
          <footer>— Jawaharlal Nehru</footer>
        </blockquote>

        <blockquote>
          <p>"It is not that we have a short time to live, but that we waste much of it."</p>
          <footer>— Seneca</footer>
        </blockquote>
      </section>
    </main>
  );
}
