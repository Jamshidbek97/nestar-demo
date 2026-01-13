import { useEffect, useState } from "react";

const getDeviceType = (): "mobile" | "desktop" => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 768 ? "mobile" : "desktop";
  }
  return "desktop"; // default fallback during SSR
};

const useDeviceDetect = (): "mobile" | "desktop" => {
  const [device, setDevice] = useState<"mobile" | "desktop">("desktop");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateDevice = () => {
      const currentDevice = getDeviceType();
      setDevice((prev) => (prev !== currentDevice ? currentDevice : prev));
    };

    updateDevice(); // Check immediately on mount
    window.addEventListener("resize", updateDevice);

    return () => {
      window.removeEventListener("resize", updateDevice);
    };
  }, []);

  return device;
};

export default useDeviceDetect;
