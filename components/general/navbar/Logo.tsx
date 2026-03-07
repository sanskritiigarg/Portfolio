import Image from "next/image";
import React from "react";

import Link from "next/link";

function Logo() {
  return (
      <Link href="#home">
        <Image src="/iris.png" alt="Sanskriti" height={80} width={80} loading="eager"/>
      </Link>
  )
}

export default Logo;
