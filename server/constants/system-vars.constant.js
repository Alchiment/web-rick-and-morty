import 'dotenv/config';

export const SystemVars = {
    PORT: process.env.PORT ?? 7000,
    API_GQL_RICK_MORTY: process.env.API_GQL_RICK_MORTY || '',
    STR_CONN_DB: process.env.STR_CONN_DB || '',
    DB_NAME: process.env.DB_NAME || '',
}