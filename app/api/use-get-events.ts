import type { AxiosError } from 'axios';
import axios from 'axios';
import { createQuery } from 'react-query-kit';

type Response = object;
type Variables = void;

export const useGetEvents = createQuery<Response, Variables, AxiosError>({
  queryKey: ['events'],
  fetcher: async () => {
    const response = await axios.get(
      'http://ec2-35-78-87-126.ap-northeast-1.compute.amazonaws.com:8080/event/items'
    );
    return response.data;
  },
});
