import z from "zod";
export declare const intraUserSchema: z.ZodObject<{
    id: z.ZodNumber;
    login: z.ZodString;
    'staff?': z.ZodBoolean;
    titles: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
    }, z.z.core.$strip>>;
    cursus_users: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        cursus_id: z.ZodNumber;
        grade: z.ZodNullable<z.ZodString>;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
export type intraUser = z.infer<typeof intraUserSchema>;
//# sourceMappingURL=user.d.ts.map