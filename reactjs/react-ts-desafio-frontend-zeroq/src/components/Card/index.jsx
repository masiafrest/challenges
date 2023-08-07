import "./card.css";
export default function Card() {
  return (
    <div className="card">
      <div className="body">nombre de la oficina</div>
      <footer className="footer">
        <div>personas en filas</div>
        <div>tiempo promedio de espera</div>
        <div>void</div>
      </footer>
    </div>
  );
}
