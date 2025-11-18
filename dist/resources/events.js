import { z } from "zod";
// Define valid values as a tuple with `as const`
const kinds = [
    "pedago",
    "rush",
    "piscine",
    "partnership",
    "meet",
    "conference",
    "meet_up",
    "event",
    "association",
    "speed_working",
    "hackathon",
    "workshop",
    "challenge",
    "other",
    "extern",
];
// Create the Zod enum schema
export const eventKindSchema = z.enum(kinds);
//# sourceMappingURL=events.js.map