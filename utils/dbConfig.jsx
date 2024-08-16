import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://exptracdb_owner:2PjdwZYEH1JU@ep-sparkling-thunder-a5fsc0h0.us-east-2.aws.neon.tech/exptracdb?sslmode=require"
);
export const db = drizzle(sql, { schema });
