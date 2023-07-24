import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';
import { ALL_ENTITIES } from 'orm/_export';
dotenv.config();

const type = 'mysql';
const port = 3306;
const logging = false;

const entities = ALL_ENTITIES;

export const AC_DS = new DataSource({
  host: process.env.HOST_DB,
  username: process.env.USERNAME_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
  synchronize: false,
  type,
  port,
  logging,
  entities,
});

const logs = (success: boolean, ctx: string, err?: any): void => {
  if (success) console.log(`Fue iniciada ${ctx}`);
  else console.log(`No fue iniciada ${ctx} (${err.message})`);
};

export const initializeSources = () => {
  AC_DS.initialize()
    .then(() => logs(true, 'AC'))
    .catch((err) => logs(false, 'AC', err));
};

export const switchConn = () => {
  return AC_DS;
};
