export default function urlPath(subdomain: string, endpoint?: string) {
  return endpoint
    ? `http://localhost:3131/${subdomain}/${endpoint}`
    : `http://localhost:3131/${subdomain}`;
}
