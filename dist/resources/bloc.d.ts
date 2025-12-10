import z from "zod";
export declare const intraBlocSchema: z.ZodObject<{
    id: z.ZodNumber;
    campus_id: z.ZodNumber;
    cursus_id: z.ZodNumber;
    squad_size: z.ZodNumber;
    coalitions: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        slug: z.ZodString;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
export type intraBloc = z.infer<typeof intraBlocSchema>;
//# sourceMappingURL=bloc.d.ts.map