import process from 'process';
import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const Pool = pg.Pool;

const PG_URI = process.env.NODE_ENV === 'test'
  ? process.env.PG_TEST_URI
  : process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

export const query = (queryString: string, params: string[], callback: (...args: any[]) => any): any => {
  console.log("executed query", queryString);
  return pool.query(queryString, params, callback);
}
