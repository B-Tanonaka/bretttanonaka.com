export default function urlPath(subdomain: string, endpoint?: string) {
  return endpoint
    ? `${import.meta.env.VITE_API_KEY}/${subdomain}/${endpoint}`
    : `${import.meta.env.VITE_API_KEY}/${subdomain}`;
}
