import { getCalls, CallObject } from 'api';
import ContentWrapper from '@/components/Layout/ContentWrapper';
import Listable from '@/components/Call/Listable';
import useSWR from 'swr';

export async function getStaticProps() {
  const data: Array<CallObject> = await getCalls();
  const callList = data?.filter((el) => el.is_archived === true);
  return {
    props: {
      fallback: { '/activities': callList ?? [] },
    },
  };
}

type Props = {
  fallback: {
    '/activities': Array<CallObject>;
  };
};

const Home = ({ fallback }: Props) => {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_URL);
  const callList: Array<CallObject> | undefined = error
    ? fallback['/activities']
    : data?.filter((el: CallObject) => el.is_archived === true);
  return (
    <div className="bg-zinc-50 px-2 sm:py-4 sm:px-0">
      <ContentWrapper>
        <div className="bg-white p-4 shadow-sm rounded-lg">
          <div className="grid gap-4 grid-cols-1">
            {callList?.map((el, i) => (
              <Listable key={i} callObject={el} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Home;
