import React, { useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import Header from "@src/components/Header";
import FeedbackModal from "@src/components/FeedbackModal";
import Footer from "@src/components/Footer";
import IntroSplashScreen from "@src/components/IntroSplashScreen";

const ENABLE_INTRO_ANIMATION = true;

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const { i18n } = useTranslation();

  const [introVideosLoaded, setIntroVideosLoaded] = useState(false);

  useGSAP(
    () => {
      if (!ENABLE_INTRO_ANIMATION) return;

      if (!introVideosLoaded) return;

      gsap.to(".gsap-splashscreen-container", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".gsap-splashscreen-container", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 3,
      });

      gsap.to(".gsap-content-container", {
        opacity: 1,
        duration: 1,
        ease: "power2.in",
        delay: 3,
      });
    },
    {
      dependencies: [introVideosLoaded],
    },
  );

  const mainPageContent = (
    <>
      <Header />
      <main
        className={clsx(
          "relative",
          i18n.language === "en" ? "font-sans" : "font-noto",
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );

  return (
    <>
      {ENABLE_INTRO_ANIMATION && (
        <div style={{ opacity: 0 }} className="gsap-splashscreen-container">
          <IntroSplashScreen onVideoLoaded={() => setIntroVideosLoaded(true)} />
        </div>
      )}
      {ENABLE_INTRO_ANIMATION ? (
        <div style={{ opacity: 0 }} className="gsap-content-container">
          {mainPageContent}
        </div>
      ) : (
        mainPageContent
      )}
      <FeedbackModal />
    </>
  );
};

export default Layout;
