# Growth playbook — Get Your First Sale

Use this pack the same day you ship conversion fixes. The site converts better when **targeted people** arrive with clear UTMs and when email follows the checklist.

Canonical site: `https://www.getyourfirstsale.com`  
Checklist: `https://www.getyourfirstsale.com/checklist`  
Worksheets: `https://www.getyourfirstsale.com/worksheets`  
Affiliate base (do not post bare without UTM context on the site): handled by on-site CTAs via Impact.

Primary on-site CTA is now the Shopify trial. The checklist remains free and ungated. Day 2 of the checklist is the money moment — MailerLite email 2 should point there.

---

## 1. UTM matrix

Always promote the **custom domain**, not the Vercel preview URL.

Pattern:

```text
https://www.getyourfirstsale.com/PATH?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN
```

| Channel | Source | Medium | Campaign | Recommended landing |
|---------|--------|--------|----------|---------------------|
| Reddit post | `reddit` | `social` | `day1_checklist` | `/checklist` |
| X / Twitter | `x` | `social` | `day1_checklist` | `/checklist` |
| LinkedIn | `linkedin` | `social` | `day1_checklist` | `/` or `/checklist` |
| Facebook group | `facebook` | `social` | `day1_checklist` | `/checklist` |
| Indie Hackers | `indiehackers` | `social` | `day1_checklist` | `/checklist` |
| Discord / Slack | `community` | `social` | `day1_checklist` | `/checklist` |
| Email signature | `email` | `signature` | `ongoing` | `/` |
| Personal outreach | `direct` | `dm` | `warm_invite` | `/checklist` |
| SEO / organic | _(none or auto)_ | — | — | content pages |
| Paid later | `google` / `meta` | `cpc` | `trial_test` | `/` or `/checklist` |

### Ready-to-copy links

```text
https://www.getyourfirstsale.com/checklist?utm_source=reddit&utm_medium=social&utm_campaign=day1_checklist
https://www.getyourfirstsale.com/checklist?utm_source=x&utm_medium=social&utm_campaign=day1_checklist
https://www.getyourfirstsale.com/checklist?utm_source=linkedin&utm_medium=social&utm_campaign=day1_checklist
https://www.getyourfirstsale.com/checklist?utm_source=facebook&utm_medium=social&utm_campaign=day1_checklist
https://www.getyourfirstsale.com/?utm_source=newsletter&utm_medium=email&utm_campaign=welcome
```

Attribution on the site stores UTMs and passes `subId1` (source), `subId2` (placement), `subId3` (page) into Impact affiliate clicks.

---

## 2. Community / social post templates

Rules: lead with value, disclose if required by the community, do not spam, do not promise income.

### Template A — Checklist drop (most communities)

> Most new Shopify stores stall for boring reasons: no focused offer, unpublished store, no traffic, or no clear next step.
>
> I put a free 7-day launch checklist online (no email wall): product → store → checkout → first visitors.
>
> [CHECKLIST_UTM_LINK]
>
> Happy to take feedback if anything is unclear.

### Template B — Day-1 product sentence

> Before you open Shopify, finish this sentence:
>
> “This product helps [buyer] achieve [outcome] without [objection].”
>
> If you cannot finish it, the store will feel vague no matter how good the theme looks.
>
> Free 7-day plan from there: [CHECKLIST_UTM_LINK]

### Template C — No-sales diagnosis

