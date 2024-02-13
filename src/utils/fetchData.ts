import urlPath from './url';
import { Form } from '../../interfaces';

export async function fetchProjectData(endpoint: string) {
  try {
    const res = await fetch(urlPath('project-data', endpoint));
    const response = await res.json();
    return response;
  } catch (err) {
    return err;
  }
}

export async function fetchContact(body: Form) {
  try {
    const response = await fetch(urlPath('contact-data'), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.status;
  } catch (err) {
    return err;
  }
}
