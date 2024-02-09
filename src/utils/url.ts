export default function urlPath(endpoint: string, subdomain: string) {
  return subdomain
    ? `http://localhost:3131/${subdomain}/${endpoint}`
    : `http://localhost:3131/${endpoint}`;
}
