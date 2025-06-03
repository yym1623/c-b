export type CookieName =
  | "memberId"
  | "token"
  | "refreshToken"
  | "name"
  | "cellphone"
  | "birthDate"
  | "provider"
  | "language";

export type CookieOptions = Partial<{
  /** The cookie path (default: '/') */
  path: string;
  /** Absolute expiration date for the cookie */
  expires: Date;
  /** Relative max age of the cookie in seconds */
  maxAge: number;
  /** The domain for the cookie */
  domain: string;
  /** Is the cookie accessible only through HTTPS? */
  secure: boolean;
  /** Is the cookie accessible only by the server? (not available to client-side JavaScript) */
  httpOnly: boolean;
  /** // SameSite 정책 설정 | SameSite cookie enforcement policy (strict, lax, none) */
  sameSite: "strict" | "lax" | "none";
  // Indicates if the cookie should use partitioned storage
  partitioned: boolean;
}>;
