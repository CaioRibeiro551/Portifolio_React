import Image from 'next/image';
import './header.scss';
import React from 'react';

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>I´m Caio! 👋</h1>
        <h2>Software Developer</h2>
      </div>
      <Image src="/me.png" alt="Me" width={325} height={310} priority />
    </div>
  );
}
