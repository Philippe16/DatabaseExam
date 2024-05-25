import driver from "./config";

export const getUsers = async () => {
  const session = driver.session();
  const result = await session.run("MATCH (u:User) RETURN u");
  session.close();
  return result.records.map((record) => record.get("u").properties);
};
