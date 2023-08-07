import "./Section6.css";
import CardImg from "./CardImg";
import image from "./images/image.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

export default function Section6() {
  return (
    <div className="section6">
      <h2>Check out our latest article</h2>
      <hr />
      <div className="card-grid">
        <CardImg
          image={image}
          h3="Disease detection, check up in the laboratory"
          p="In this case, the role of the health laboratory is very important to
          do a disease detection..."
        />
        <CardImg
          image={image2}
          h3="Herbal medicines that are safe for consumption"
          p="Herbal medicine is very widely used at this time because of its very good for your health..."
        />
        <CardImg
          image={image3}
          h3="Natural care for healthy facial skin"
          p="A healthy lifestyle should start from now and also for your skin health. There are some..."
        />
      </div>
      <button>View all</button>
    </div>
  );
}
