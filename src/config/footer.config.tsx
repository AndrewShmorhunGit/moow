import { TelegramIcon, GithubIcon, LinkedinIcon } from "@/assets/icons/footer";

type FooterData = {
  link: string;
  icon: typeof TelegramIcon | typeof LinkedinIcon | typeof GithubIcon;
};

export const footerConfig: FooterData[] = [
  { link: "https://t.me/AndrewShmorhun", icon: TelegramIcon },
  {
    link: "https://www.linkedin.com/in/andrew-shmorhun-850a76209/",
    icon: LinkedinIcon,
  },
  { link: "https://github.com/AndrewShmorhunGit", icon: GithubIcon },
];
