import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsEnum(['development', 'production', 'test'])
  NODE_ENV: 'development' | 'production' | 'test' = 'development';

  @IsNumber()
  PORT = 3000;

  @IsString()
  JWT_SECRET = 'dev-secret';

  @IsString()
  DB_HOST = 'localhost';

  @IsNumber()
  DB_PORT = 5432;

  @IsString()
  DB_USER = 'postgres';

  @IsString()
  DB_PASS = 'postgres';

  @IsString()
  DB_NAME = 'fluentwork';

  @IsString()
  MONGO_URI = 'mongodb://localhost:27017/fluentwork-chat';
}

export function validateEnvironment(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    EnvironmentVariables,
    {
      NODE_ENV: config.NODE_ENV ?? 'development',
      PORT: Number(config.PORT ?? 3000),
      JWT_SECRET: config.JWT_SECRET ?? 'dev-secret',
      DB_HOST: config.DB_HOST ?? 'localhost',
      DB_PORT: Number(config.DB_PORT ?? 5432),
      DB_USER: config.DB_USER ?? 'postgres',
      DB_PASS: config.DB_PASS ?? 'postgres',
      DB_NAME: config.DB_NAME ?? 'fluentwork',
      MONGO_URI:
        (config.MONGO_URI as string) ??
        (config.NOSQL_URL as string) ??
        'mongodb://localhost:27017/fluentwork-chat',
    },
    { enableImplicitConversion: true },
  );

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    const messages = errors
      .flatMap((error) => Object.values(error.constraints ?? {}))
      .join(', ');

    throw new Error(`Invalid environment variables: ${messages}`);
  }

  return validatedConfig;
}
