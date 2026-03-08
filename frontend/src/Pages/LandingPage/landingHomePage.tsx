import usePageTitle from "../../Utils/commonFunction";
import PageHeader from "../../Components/header";
import "../../Styles/LandingPageCss/landingPage.css"
import { useTranslation } from "react-i18next";

export default function LandingHomePage() {
  usePageTitle("Only Cals");
  const {t:translate}=useTranslation();
  return (
    <>
      <PageHeader></PageHeader>
      <div className="container-fluid LandingPagePadding">
        {/* Section A */}
        <div className="vh-75 fixedBackgroundImage">
          <div className="bg-white ms-250px opacity-85 w-30 h-100 text-center d-flex flex-column align-items-center justify-content-center LandingPageTextColor-4">
            <h2 className="w-75 lh-base">
              {translate("LADNING_PAGE.BETTER_HEALTH_STARTS")}
            </h2>
            <ul className="w-75 text-start mt-1 ArrowUlStyle">
              <li className="fs-3">{translate("LADNING_PAGE.TRACK_CALORIES")}</li>
              <li className="fs-3">{translate("LADNING_PAGE.DISCOVER_NUTRITION")}</li>
              <li className="fs-3">{translate("LADNING_PAGE.BUILD_SMARTER_HABITS")}</li>
            </ul>
            <button className="landingPageSignUpButton fw-light rounded-1 py-2 px-5 border border-1 border-black">{translate("COMMON.SIGN_IN")}</button>
          </div>
        </div>
        {/* Section B */}
        <div className="vh-100"></div>
      </div>
    </>
  );
}
