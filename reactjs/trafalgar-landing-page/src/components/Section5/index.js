import "./Section5.css";
import founder from "./images/founder.png";

export default function Section5() {
  return (
    <section className="section-card">
      <h2>What our customer are saying</h2>
      <hr />
      <div className="card-body-grid">
        <div className="card-body">
          <div className="founder-img">
            <img src={founder} />
          </div>
          <div className="card-founder-container">
            <h3>Edward Newgate</h3>
            <span>Founder Circle</span>
          </div>
        </div>
        <p>
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </p>
      </div>
    </section>
  );
}
