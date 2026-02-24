import Image from "next/image";

interface LinkProps {
  label: string;
  url: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  links?: LinkProps[];
  live?: string;
}

function ProjectCard({
  image,
  title,
  description,
  links,
  live,
}: ProjectCardProps) {
  return (
    <div className="border p-4 rounded-lg border-border shadow-md shadow-muted mb-4">
      <Image
        src={image}
        alt="project-image"
        width={475}
        height={400}
        className="rounded-lg"
      />
      <p className="my-4 text-xl sm:text-2xl font-semibold text-surface">
        {title}{" "}
      </p>
      <p className="font-medium text-accent mb-4 ">{description}</p>
      <div className="flex justify-between text-muted underline underline-offset-4 mb-4">
        {links && (
          <p className="space-x-4 ">
            {links?.map((link) => (
              <a
                href={link.url}
                target="_blank"
                key={link.label}
                className="hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
          </p>
        )}
        {live && (
          <a href={live} target="_blank" className="hover:opacity-80 px-4">
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
