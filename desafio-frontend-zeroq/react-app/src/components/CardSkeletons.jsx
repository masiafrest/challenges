import Card from "./Card";

export default function CardSkeletons({ skeletons }) {
  return Array(skeletons)
    .fill(null)
    .map((e, idx) => (
      <Card key={idx} name={""} online={false} waiting={""} elapsed={""} />
    ));
}
