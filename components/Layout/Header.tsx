import React from 'react';
import Logo from '../SVG/Logo';
import ContentWrapper from './ContentWrapper';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV = [
  { anchor: 'Inbox', href: '/' },
  { anchor: 'Archive', href: '/archive' },
];

export default function Header({}) {
  const { pathname } = useRouter();
  return (
    <header className="border border-b-zinc-200 shadow-md">
      <ContentWrapper className="grid gap-4 grid-cols-3 bg-white px-4 sm:px-0">
        <div className="h-[50px] relative py-2 place-self-start">
          <Logo className="h-full w-full" />
        </div>
        <div className="col-span-2">
          <nav className="h-full grid content-center justify-end ">
            <ul className="flex gap-4 py-4">
              {NAV.map((el, i) => (
                <Link key={i} href={el.href}>
                  <a>
                    <li>
                      <p
                        className={`${
                          pathname === el.href
                            ? 'font-semibold underline decoration-2 decoration-amber-400'
                            : ''
                        } hover:underline hover:decoration-2 hover:decoration-amber-400`}
                      >
                        {el.anchor}
                      </p>
                    </li>
                  </a>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </ContentWrapper>
    </header>
  );
}
