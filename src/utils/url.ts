export default function urlPath(endpoint: string, subdomain: string) {
  return `http://localhost:3131/${subdomain}/${endpoint}`;
}
