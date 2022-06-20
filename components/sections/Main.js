import styles from "../../styles/sectionstyle/main.module.scss";
import commonStyles from "../../styles/commons.module.scss"

import Landing from "./Landing";
import Works from "./Works";
import About from "./About";

import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Main() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE,
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff5f8c,
          backgroundColor: 0x3c3c3c,
          points: 12.0,
          maxDistance: 20.0,
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <main className={styles.main} ref={vantaRef}>
      <div className={commonStyles.container}>
        <Landing />

        <Works />

        <About />
      </div>
    </main>
  );
}
