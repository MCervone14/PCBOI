import Link from "next/link";

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

const SiteFooter = () => {
  return (
    <footer className="w-full bg-background border-t border-primary">
      <div className="">
        <div className="text-center text-primary py-3">
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
        <div className="flex justify-center items-center">
          <Link href="/" className={`text-3xl hover:text-yblue mr-4`}>
            PCBOI
          </Link>
          <p className="text-sm text-primary opacity-95">© 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
