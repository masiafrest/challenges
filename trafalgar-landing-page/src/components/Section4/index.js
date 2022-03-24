import "./Section4.css";
import ilustracion from "./images/ilustration.png";
import arrowDown from "./images/arrowDown.svg";

export default function Section4() {
  return (
    <section className="section4">
      <article>
        <h2>Download our mobile apps</h2>
        <hr />
        <p>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <div>
          <button>
            Download{" "}
            <img src={arrowDown} style={{ height: "15px", width: "auto" }} />
          </button>
        </div>
      </article>
      <img src={ilustracion} />
    </section>
  );
}
