import { z } from 'zod';
export const projectTypes = ['Roof Repair','Roof Replacement','Roof Inspection','New Roof','Storm Damage','Roof Maintenance','Other'] as const;
export const timelines = ['ASAP','Within 1–3 Months','3–6 Months','Just Exploring Options'] as const;
export const estimateSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  phone: z.string().trim().min(7).max(30).regex(/^[+()\d\s.\-]+$/).refine(v=>v.replace(/\D/g,'').length>=7),
  email: z.email().max(254),
  address: z.string().trim().min(3).max(200),
  city: z.string().trim().min(2).max(100),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/),
  projectType: z.enum(projectTypes),
  timeline: z.enum(timelines),
  message: z.string().trim().max(4000),
  website: z.string().max(0),
});
