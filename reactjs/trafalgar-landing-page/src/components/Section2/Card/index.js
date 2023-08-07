import "./Card.css";
export default function Card({ data }) {
  const { img, title, description } = data;
  return (
    <div className="card">
      <img src={img} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
