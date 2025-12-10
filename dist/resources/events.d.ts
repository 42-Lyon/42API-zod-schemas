import { z } from "zod";
export declare const eventKindSchema: z.ZodEnum<{
    other: "other";
    pedago: "pedago";
    rush: "rush";
    piscine: "piscine";
    partnership: "partnership";
    meet: "meet";
    conference: "conference";
    meet_up: "meet_up";
    event: "event";
    association: "association";
    speed_working: "speed_working";
    hackathon: "hackathon";
    workshop: "workshop";
    challenge: "challenge";
    extern: "extern";
}>;
export type eventKind = z.infer<typeof eventKindSchema>;
//# sourceMappingURL=events.d.ts.map