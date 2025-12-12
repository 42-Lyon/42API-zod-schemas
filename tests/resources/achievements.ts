import { intraAchievementSchema } from "../../src/resources/achievements/achievements.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraAchievementSchema,
	fixtureName: "achievements",
	resourceName: "achievement",
	getItemLabel: (item) => `"${item.name}" (id: ${item.id})`,
});
