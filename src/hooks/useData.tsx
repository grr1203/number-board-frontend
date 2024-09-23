import { useQuery } from '@tanstack/react-query';

const getData = async (data): Promise<{ number1: string }> => {
  const res = await fetch(`/api/data`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};
export const useData = (parameters): { data: any; refetchData: any } => {
  const { data, refetch: refetchData } = useQuery({
    queryKey: ['data'],
    queryFn: getData.bind(null, parameters),
  });

  return { data, refetchData };
};
