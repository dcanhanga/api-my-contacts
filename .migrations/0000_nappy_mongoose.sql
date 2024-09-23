CREATE TABLE IF NOT EXISTS "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "contacts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"category_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT null
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "contacts" ADD CONSTRAINT "contacts_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
