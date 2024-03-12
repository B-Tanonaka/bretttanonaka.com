export default function urlPath(param: string, subdomain: string, endpoint?: string) {
  return endpoint
    ? `${import.meta.env.VITE_API_KEY}/${param}/${subdomain}/${endpoint}`
    : `${import.meta.env.VITE_API_KEY}/${param}/${subdomain}`;
}
