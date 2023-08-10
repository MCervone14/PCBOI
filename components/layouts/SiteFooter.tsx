import Link from "next/link";

import { Caesar_Dressing } from "next/font/google";

const links = [
  {
    title: "CheapShark Pricing Api",
    href: "https://apidocs.cheapshark.com/",
    ariaLabel: "CheapShark",
  },
  {
    title: "IGDB Api",
    href: "https://api-docs.igdb.com/#getting-started",
    ariaLabel: "IGDB Api",
  },
  {
    title: "Steam Api",
    href: "https://steamcommunity.com/dev",
    ariaLabel: "Steam Api",
  },
];

const Caesar = Caesar_Dressing({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const SiteFooter = () => {
  return (
    <footer className="w-full  bg-background border-t border-primary ">
      <div className="container flex flex-col gap-x-5 items-center justify-center space-y-1 py-5 md:h-16 md:flex-row md:py-0">
        <div className="text-center text-base text-primary ">
          {links.map((link, idx) => (
            <Link
              target="_blank"
              key={idx}
              href={link.href}
              aria-label={link.ariaLabel}
              className="pr-5 hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link
            href="/"
            className={`text-3xl ${Caesar.className} hover:text-yblue mr-4`}
          >
            PCBOI
          </Link>
          <p className="mt-4 text-sm text-primary sm:mt-0 opacity-50">© 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
