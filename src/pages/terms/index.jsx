import LegalPage from "../../components/legalPage";
import { terms } from "../../config/terms";

export default function Terms() {
  return (
    <div className="terms-page">
      <LegalPage content={terms} />
    </div>
  );
}
