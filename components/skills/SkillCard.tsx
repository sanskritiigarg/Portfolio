import React from "react";
import { IconType } from "react-icons";

interface SkillProps {
  name: string;
  icon: IconType;
  delay: Number;
}

function SkillCard({name, icon: Icon, delay}: SkillProps) {
  return (
    <div className="bg-primary/70 text-center w-20 h-20 md:h-28 md:w-28 rounded-2xl flex flex-col items-center justify-center shadow-md shadow-accent transition hover:scale-110" data-aos="flip-right" data-aos-delay={delay}>
      <div className="text-2xl md:text-4xl">
        <Icon />
      </div>
      <p className="text-base md:text-lg">{name}</p>
    </div>
  )
}

export default SkillCard;
