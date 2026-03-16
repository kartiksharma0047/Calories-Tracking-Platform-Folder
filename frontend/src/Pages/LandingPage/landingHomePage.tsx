import usePageTitle from "../../Utils/commonFunction";
import PageHeader from "../../Components/header";
import "../../Styles/LandingPageCss/landingPage.css";
import { useTranslation } from "react-i18next";
import LandingPageImage2 from "../../Assets/images/LandingPageImage(2).jpg";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { useScrollReveal } from "../../Animations/scrollAnimation";

export default function LandingHomePage() {
  usePageTitle("Only Cals");
  const { t: translate } = useTranslation();

  const sectionRef = useRef(null);

  const { scrollY } = useScroll();

  const smoothScroll = useSpring(scrollY, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  // RIGHT SIDE (appears earlier)
  const rightHeading = useScrollReveal(smoothScroll, {
    direction: "right",
    start: 100,
    end: 350,
  });

  const rightText = useScrollReveal(smoothScroll, {
    direction: "right",
    start: 200,
    end: 450,
  });

  const rightButton = useScrollReveal(smoothScroll, {
    direction: "right",
    start: 470,
    end: 720,
  });

  // LEFT SIDE (later)
  const leftHeading = useScrollReveal(smoothScroll, {
    direction: "left",
    start: 800,
    end: 1050,
  });

  const leftText = useScrollReveal(smoothScroll, {
    direction: "left",
    start: 820,
    end: 1070,
  });

  const leftButton = useScrollReveal(smoothScroll, {
    direction: "left",
    start: 850,
    end: 1200,
  });

  return (
    <>
      <PageHeader />

      <div className="landingPage theme-transition container-fluid LandingPagePadding bg-background overflow-hidden">
        {/* Section A */}
        <div className="LandingPageSectionA fixedBackgroundImage1">
          <div className="theme-transition bg-background ms-250px opacity-85 w-30 h-100 text-center d-flex flex-column align-items-center justify-content-center LandingPageTextColor-SectionText">
            <h2 className="w-75 lh-base">
              {translate("LADNING_PAGE.BETTER_HEALTH_STARTS")}
            </h2>

            <ul className="w-75 text-start mt-1 CircleUlStyle">
              <li className="fs-3">
                {translate("LADNING_PAGE.TRACK_CALORIES")}
              </li>
              <li className="fs-3">
                {translate("LADNING_PAGE.DISCOVER_NUTRITION")}
              </li>
              <li className="fs-3">
                {translate("LADNING_PAGE.BUILD_SMARTER_HABITS")}
              </li>
            </ul>

            <button className="landingPageButton fw-light rounded-1 py-2 px-5">
              {translate("COMMON.SIGN_IN")}
            </button>
          </div>
        </div>

        {/* Section B */}
        <div
          ref={sectionRef}
          className="LandingPageSectionB d-flex flex-row LandingPageTextColor-SectionText"
        >
          <div className="ms-250px">
            <img src={LandingPageImage2} alt="Images" className="mb-5 h-70" />
            <div className="mt-5">
              <motion.h2
                className="mb-5"
                style={{
                  x: leftHeading.x,
                  opacity: leftHeading.opacity,
                  filter: leftHeading.blur,
                }}
              >
                {translate("LADNING_PAGE.SMART_TOOLS_NUTRITION")}
              </motion.h2>

              <motion.h4
                className="mb-5"
                style={{
                  x: leftText.x,
                  opacity: leftText.opacity,
                  filter: leftText.blur,
                }}
              >
                {translate("LADNING_PAGE.SMART_TOOLS_NUTRITION_DESCRIPTION")}
              </motion.h4>

              <motion.button
                className="landingPageButton fw-light rounded-1 py-2 px-5"
                style={{
                  x: leftButton.x,
                  opacity: leftButton.opacity,
                  filter: leftButton.blur,
                }}
              >
                {translate("LADNING_PAGE.WHAT_WE_PROVIDE")}
              </motion.button>
            </div>
          </div>
          <div>
            <div className="ms-5 pb-5 d-flex flex-column justify-content-end h-60">
              <motion.h2
                className="mb-0"
                style={{
                  x: rightHeading.x,
                  opacity: rightHeading.opacity,
                  filter: rightHeading.blur,
                }}
              >
                {translate("LADNING_PAGE.TRANSFORM_NUTRITION_TRACK")}
              </motion.h2>

              <motion.h4
                className="w-90 mt-5"
                style={{
                  x: rightText.x,
                  opacity: rightText.opacity,
                  filter: rightText.blur,
                }}
              >
                {translate(
                  "LADNING_PAGE.TRANSFORM_NUTRITION_TRACK_DESCRIPTION",
                )}
              </motion.h4>

              <motion.button
                className="my-5 landingPageButton fw-light rounded-1 py-2 px-5 w-25"
                style={{
                  x: rightButton.x,
                  opacity: rightButton.opacity,
                  filter: rightButton.blur,
                }}
              >
                {translate("LADNING_PAGE.READ_MORE")}
              </motion.button>
            </div>

            <div className="landingPageCustomFixed1">
              <div className="fixedBackgroundImage2"></div>
            </div>
          </div>
        </div>

        {/* Section C */}
        <div className="vh-100"></div>
      </div>
    </>
  );
}
