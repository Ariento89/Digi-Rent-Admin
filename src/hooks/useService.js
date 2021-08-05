import { useCallback, useState } from "react";

export default function useService(service, { onData, onError }) {
  const [isFetching, setIsFetching] = useState(false);

  const start = useCallback(
    async (params) => {
      try {
        setIsFetching(true);
        const result = await service(params);
        onData(result);
      } catch (error) {
        onError(error);
      } finally {
        setIsFetching(false);
      }
    },
    [service, onData, onError]
  );

  return [isFetching, start];
}
