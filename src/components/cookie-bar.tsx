import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button, { ButtonType } from './shared/button';

const CONSENT_KEY = "cookie_consent_status";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if consent has already been given or declined
    const consentStatus = localStorage.getItem(CONSENT_KEY);
    if (!consentStatus) {
      setIsVisible(true);
    } else if (consentStatus === "granted") {
      updateGtagConsent("granted");
    }
  }, []);

  const updateGtagConsent = (status: "granted" | "denied") => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateGtagConsent("granted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    updateGtagConsent("denied");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-5 bg-beige/85 rounded-xl shadow-inner shadow-mauve-600"
        >
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">
              Nastavení soukromí a cookies
            </h3>
            <p className="leading-relaxed">
              Abychom věděli, kolik z vás se zajímá o ovlivnění osudu Evropy, měříme návštěvnost pomocí anonymních analytických cookies Google Analytics.
            </p>
            <div className="flex gap-6 pt-2 justify-end">
              <Button
                onClick={handleDecline}
                buttonType={ButtonType.GHOST}
                className="rounded-md bg-white hover:bg-gray-100 w-32"
              >
                Odmítnout
              </Button>
              <Button
                onClick={handleAccept}
                buttonType={ButtonType.GHOST}
                className="rounded-md bg-gold w-32 hover:bg-amber-300"
              >
                Přijmout
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
