import { z } from "zod";
export declare const closeKindSchema: z.ZodEnum<{
    agu: "agu";
    other: "other";
    deserter: "deserter";
    black_hole: "black_hole";
    serious_misconduct: "serious_misconduct";
    social_security: "social_security";
    non_admitted: "non_admitted";
    pace_unknown: "pace_unknown";
}>;
export type closeKind = z.infer<typeof closeKindSchema>;
//# sourceMappingURL=close.d.ts.map