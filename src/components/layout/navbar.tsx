import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="fixed bottom-0 flex h-20 w-full items-center justify-center gap-12 md:sticky md:h-auto md:w-32 md:flex-col">
        {icons.map((icon) => (
          <Icon key={icon.src} alt={icon.alt} src={icon.src} />
        ))}
      </nav>
    </>
  );
}

const Icon = ({ src, alt }: { alt: string; src: string }) => {
  return <Image src={`/images/${src}`} alt={alt} width={30} height={30} />;
};

const icons = [
  { src: "img_home.svg", alt: "home" },
  { src: "img_user.svg", alt: "users" },
  { src: "img_grid.svg", alt: "services" },
  { src: "img_settings.svg", alt: "settings" },
];
