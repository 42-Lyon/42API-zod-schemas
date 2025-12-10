import z from "zod";
export const intraCampusSchema = z.object({
    id: z.number(),
    name: z.string(),
    time_zone: z.string(),
});
//# sourceMappingURL=campus.js.map