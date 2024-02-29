import { z } from "zod";

/**
 * ✅ DX Best practice (Type safe)
 *
 * Validate env variables with zod
 */
const envVariables = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string().url(),
  NEXT_PUBLIC_API_DELAY: z
    .string()
    .regex(/^\d+$/, { message: "Must be a positive number" })
    .optional(),
});

declare global {
  namespace NodeJS {
    export interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

const config = {
  API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  API_DELAY: Number(process.env.NEXT_PUBLIC_API_DELAY) || 100,
} as const;

export default config;
