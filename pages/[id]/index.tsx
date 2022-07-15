import { getCallByID, CallObject } from 'api/index';
import ContentWrapper from '@/components/Layout/ContentWrapper';
import { Button } from 'components/UI/Button';
import { getDateTimeFromISO } from 'utils/getDate';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from 'next/router';

type ServerProps = {
  params: {
    id: string;
  };
};

export async function getServerSideProps({ params: { id } }: ServerProps) {
  const call = await getCallByID(id).catch((err) => console.log(err));
  return {
    props: { call },
  };
}
export default function CallDetails({ call }: { call: CallObject }) {
  const list = [];
  const { data } = useSWR(process.env.NEXT_PUBLIC_API_URL);
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const { time, phase, year, month, day } = getDateTimeFromISO(
    call?.created_at ?? ''
  );
  list.push({
    label: 'Created At',
    value: `${month} ${day} ${year} - ${time} ${phase}`,
  });

  for (const [label, value] of Object.entries(call)) {
    if (label === 'id' || label === 'is_archived' || label === 'created_at')
      continue;
    if (label === 'call_type') {
      list.push({ label: 'Call Type', value: value });
    } else {
      list.push({
        label,
        value,
      });
    }
  }

  const handleClick = async (is_archived: boolean | undefined) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/${call.id}`, {
        is_archived: is_archived ? false : true,
      })
      .then(() => {
        mutate(
          process.env.NEXT_PUBLIC_API_URL,
          [...data, { ...call, is_archived: is_archived ? false : true }],
          false
        );
      });
    if (is_archived) {
      router.push('/');
    } else {
      router.push('/archive');
    }
  };

  return (
    <div className="bg-zinc-50 px-2 sm:py-4 sm:py-0 sm:px-0 ">
      <ContentWrapper className="min-h-[calc(100vh_-_74px)]">
        <div className="bg-white p-4 shadow-sm rounded-lg grid gap-4">
          <div>
            {list.map((el, i) => (
              <p className="capitalize text-zinc-500 text-md" key={i}>
                <span className="font-bold text-zinc-500 text-md">
                  {el.label}
                </span>
                : {el.value}
              </p>
            ))}
          </div>
          <Button
            onClick={() => handleClick(call.is_archived)}
            className="justify-self-start capitalize font-semibold"
          >
            {call.is_archived == false
              ? 'Add To Archive'
              : 'Remove From Archive'}
          </Button>
        </div>
      </ContentWrapper>
    </div>
  );
}
