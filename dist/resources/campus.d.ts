import z from "zod";
export declare const intraCampusSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    time_zone: z.ZodString;
}, z.z.core.$strip>;
export type intraCampus = z.infer<typeof intraCampusSchema>;
//# sourceMappingURL=campus.d.ts.map