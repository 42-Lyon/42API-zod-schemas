import { z } from "zod";
// Define valid values as a tuple with `as const`
const kinds = [
    "agu",
    "other",
    "deserter",
    "black_hole",
    "serious_misconduct",
    "social_security",
    "non_admitted",
    "pace_unknown"
];
// Create the Zod enum schema
export const closeKindSchema = z.enum(kinds);
//# sourceMappingURL=close.js.map