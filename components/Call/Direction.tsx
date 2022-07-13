import React from 'react';
import { PhoneIncomingIcon, PhoneOutgoingIcon } from '@heroicons/react/solid';

type Direction = {
  direction?: 'inbound' | 'outbound';
};
export default function Direction({ direction }: Direction) {
  if (direction === 'inbound') {
    return (
      <PhoneIncomingIcon className="transition-all h-5 fill-zinc-400 group-hover:fill-amber-500" />
    );
  }
  return (
    <PhoneOutgoingIcon className="transition-all h-5 fill-zinc-400 group-hover:fill-amber-500" />
  );
}
