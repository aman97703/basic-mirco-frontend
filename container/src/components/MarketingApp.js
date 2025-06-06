import React from "react";
import { mount as MarketingAppMount } from "marketing/MarketingApp";
import { useRef } from "react";
import { useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);

  // use effect
  useEffect(() => {
    if (ref.current) {
      MarketingAppMount(ref.current);
    }
  }, [ref.current]);

  return <div ref={ref} />;
};

export default MarketingApp;
