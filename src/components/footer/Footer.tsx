import { footerConfig as footer } from "@/config/footer.config";

export function Footer() {
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
