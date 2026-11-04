CREATE TABLE public.partner_applications (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 name text NOT NULL CHECK (length(btrim(name)) BETWEEN 1 AND 100),
 business_name text NOT NULL CHECK (length(btrim(business_name)) BETWEEN 1 AND 200),
 email text NOT NULL CHECK (length(email) BETWEEN 3 AND 255),
 type text NOT NULL DEFAULT 'salon' CHECK (type IN ('salon','artist')),
 instagram text DEFAULT '' CHECK (length(instagram) <= 200),
 phone text DEFAULT '' CHECK (length(phone) <= 50),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.partner_applications TO service_role;
ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;
CREATE INDEX partner_applications_created_at_idx ON public.partner_applications (created_at DESC);
CREATE TABLE public.waitlist (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 email text NOT NULL CHECK (length(email) BETWEEN 3 AND 255),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.waitlist TO service_role;
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;
CREATE UNIQUE INDEX waitlist_email_unique ON public.waitlist (lower(email));
CREATE INDEX waitlist_created_at_idx ON public.waitlist (created_at DESC);
CREATE TABLE public.form_rate_limits (
 key text PRIMARY KEY,
 window_start timestamptz NOT NULL DEFAULT now(),
 attempts integer NOT NULL DEFAULT 1
);
GRANT ALL ON public.form_rate_limits TO service_role;
ALTER TABLE public.form_rate_limits ENABLE ROW LEVEL SECURITY;
CREATE FUNCTION public.consume_form_limit(p_key text, p_max integer) RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE n integer;
BEGIN
 INSERT INTO public.form_rate_limits(key, window_start, attempts) VALUES(p_key, now(), 1)
 ON CONFLICT(key) DO UPDATE SET
 attempts = CASE WHEN form_rate_limits.window_start < now() - interval '15 minutes' THEN 1 ELSE form_rate_limits.attempts + 1 END,
 window_start = CASE WHEN form_rate_limits.window_start < now() - interval '15 minutes' THEN now() ELSE form_rate_limits.window_start END
 RETURNING attempts INTO n;
 RETURN n <= p_max;
END; $$;
REVOKE ALL ON FUNCTION public.consume_form_limit(text, integer) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_form_limit(text, integer) TO service_role;