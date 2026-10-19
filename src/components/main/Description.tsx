import "./Description.scss";

type DescriptionProps = {
  description: string;
};

export default function Description({ description }: DescriptionProps) {
  return <p className="description">{description}</p>;
}
