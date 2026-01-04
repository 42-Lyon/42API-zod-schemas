import { intraUserSchema } from "../../src";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraUserSchema,
	fixtureName: "users",
	resourceName: "user",
	getItemLabel: (item) => item.login ?? `id ${item.id}`,
});
