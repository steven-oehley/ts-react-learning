import { FC, type ReactNode } from "react";

interface HeaderProps {
  // can use interface or type
  image: { src: string; alt: string };
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {/* same as doing this, src={image.src} alt={image.alt} but key value pairs are spread as props /> */}
      {children}
    </header>
  );
};
export default Header;
