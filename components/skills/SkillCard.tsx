import React from "react";
import { IconType } from "react-icons";

interface SkillProps {
  name: string;
  icon: IconType;
}

function SkillCard({name, icon: Icon}: SkillProps) {
  return (
    <div className="bg-primary/70 text-center w-32 h-36 rounded-3xl flex flex-col items-center justify-center shadow-md shadow-accent transition hover:scale-110">
      <div className="text-5xl p-2">
        <Icon />
      </div>
      <p className="text-lg py-4">{name}</p>
    </div>
  )
}

export default SkillCard;
