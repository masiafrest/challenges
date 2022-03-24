import ilustracion from "./images/ilustration.png";
import "./Section1.css";

export default function Section1() {
  return (
    <section className="section1" id="section1">
      <article>
        <h2>Virtual healthcare for you</h2>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <div>
          <button>Consult today</button>
        </div>
      </article>
      <img src={ilustracion} />
    </section>
  );
}
