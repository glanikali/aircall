import axios from 'axios';

export async function getCalls() {
  return axios
    .get(process.env.NEXT_PUBLIC_API_URL as string)
    .then((res) => res.data);
}

export async function getCallByID(id: string) {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${id}`).then((res) => {
    return res.data;
  });
}

export type CallObject = {
  id?: number;
  created_at?: string;
  direction?: 'inbound' | 'outbound';
  from?: string;
  to?: string;
  via?: string;
  duration?: string;
  is_archived?: boolean;
  call_type?: 'missed' | 'answered' | 'voicemail';
};
