"use client";

import Link from "next/link";
import next from "../../public/next.svg";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="profile">
      <Image src={next} alt="yeongnam" width={200} height={200} priority />
      <p>Front-end Engineer</p>
      <p>민영남</p>
      <Link href="/contact">Contact Me</Link>
    </div>
  );
}
