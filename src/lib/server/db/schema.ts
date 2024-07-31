import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';
import { generateIdFromEntropySize } from 'lucia';

const primaryId = text('id')
  .primaryKey()
  .$defaultFn(() => generateIdFromEntropySize(10));

const createdAt = integer('created_at')
  .notNull()
  .$defaultFn(() => sql`(current_timestamp)`);
const updatedAt = integer('updated_at')
  .notNull()
  .$onUpdateFn(() => sql`(current_timestamp)`);

export const user = sqliteTable(
  'user',
  {
    id: primaryId,
    email: text('email').notNull().unique(),
    name: text('name').notNull().unique(),
    hashedPassword: text('hashed_password').notNull(),
    createdAt,
    updatedAt
  },
  (table) => ({
    emailIndex: uniqueIndex('user_email_idx').on(table.email),
    nameIndex: uniqueIndex('user_name_idx').on(table.name)
  })
);

export const session = sqliteTable('session', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  expiresAt: integer('expires_at').notNull(),
  createdAt
});

export const team = sqliteTable('team', {
  id: primaryId,
  name: text('name').notNull().unique(),
  description: text('description').notNull(),
  ownerName: text('owner_name')
    .notNull()
    .references(() => user.name),
  createdAt,
  updatedAt
});

export const teamMember = sqliteTable('team_member', {
  id: primaryId,
  teamId: text('team_id')
    .notNull()
    .references(() => team.id),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  role: text('role', { enum: ['owner', 'admin', 'member'] })
    .notNull()
    .default('member'),
  createdAt,
  updatedAt
});

export const invitation = sqliteTable('invitation', {
  id: primaryId,
  teamId: text('team_id')
    .notNull()
    .references(() => team.id),
  email: text('email').notNull(),
  role: text('role', { enum: ['admin', 'member'] }).notNull(),
  accepted: integer('accepted', { mode: 'boolean' }).notNull(),
  createdAt,
  expiresAt: integer('expires_at')
    .notNull()
    .$defaultFn(() => sql`DateTime('now', '+3 days')`)
});

export const service = sqliteTable(
  'service',
  {
    id: primaryId,
    teamId: text('team_id')
      .notNull()
      .references(() => team.id),
    name: text('name').notNull(),
    slug: text('slug').notNull(),
    description: text('description').notNull(),
    hidden: integer('hidden', { mode: 'boolean' }).notNull(),
    createdAt,
    updatedAt
  },
  (table) => ({
    teamSlugUniqueIndex: uniqueIndex('service_team_slug_idx').on(
      table.name,
      table.slug
    )
  })
);

export const serviceMember = sqliteTable(
  'service_member',
  {
    id: primaryId,
    teamId: text('team_id')
      .notNull()
      .references(() => team.id),
    serviceId: text('service_id')
      .notNull()
      .references(() => service.id),
    userId: text('user_id')
      .notNull()
      .references(() => user.id),
    createdAt,
    updatedAt
  },
  (table) => ({
    serviceMemberUniqueIndex: uniqueIndex('service_member_unique_idx').on(
      table.serviceId,
      table.userId
    )
  })
);

export const schedule = sqliteTable('schedule', {
  id: primaryId,
  teamId: text('team_id')
    .notNull()
    .references(() => team.id),
  createdAt,
  updatedAt
});

export const availability = sqliteTable('availability', {
  id: primaryId,
  teamId: text('team_id')
    .notNull()
    .references(() => team.id),
  serviceId: text('service_id'),
  scheduleId: text('schedule_id')
    .notNull()
    .references(() => schedule.id),
  dayOfWeek: integer('day_of_week').notNull(),
  startTime: text('start_time').notNull(),
  endTime: text('end_time').notNull()
});

export const booking = sqliteTable('booking', {
  id: primaryId,
  teamId: text('team_id')
    .notNull()
    .references(() => team.id),
  serviceId: text('service_id')
    .notNull()
    .references(() => service.id),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  status: text('status', { enum: ['pending', 'approved', 'rejected'] })
    .notNull()
    .default('pending'),
  startTime: integer('start_time').notNull(),
  duration: integer('duration').notNull(),
  createdAt,
  updatedAt
});
