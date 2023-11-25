import { TelegramIcon, GithubIcon, LinkedinIcon } from "@/assets/icons/footer";

type FooterData = {
  link: string;
  icon: typeof TelegramIcon | typeof LinkedinIcon | typeof GithubIcon;
};
export function Footer() {
  const footer: FooterData[] = [
    { link: "https://t.me/your_telegram", icon: TelegramIcon },
    { link: "https://www.linkedin.com/in/your_linkedin", icon: LinkedinIcon },
    { link: "https://github.com/your_github", icon: GithubIcon },
  ];

  return (
    <footer className={`center`} style={{ padding: "1rem 0" }}>
      {footer.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 30px" }}
          >
            <Icon size={24} fill={"#000"} />
          </a>
        );
      })}
    </footer>
  );
}
