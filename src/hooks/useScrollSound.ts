import { useEffect } from "react";
import useSound from "use-sound";
export const useScrollSound = () => {
  const [playPageChange] = useSound("");

  useEffect(() => {
    let lastScrollTime = 0;
    const scrollDelay = 1000; // Minimum time between sounds (ms)

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime >= scrollDelay) {
        const sections = document.querySelectorAll("section");
        const viewportHeight = window.innerHeight;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          console.log(
            "rect.top >= 0 && rect.top <= viewportHeight / 2",
            rect.top >= 0 && rect.top <= viewportHeight / 2
          );
          if (rect.top >= 0 && rect.top <= viewportHeight / 2) {
            playPageChange();
            lastScrollTime = now;
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [playPageChange]);
};
