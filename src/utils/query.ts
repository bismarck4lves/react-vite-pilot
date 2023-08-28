export const getNextPageParam = (lastPage, allPages) => {
  return lastPage?.page < lastPage?.totalPages ? lastPage.page + 1 : undefined;
};
