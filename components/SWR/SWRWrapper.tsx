import { SWRConfig } from 'swr';
import axios from 'axios';
import React from 'react';
export default function SWRWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
}
