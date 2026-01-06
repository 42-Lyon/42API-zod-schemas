import { z } from "zod";

export const intraUserKindSchema = z.enum(["external", "student", "admin"]);

export const intraUserImageSchema = z.strictObject({
	link: z.string().nullable(),
	versions: z
		.strictObject({
			large: z.string().nullable(),
			medium: z.string().nullable(),
			small: z.string().nullable(),
			micro: z.string().nullable(),
		})
});

export const intraUserSchema = z.strictObject({
	id: z.number(),
	email: z.string(),
	login: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	usual_full_name: z.string(),
	usual_first_name: z.string(),
	url: z.string(),
	phone: z.string(),
	displayname: z.string(),
	kind: intraUserKindSchema,
	image: intraUserImageSchema,
	'staff?': z.boolean(),
	correction_point: z.number(),
	pool_month: z.string().nullable(),
	pool_year: z.string().nullable(),
	location: z.string().nullable(),
	wallet: z.number(),
	anonymize_date: z.coerce.date(),
	data_erasure_date: z.coerce.date(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	alumnized_at: z.coerce.date().nullable(),
	'alumni?': z.boolean(),
	'active?': z.boolean(),
});

const intraUserCursusUserSchema = z.strictObject({
	id: z.number(),
	begin_at: z.coerce.date(),
	end_at: z.coerce.date().nullable(),
	grade: z.string().nullable(),
	level: z.number(),
	skills: z.array(
		z.strictObject({
			id: z.number(),
			name: z.string(),
			level: z.number(),
		})),
	cursus_id: z.number(),
	has_coalition: z.boolean(),
	blackholed_at: z.coerce.date().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	user: intraUserSchema,
	cursus: z.strictObject({
		id: z.number(),
		created_at: z.coerce.date(),
		name: z.string(),
		slug: z.string(),
		kind: z.string(),
	}),
});

const intraUserProjectsUserSchema = z.strictObject({
	id: z.number(),
	occurrence: z.number(),
	final_mark: z.number().nullable(),
	status: z.string(),
	'validated?': z.boolean().nullable(),
	current_team_id: z.number().nullable(),
	project: z.strictObject({
		id: z.number(),
		name: z.string(),
		slug: z.string(),
		parent_id: z.number().nullable(),
	}),
	cursus_ids: z.array(z.number()),
	marked_at: z.coerce.date(),
	marked: z.boolean(),
	retriable_at: z.coerce.date(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

const intraUserLanguageUserSchema = z.strictObject({
	id: z.number(),
	language_id: z.number(),
	user_id: z.number(),
	position: z.number(),
	created_at: z.coerce.date(),
});

const intraUserAchievementSchema = z.strictObject({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	tier: z.string(),
	kind: z.string(),
	visible: z.boolean(),
	image: z.string().nullable(),
	nbr_of_success: z.number().nullable(),
	users_url: z.string(),
});

const intraUserCampusSchema = z.strictObject({
	id: z.number(),
	name: z.string(),
	time_zone: z.string(),
	language: z.strictObject({
		id: z.number(),
		name: z.string(),
		identifier: z.string(),
		created_at: z.coerce.date(),
		updated_at: z.coerce.date(),
	}),
	users_count: z.number(),
	vogsphere_id: z.number(),
	country: z.string(),
	address: z.string(),
	zip: z.string(),
	city: z.string(),
	website: z.string().nullable().optional(),
	facebook: z.string().nullable().optional(),
	twitter: z.string().nullable().optional(),
	active: z.boolean(),
	public: z.boolean(),
	email_extension: z.string(),
	default_hidden_phone: z.boolean(),
});

const intraUserCampusUserSchema = z.strictObject({
	id: z.number(),
	user_id: z.number(),
	campus_id: z.number(),
	is_primary: z.boolean(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

const intraUserGroupSchema = z.strictObject({
	id: z.number(),
	name: z.string(),
});

const intraUserTitleSchema = z.strictObject({
	id: z.number(),
	name: z.string()
});

const intraUserTitleUserSchema = z.strictObject({
	id: z.number(),
	user_id: z.number(),
	title_id: z.number(),
	selected: z.boolean(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

const intraUserPartnershipSchema = z.strictObject({
	id: z.number(),
	name: z.string(),
	slug: z.string(),
	difficulty: z.number(),
	url: z.string(),
	partnerships_users_url: z.string(),
	partnerships_skills: z.array(
		z.strictObject({
			id: z.number(),
			partnership_id: z.number(),
			skill_id: z.number(),
			value: z.number(),
			created_at: z.coerce.date(),
			updated_at: z.coerce.date(),
		}),
	),
});

const intraUserPatronageSchema = z.strictObject({
	id: z.number(),
	user_id: z.number(),
	godfather_id: z.number(),
	ongoing: z.boolean(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

const intraUserExpertiseUserSchema = z.strictObject({
	id: z.number(),
	expertise_id: z.number(),
	interested: z.boolean(),
	value: z.number(),
	contact_me: z.boolean(),
	created_at: z.coerce.date(),
	user_id: z.number()
});

const intraUserRoleSchema = z.strictObject({
	id: z.number(),
	name: z.string(),
});

export const intraFullUserSchema = intraUserSchema.extend({
	groups: z.array(intraUserGroupSchema),
	cursus_users: z.array(intraUserCursusUserSchema),
	projects_users: z.array(intraUserProjectsUserSchema),
	languages_users: z.array(intraUserLanguageUserSchema),
	achievements: z.array(intraUserAchievementSchema),
	titles: z.array(intraUserTitleSchema),
	titles_users: z.array(intraUserTitleUserSchema),
	partnerships: z.array(intraUserPartnershipSchema),
	patroned: z.array(intraUserPatronageSchema),
	patroning: z.array(intraUserPatronageSchema),
	expertises_users: z.array(intraUserExpertiseUserSchema),
	roles: z.array(intraUserRoleSchema),
	campus: z.array(intraUserCampusSchema),
	campus_users: z.array(intraUserCampusUserSchema),
});

export type IntraUser = z.infer<typeof intraUserSchema>;
export type IntraFullUser = z.infer<typeof intraFullUserSchema>;
