import Hero from "../../components/hero";
import washingtonBeach from "../../assets/images/scenery/coast-rocks-horizontal.jpg";

export default function TeamPage() {
  return (
    <div>
      <Hero header="Our Team" backgroundImg={washingtonBeach} />
    </div>
  );
}
