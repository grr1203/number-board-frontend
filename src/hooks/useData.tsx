import { useQuery } from '@tanstack/react-query';

const getData = async () => {
  const res = await fetch(`http://127.0.0.1/api/data`);
  console.log(res);
  return await res.json();
};
export const useData = () => {
  const { data, refetch: refetchData } = useQuery({
    queryKey: ['data'],
    queryFn: getData,
  });

  return { data, refetchData };
};