> If your Shopify store has no sales, check in this order:
> 1) relevant traffic  
> 2) offer clarity  
> 3) trust  
> 4) checkout friction  
>
> Changing theme + price + ads at once hides the real bottleneck.
>
> Short diagnostic guide: [https://www.getyourfirstsale.com/why-my-shopify-store-isnt-getting-sales?utm_source=CHANNEL&utm_medium=social&utm_campaign=day1_checklist]

### Template D — Short X / LinkedIn

> Free 7-day Shopify launch checklist for beginners:
> Day 1 offer → Day 2 open store → checkout test → first targeted visitors.
> No email gate. No income promises.
> [CHECKLIST_UTM_LINK]

### Template E — Warm DM

> Hey — I put together a free beginner checklist for getting a first Shopify store live in a week (product, trust, checkout, traffic). No email required. Would love your honest feedback if you have 2 minutes: [CHECKLIST_UTM_LINK]

---

## 3. MailerLite 7-day sequence

Group name expected by the app: **`7-Day Shopify Checklist`**  
Automation name expected by health check: **`7-Day Shopify Checklist Welcome`**

Setup checklist:

1. Vercel env: `MAILERLITE_API_TOKEN`
2. Group exists (API creates it if missing)
3. Automation enabled, trigger = joins group
4. Include unsubscribe footer on every email
5. Soft-disclose affiliate links where Shopify trial is mentioned

Primary links inside emails:

- Checklist: `https://www.getyourfirstsale.com/checklist?utm_source=email&utm_medium=email&utm_campaign=day{N}`
- Home quiz: `https://www.getyourfirstsale.com/?utm_source=email&utm_medium=email&utm_campaign=day{N}#quiz`
- On-site “Start Shopify trial (3 days free → $1/month)” buttons are preferred for tracking; if you must link out, still send people through the site first when possible.

### Email 0 — Immediate welcome (trigger)

**Subject:** Your free 7-day Shopify checklist is ready  
**Preview:** One focused job per day. No income promises.

Body:

```text
Hi {{name|there}},

Thanks for joining. The full checklist is free and already live here:

{{checklist_link}}

Start with Day 1 only: one buyer, one problem, one offer sentence.

Tomorrow I'll send Day 2 — when most people should open Shopify if they're ready to build.

— Get Your First Sale
```

### Email 1 — Day 1 (send +0 or +1 day)

**Subject:** Day 1: write the offer sentence  
**Preview:** Skip branding. Finish this line first.

```text
Day 1 is not "pick a logo."

Finish this sentence:
This product helps [buyer] achieve [outcome] without [objection].

If it feels too broad, narrow the buyer until a stranger would understand who it's for.

Checklist: {{checklist_link}}

Tomorrow: open a simple store shell (only if you're ready to build).
```

### Email 2 — Day 2 (highest trial intent)

**Subject:** Day 2: open Shopify and keep it simple  
**Preview:** Theme now. Redesign later.

```text
If your offer sentence is clear, today is the day to open a simple Shopify store:

1. Working store name (can change later)
2. Clean free/starter theme
3. Basic navigation + contact page

Do not redesign all day.

Open the checklist Day 2 section, then start the trial from the page when you're ready:
{{checklist_link}}

Affiliate note: if you start Shopify through my links, I may earn a commission at no extra cost to you. Results vary.
```

### Email 3 — Day 3

**Subject:** Day 3: product page that answers buying questions  
**Preview:** Who is it for? What do they get?

```text
Your product page should answer:
- What is it?
- Who is it for?
- What changes for the buyer?
- Delivery + returns?
- What should I click next?

Lead with the outcome, then details. Accurate images beat hype.

{{checklist_link}}
```

### Email 4 — Day 4

**Subject:** Day 4: payments, shipping, policies  
**Preview:** Remove the boring reasons people hesitate.

```text
Today is operations day:
- Payment methods working
- Shipping zones/rates/estimates
- Returns + refund policy
- Privacy, terms, contact

Trust is often missing policy clarity, not more animations.

{{checklist_link}}
```

### Email 5 — Day 5

**Subject:** Day 5: test checkout on mobile  
**Preview:** A pretty store can still lose the sale here.

```text
Run the full path on your phone:
product → cart → checkout → confirmation

Fix friction before you ask anyone to visit.

If you still need a store shell, Day 2 on the checklist is the cleanest entry point:
{{checklist_link}}
```

### Email 6 — Day 6

**Subject:** Day 6: first targeted visitors (not everyone)  
**Preview:** 25 relevant people beat 250 random clicks.

```text
Pick one channel where your buyer already spends time.
Share something useful about the problem — not only "buy my product."

Ask: "What is unclear?" not only "Would you buy?"

{{checklist_link}}
```

### Email 7 — Day 7

**Subject:** Day 7: review evidence, change one thing  
**Preview:** Traffic, offer, trust, or checkout?

```text
Look at:
- Visitors + sources
- Product engagement
- Add-to-cart
- Checkout progression

Match the fix to the stage that failed. Change one meaningful thing.

If you want a reset path next week, start the checklist again from Day 1:
{{checklist_link}}

If you're ready to build or continue building, use the Shopify trial CTA on the site (affiliate disclosure on page). Results vary based on product, offer, traffic, and effort.
```

---

## 4. Analytics checks (same day)

1. GA4 realtime: load homepage, click **Start Shopify trial** → expect `affiliate_click` (+ placement event).
2. Quiz complete → `quiz_complete` with `ready_to_build` when product exists + 5–10+ hours.
3. Mobile sticky: checklist + trial both fire events.
4. Checklist Day 2 CTA → `checklist_day2_cta_click`.
5. Impact: confirm clicks show `subId` values after a test click.
6. Optional: set `clarityProjectId` in `config.ts` for heatmaps.

### GA4 key events to mark

- `affiliate_click`
- `quiz_complete`
- `checklist_day2_cta_click`
- `sticky_trial_click`
- `checklist_request_success`

---

## 5. Search Console (same day)

1. Property: `https://www.getyourfirstsale.com`
2. Submit sitemap: `https://www.getyourfirstsale.com/sitemap.xml`
3. Request indexing for `/`, `/checklist`, and each guide URL.

---

## 6. Daily promotion rhythm (first 7 days)

| Day | Action |
|-----|--------|
| 1 | 3 community posts + Search Console + GA4 test click |
| 2 | MailerLite sequence live; post Template B |
| 3 | Share one guide (what to sell) |
| 4 | Share no-sales diagnostic in a relevant thread |
| 5 | Warm DMs to 10 people starting stores |
| 6 | Review GA4: which UTM sources clicked trial |
| 7 | Double down on the best source; improve that landing CTA only |

Commissions depend on program rules (often trial → paid), cookie windows, and real visitor quality. The site and this playbook improve probability; they do not guarantee sales.

---

## Hero video 12 test

- **A:** 31 Aug–2 Sep 2026 Europe/London — Video 12 visible (`showHeroPlanVideo` true).
- **B:** 3 Sep 00:00–5 Sep 23:59 Europe/London — hide Video 12 only. From 6 Sep keep hidden.
- Date rule is automatic (`lib/media.ts`). Homepage ISR is 1 hour so the cutoff does not need a git commit.
- Winner: `affiliate_click` where `cta_location` in (`hero_primary`, `home_day2`, `checklist_day2`) **plus** `/checklist` pageviews and `hero_checklist_click`. Ignore video plays.
- Env override (rebuild required, no code change): `NEXT_PUBLIC_SHOW_HERO_PLAN_VIDEO=true|false`. Env wins over the date.
- Variant B on 3 Sep: set `NEXT_PUBLIC_SHOW_HERO_PLAN_VIDEO=false` in Vercel and Redeploy if you do not want to wait for ISR.

---

## First conversions

Ready traffic (product + time this week) lands on `/start`. Still-deciding and community value posts stay on `/checklist`.

Ready:

```text
https://www.getyourfirstsale.com/start?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=ready_now
```

Still deciding:

```text
https://www.getyourfirstsale.com/checklist?utm_source=SOURCE&utm_medium=social&utm_campaign=day1_checklist
```

Ready-to-copy:

```text
https://www.getyourfirstsale.com/start?utm_source=reddit&utm_medium=social&utm_campaign=ready_now
https://www.getyourfirstsale.com/start?utm_source=x&utm_medium=social&utm_campaign=ready_now
https://www.getyourfirstsale.com/start?utm_source=facebook&utm_medium=social&utm_campaign=ready_now
```

### Template F — Ready now (use only if you already have a product)

> If you already have something to sell and a few hours this week, Day 2 is: open Shopify, pick Dawn, stop redesigning.
> One-screen version (affiliate disclosure on the page):
> [START_UTM_LINK]
> Still choosing a product? Use the free checklist instead: [CHECKLIST_UTM_LINK]

GA4: mark `affiliate_click` and `start_cta_click` as key events in the GA4 UI (not in code). `/start` trial uses `cta_location=start_ready` (`subId2=startready`, `subId3=start`).

---

## X profile (@getyour1stsale)

Live: `https://x.com/getyour1stsale`  
Website field on X: `https://www.getyourfirstsale.com` (not the Shopify affiliate URL).

**Bio**

```text
Independent Shopify guide for beginners. Free 7-day launch checklist. No courses, no fake income claims. Written by Jack. Affiliate links disclosed.
```

**Pin (post 1)** — then pin it.

```text
Free 7-day Shopify launch plan for beginners.

One job a day: offer → store → checkout → first visitors.
No email wall. No income promises.

Already have a product and a few hours this week?
https://www.getyourfirstsale.com/start?utm_source=x&utm_medium=social&utm_campaign=ready_now

Still choosing what to sell?
https://www.getyourfirstsale.com/checklist?utm_source=x&utm_medium=social&utm_campaign=day1_checklist

I’m a Shopify affiliate; disclosure is on the page.
```
