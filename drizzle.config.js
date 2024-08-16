/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://exptracdb_owner:2PjdwZYEH1JU@ep-sparkling-thunder-a5fsc0h0.us-east-2.aws.neon.tech/exptracdb?sslmode=require",
  },
};
