import urlPath from './url';

export default async function fetchProjectData(endpoint: string) {
  try {
    const res = await fetch(urlPath(endpoint, 'project-data'));
    const response = await res.json();
    return response;
  } catch (err) {
    return err;
  }
}
