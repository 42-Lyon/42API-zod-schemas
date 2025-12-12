import { achievementsUserSchema } from "../../src/resources/achievements/achievements_users.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: achievementsUserSchema,
	fixtureName: "achievements_users",
	resourceName: "achievements_user",
	getItemLabel: (item) => `id ${item.id}`,
});
