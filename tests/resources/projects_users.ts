import { intraProjectsUserSchema } from "../../src";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraProjectsUserSchema,
	fixtureName: "projects_users",
	resourceName: "projects_user",
	getItemLabel: (item) => `id ${item.id}`,
});
