import { useState, useEffect } from "react";

export const useIsDesktop = (breakpoint = 1024) => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : true,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
};
