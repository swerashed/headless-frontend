import Link from "next/link";

function LinkGroups({ heading, links }) {
  return (
    <div className="flex flex-col">
      <h4 className="mb-4 font-onest text-xl font-medium text-dark">
        {heading}
      </h4>
      <div className="flex flex-col gap-3 overflow-hidden font-inter font-normal text-dark/80">
        {links.map((link) => (
          <Link
            key={link.id}
            href="/"
            className="transition-all duration-300 hover:underline"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LinkGroups;
