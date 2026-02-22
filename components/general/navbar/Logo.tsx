import Image from "next/image";
import React from "react";

import Link from "next/link";

function Logo() {
  return (
    <div className="border border-primary bg-amber-100/80 rounded-full p-1">
      <Link href="#home">
        <Image src="/iris.png" width={40} height={40} alt="Sanskriti"/>
      </Link>
    </div>
  )
}

export default Logo;
