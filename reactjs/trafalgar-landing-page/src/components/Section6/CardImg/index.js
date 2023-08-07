export default function CardImg({ image, h3, p }) {
  return (
    <div className="card-flex">
      <div className="card-header card-img">
        <img src={image} />
      </div>
      <div className="flex-columns card-body">
        <h3>{h3}</h3>
        <p>{p}</p>
        <a href="">Read more ➡️</a>
      </div>
    </div>
  );
}
