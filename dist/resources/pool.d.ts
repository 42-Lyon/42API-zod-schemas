import z from "zod";
export declare const intraPoolSchema: z.ZodObject<{
    id: z.ZodNumber;
    current_points: z.ZodNumber;
    max_points: z.ZodNumber;
    cursus_id: z.ZodNumber;
    campus_id: z.ZodNumber;
}, z.z.core.$strip>;
export type intraPool = z.infer<typeof intraPoolSchema>;
//# sourceMappingURL=pool.d.ts.map