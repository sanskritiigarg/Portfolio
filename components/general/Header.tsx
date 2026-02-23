import React from "react";

interface HeaderProps {
  title: string;
  as?: "h1" | "h2";
}

function Header({title, as:Tag = "h1"}: HeaderProps) {
  const classes = {
    h1: "text-3xl md:text-4xl",
    h2: "text-2xl md:text-3xl"
  }

  return (
    <div className="py-14 md:py-20">
      <Tag className={`font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-accent to-surface text-center ${classes[Tag]}`}>
        {title}
      </Tag>
    </div>
  )
}

export default Header;
