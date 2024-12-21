import LegalPage from "../../components/legalPage";
import { privacyPolicy } from "../../config/privacyPolicy";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <LegalPage content={privacyPolicy} />
    </div>
  );
}
