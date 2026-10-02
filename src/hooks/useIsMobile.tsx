import { breakpoints } from "@libs/globals";
import { useViewportSize } from "@mantine/hooks";
import React from "react";

/**
 * Hook to calculate whether the user is on a mobile device based on screen width
 */
const useIsMobile = (): boolean => {
  const { width } = useViewportSize();
  const [isMobile, setIsMobile] = React.useState<boolean>(
    width <= breakpoints.md && width !== 0,
  );

  React.useEffect(() => {
    if (width <= breakpoints.md && width !== 0) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return isMobile;
};
export default useIsMobile;
