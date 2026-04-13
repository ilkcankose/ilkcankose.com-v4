import Image from "next/image";

type Project = {
  title: string;
  type: string;
  href: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Project Name",
    type: "Project Type",
    href: "#",
    image: "/assets/placeholder.svg",
  },
  {
    title: "Project Name",
    type: "Project Type",
    href: "#",
    image: "/assets/placeholder.svg",
  },
  {
    title: "Project Name",
    type: "Project Type",
    href: "#",
    image: "/assets/placeholder.svg",
  },
];

export default function Home() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="nameBlock">
          <h1 className="name">Ilkcan Kose</h1>
          <div className="socialLinks">
            <a
              href="https://linkedin.com/in/ilkcankose"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ilkcankose"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/ilkcankose"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="bioBlock">
          <div className="bio">
            <p>Started thinking and creating in 2012.</p>
            <p>Studied product design.</p>
            <p>Now designing end-to-end from idea to impact.</p>
          </div>
          <p className="year">2026</p>
        </div>
      </aside>

      <main className="works">
        {projects.map((p, i) => (
          <article className="workItem" key={i}>
            <header className="workHeader">
              <a className="workTitle" href={p.href}>
                {p.title}
                <Image
                  src="/assets/arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="arrow"
                />
              </a>
              <div className="tags">
                <span>{p.type}</span>
              </div>
            </header>
            <div className="workImageFrame">
              <img src={p.image} alt={`${p.title} preview`} />
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
