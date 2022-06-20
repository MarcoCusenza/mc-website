import Link from "next/Link";

import commonStyles from "../../styles/commons.module.scss";

export default function Header() {
  return (
    <header className={commonStyles.header}>
      <nav>
        <Link href="#" scroll={true}>
          <a>Home</a>
        </Link>
        <Link href="#works" scroll={true}>
          <a>Works</a>
        </Link>
        <Link href="#about" scroll={true}>
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
}
