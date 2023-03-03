import { E_CATEGORY } from './Staff';
export interface SignUpInput {
  firstName: string;
  lastName: string;
  email: string;
  category: E_CATEGORY;
  department: string;
  courseTitle: string;
}