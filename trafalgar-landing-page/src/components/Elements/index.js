import "./Elements.css";
import GreyDot from "./GreyDot";

export default function Elements() {
  const dots = 15;
  const greydots = [];
  for (let i = 0; i < 15; i++) {
    greydots.push(<GreyDot />);
  }

  return <div className="bullets">{greydots}</div>;
}
