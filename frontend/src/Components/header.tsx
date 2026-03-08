import { useState } from "react";
import { headerLogo } from "../Utils/commonFunction";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function PageHeader() {
  const [isUserLogined] = useState(false);
  const { t: translate } = useTranslation();

  return (
    <div className="container-fluid LandingPagePadding py-3 border-2 border sticky-top bg-white">
      {!isUserLogined && (
        <div className="d-flex align-items-center">
          <div className="w-25">
            <img src={headerLogo.WHITE_LOGO} alt="OnlyCals Logo" height="60" />
          </div>

          <div className="w-75 d-flex align-items-end flex-column Segoe_UI">
            <div className="d-flex align-items-center gap-3 fs-5 mb-2">
              <FontAwesomeIcon
                icon={faUser}
                className="bg-black text-white rounded-circle p-1 icon-2"
              />
              <button className="mb-0 border-0 LandingPageTextColor-1 p-0 m-0 bg-transparent">
                {translate("COMMON.LOGIN")}
              </button>
            </div>
            <div className="d-flex gap-5 justify-content-end fs-5">
              <p className="mb-0">{translate("HEADER.HOME")}</p>
              <p className="mb-0">{translate("HEADER.ABOUT")}</p>
              <p className="mb-0">{translate("HEADER.SERVICES")}</p>
              <p className="mb-0">{translate("HEADER.CONTACT")}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
