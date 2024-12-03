import HeaderContainer from "../../components/headerContainer";
import "./styles.scss";
import viewFromFerry from "../../assets/images/scenery/view-from-ferry.jpg";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <HeaderContainer header="Our Services" backgroundImg={viewFromFerry} />
    </div>
  );
}
