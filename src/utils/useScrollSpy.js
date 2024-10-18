import { useState, useEffect } from "react";

const useScrollSpy = (ids, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ids.map((id) => document.getElementById(id));
      let active = "";

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            active = section.id;
          }
        }
      });

      setActiveId(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
};

export default useScrollSpy;
