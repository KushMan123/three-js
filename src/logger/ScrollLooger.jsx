import { useEffect } from "react";
import { useScrollStore } from "../store/scrollStore";

export const ScrollLogger = () => {
  const { dreiScroll, isScrolling } = useScrollStore();

  useEffect(() => {
    console.log("Drei Scroll:", dreiScroll, "IsScrolling:", isScrolling);
  }, [dreiScroll, isScrolling]);
};
