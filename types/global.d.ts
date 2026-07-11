export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "VENDOR" | "RIDER" | "ADMIN";
    };
  }
}
