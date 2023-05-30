export const BASE_URL = process.env.PUBLIC_API_URL;

export function useUrls() {
  // sign up url
  const createUserUrl = `${BASE_URL}/users/createUser`;
  return { createUserUrl };
}
