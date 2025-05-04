// hooks.js
import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";

export function useModalLifecycle(isOpen, onClose, setShowModal) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);
}

export function useIntlTelInput(ref, isOpen) {
  const itiRef = useRef(null);
  useEffect(() => {
    if (isOpen && ref.current) {
      itiRef.current = intlTelInput(ref.current, {
        separateDialCode: true,
        initialCountry: "auto",
        geoIpLookup: (cb) => cb("ke"),
      });
    }
    return () => {
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, [isOpen, ref]);
  return itiRef;
}
