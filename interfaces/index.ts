import { Request, Response } from 'express';

export type Project = {
  name: string;
  role: string[];
  year: number;
  description: string;
  techStack: string[];
  ref: string;
};
