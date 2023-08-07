import "./Section2.css";
import Card from "./Card";
import { data } from "./data";

export default function Section2() {
  return (
    <section className="section2">
      <h2>Our services</h2>
      <hr />
      <p>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="card-container">
        {data.map((e) => (
          <Card data={e} />
        ))}
      </div>
      <button>Learn more</button>
    </section>
  );
}
