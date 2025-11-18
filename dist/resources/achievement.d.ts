import z from "zod";
export declare const achievementSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, z.z.core.$strip>;
export type intraAchievement = z.infer<typeof achievementSchema>;
//# sourceMappingURL=achievement.d.ts.map