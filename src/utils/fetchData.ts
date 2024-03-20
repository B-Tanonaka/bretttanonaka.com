import urlPath from './url';
import { Form } from '../../interfaces';

const url = import.meta.env.VITE_API_KEY;

export async function fetchProjectData(param: string, endpoint?: string) {
  try {
    const res = await fetch(urlPath(param, 'project-data', endpoint));
    const response = await res.json();
    return response;
  } catch (err) {
    return err;
  }
}

export async function fetchAboutData() {
  try {
    const res = await fetch(`${url}/about`);
    const response = await res.json();
    return response;
  } catch (err) {
    return err;
  }
}

export async function fetchContact(body: Form) {
  try {
    const response = await fetch(`${url}/contact-data`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.status;
  } catch (err) {
    return err;
  }
}
