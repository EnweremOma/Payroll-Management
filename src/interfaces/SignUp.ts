import { E_CATEGORY } from "./User";
export interface SignUpInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  category: E_CATEGORY;
  department: string;
  courseTitle: string;
}
