import { intraTransactionSchema } from "../../src/resources/transactions.js";
import { testSchemaWithFixtures } from "../lib/test-schema.js";

testSchemaWithFixtures({
	schema: intraTransactionSchema,
	fixtureName: "transactions",
	resourceName: "transaction",
	getItemLabel: (item) => `id ${item.id}`,
});
