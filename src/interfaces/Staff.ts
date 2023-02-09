export enum E_CATEGORY {
  ADMIN = "admin",
  LECTURER = "lecturer",
  STUDENT = "student",
  GUEST = "guest",
}

export interface Staff {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  imgURL: string;
  category: E_CATEGORY;
}
