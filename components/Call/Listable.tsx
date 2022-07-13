import React from 'react';
import { CallObject } from 'api/index';
import Direction from './Direction';
import { getDateTimeFromISO } from '../../utils/getDate';

interface ListableProp {
  callObject: CallObject;
}
export default function Listable({ callObject }: ListableProp) {
  const { created_at, to, from, direction, id } = callObject;
  const { time, phase, year, month, day } = getDateTimeFromISO(
    created_at ?? ''
  );
  return (
    <>
      <div className="flex gap-4">
        <div className="border-t-2 border-dotted w-full self-center"></div>
        <p className="text-zinc-500 text-xs text-center min-w-max">
          {month}, {day}, {year}
        </p>
        <div className="border-t-2 border-dotted w-full self-center"></div>
      </div>
      <a className="group" href={`/${id}`}>
        <div className="transition-all border border-zinc-300 grid grid-cols-5 rounded p-2 cursor-pointer hover:shadow-md">
          <div className="col-span-4 flex gap-4 items-center">
            <Direction direction={direction} />
            <div>
              <p className="font-bold text-zinc-600 text-sm leading-4">
                {direction === 'inbound' ? from : to}
              </p>
              <p className="text-zinc-500 text-xs">
                {direction === 'inbound'
                  ? `tried to call on ${to}`
                  : `${from} tried to call`}
              </p>
            </div>
          </div>
          <div className="grid items-center justify-end	">
            <p className="text-zinc-500 text-xs">
              {time}{' '}
              <span className="border border-zinc-300 p-0.5 font-semibold">
                {phase}
              </span>
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
