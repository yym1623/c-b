import { useCookies } from "@vueuse/integrations/useCookies";
import type { CookieName, CookieOptions } from "@/types/cookies.type";

const cookies = useCookies();

const defaultOptions: CookieOptions = {
  path: "/",
  // expires: useDayjs().add(1, 'day').toDate(),
  maxAge: 86400, // 24 hour
  domain: window.location.hostname
};


export const getCookie = (cookieName: CookieName) => cookies.get(cookieName, {});
export const setCookie = (cookieName: CookieName, cookieValue: unknown, options?: CookieOptions) =>
  cookies.set(cookieName, cookieValue, { ...defaultOptions, ...options });