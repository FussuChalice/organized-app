import useCurrentUser from '@hooks/useCurrentUser';

const useUpcomingEvents = () => {
  const { isAdmin } = useCurrentUser();

  return {
    isAdmin,
  };
};

export default useUpcomingEvents;
