import "../styles/globals.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // When component mount this script will be attached
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js");
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    
    // When component unmount this script will be removed
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
