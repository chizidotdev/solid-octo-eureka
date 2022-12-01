import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="fixed bottom-0 z-10 flex h-20 w-full items-center justify-center gap-6 bg-white_day dark:bg-white_night md:sticky md:h-auto md:w-32 md:flex-col md:justify-start md:pt-[20vh] xl:w-[10vw]">
        {icons.map((icon) => (
          <Link href={`/${icon.href}`} key={icon.src}>
            <Icon alt={icon.alt} src={icon.src} href={icon.href} />
          </Link>
        ))}
      </nav>
    </>
  );
}

const Icon = ({ src, alt, href }: typeof icons[0]) => {
  const { pathname } = useRouter();
  // const active = href === pathname;
  const active = href !== "" && pathname.includes(href);

  return (
    <div className={`rounded-full p-4 ${active ? "bg-gray_day" : ""}`}>
      <Image
        src={`/images/${src}`}
        alt={alt}
        width={25}
        height={25}
        className="cursor-pointer"
      />
    </div>
  );
};

const icons = [
  { src: "img_home.svg", alt: "home", href: "" },
  { src: "img_user.svg", alt: "users", href: "users" },
  { src: "img_grid.svg", alt: "services", href: "services" },
  { src: "img_settings.svg", alt: "settings", href: "settings" },
];
