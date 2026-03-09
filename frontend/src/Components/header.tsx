import { useState } from "react";
import { headerLogo } from "../Utils/commonFunction";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons/faCircleHalfStroke";
import { useTheme } from "../Utils/useTheme";
import { ChangeTranslation, languages } from "../Utils/translations/translation";
import "../Styles/headerComponentCss/headerComponent.css";

export default function PageHeader() {
  const [isUserLogined] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { i18n, t: translate } = useTranslation();
  const { isLightTheme, toggleTheme } = useTheme();

  const changeLanguage = (lng: string) => {
    ChangeTranslation.changeLanguage(lng);
    setIsLangOpen(false);
  };

  return (
    <div className="theme-transition container-fluid LandingPagePadding py-3 sticky-top bg-background text-color">
      {!isUserLogined && (
        <div className="d-flex align-items-center">
          <div className="w-25">
            <img
              src={isLightTheme ? headerLogo.BLACK_LOGO : headerLogo.WHITE_LOGO}
              alt="OnlyCals Logo"
              height="60"
            />
          </div>

          <div className="w-75 d-flex align-items-end flex-column Segoe_UI">

            {/* login */}
            <div className="d-flex align-items-center gap-3 fs-5">
              <FontAwesomeIcon
                icon={faUser}
                className="headerComponent fontAwsomeUserIcon text-color rounded-circle p-1 icon-2"
              />
              <button className="mb-0 border-0 LandingPageTextColor-LoginBtn p-0 m-0 bg-transparent">
                {translate("COMMON.LOGIN")}
              </button>
            </div>

            <div className="w-100 row fs-5">
              <div className="d-flex gap-6 justify-content-center col-md-8 align-items-center">
                <p className="mb-0">{translate("HEADER.HOME")}</p>
                <p className="mb-0">{translate("HEADER.ABOUT")}</p>
                <p className="mb-0">{translate("HEADER.SERVICES")}</p>
                <p className="mb-0">{translate("HEADER.CONTACT")}</p>
              </div>
              <div className="d-flex gap-5 col-md-4 justify-content-end align-items-center">
                <div className="position-relative LandingPagePointer mt-1">
                  <div
                    className="d-flex align-items-center"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    <span className="fs-6">{i18n.language.toUpperCase()}</span>
                    <FontAwesomeIcon icon={faCaretDown} className="icon-2 ms-1"/>
                  </div>
                  {isLangOpen && (
                    <div className="languageDropdown text-center bg-white text-black position-absolute top-100 end-0">
                      {languages.map((lang) => (
                        <div
                          key={lang.code}
                          className="languageOption fs-6 LandingPagePointer"
                          onClick={() => changeLanguage(lang.code)}
                        >
                          {lang.label}
                        </div>
                      ))}
                    </div>
                  )}

                </div>
                <FontAwesomeIcon
                  icon={faCircleHalfStroke}
                  onClick={toggleTheme}
                  className={`LandingPagePointer icon-2 mt-1 ${isLightTheme ? "" : "fa-flip-horizontal"}`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}