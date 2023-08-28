import {
  createSearchParams,
  URLSearchParamsInit,
  useNavigate,
  useSearchParams
} from "react-router-dom";
import qs from "qs"

export function useQueryParams() {
  const [searchParams] = useSearchParams();
  const baseNavigate = useNavigate();

  function get() {
    return Object.fromEntries([...searchParams]);
  }

  function set(params: URLSearchParamsInit) {
    return `?${createSearchParams(params)}`;
  }

  const navigate = (pathname, params) => {
    return baseNavigate({ pathname, search: set(params) });
  };

  const openNewTab = (pathname, params) => {
    window.open(pathname + "?" + qs.stringify(params))
  }

  return {
    get,
    set,
    navigate,
    openNewTab,
    baseNavigate
  };
}
