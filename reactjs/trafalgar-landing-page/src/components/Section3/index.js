import ilustracion from "./images/ilustration.png";
import "./Section3.css";

export default function Section3() {
  return (
    <section className="section3">
      <img src={ilustracion} />
      <article>
        <h2>Leading healthcare providers</h2>
        <hr />
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <div>
          <button>Learn more</button>
        </div>
      </article>
    </section>
  );
}
