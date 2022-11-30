import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="fixed bottom-0 z-10 flex h-20 w-full items-center justify-center gap-12 bg-white_day dark:bg-white_night md:sticky md:h-auto md:w-32 md:flex-col md:justify-start md:pt-[20vh] xl:w-[10vw]">
        {icons.map((icon) => (
          <Link href={icon.href} key={icon.src}>
            <Icon alt={icon.alt} src={icon.src} />
          </Link>
        ))}
      </nav>
    </>
  );
}

const Icon = ({ src, alt }: { alt: string; src: string }) => {
  return (
    <Image
      src={`/images/${src}`}
      alt={alt}
      width={30}
      height={30}
      className="cursor-pointer"
    />
  );
};

const icons = [
  { src: "img_home.svg", alt: "home", href: "/" },
  { src: "img_user.svg", alt: "users", href: "/users" },
  { src: "img_grid.svg", alt: "services", href: "/services" },
  { src: "img_settings.svg", alt: "settings", href: "/settings" },
];
