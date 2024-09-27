import dotenv from 'dotenv';

dotenv.config();

function getEnvVar(name: string, defaultValue?: string): string {
  const value = process.env[name];

  if ((value === undefined || value === '') && !defaultValue) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value ?? defaultValue!;
}

export const PORT = Number(getEnvVar('PORT', '3000'));
export const SECRET = getEnvVar('SECRET_KEY');