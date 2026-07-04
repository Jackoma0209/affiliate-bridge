export const content = {
  meta: {
    title: "[PRODUCT NAME] — [MAIN BENEFIT]",
    description:
      "Discover how [PRODUCT NAME] helps you [MAIN RESULT] without [PAIN THEY WANT GONE].",
  },

  hero: {
    eyebrow: "Finally feel [DESIRED EMOTIONAL STATE]",
    headline: "Wake up [AFTER-FEELING] — without [PAIN THEY WANT GONE]",
    subhead:
      "[PRODUCT NAME] helps [TARGET AUDIENCE] go from [BEFORE STATE] to [AFTER STATE] in [TIMEFRAME].",
    cta: "I want to [MAIN RESULT]",
  },

  problem: {
    headline: "You know that feeling when [BRUISED-KNEE METAPHOR]?",
    subhead:
      "If you're [TARGET AUDIENCE], you've probably felt this more than once:",
    bullets: [
      "[DAILY FRUSTRATION #1 — specific moment they hate]",
      "[DAILY FRUSTRATION #2 — wasted time/money]",
      "[DAILY FRUSTRATION #3 — embarrassment or social cost]",
      "[DAILY FRUSTRATION #4 — failed workaround]",
      "[DAILY FRUSTRATION #5 — fear it never gets better]",
    ],
    bridge:
      "It's not your fault. Most [ALTERNATIVES] weren't built for [YOUR SITUATION].",
  },

  solution: {
    empathy:
      "I tried everything too — [LIST 2–3 THINGS THEY'VE TRIED]. Nothing stuck until I found [PRODUCT NAME].",
    intro:
      "[PRODUCT NAME] is [ONE-LINE PLAIN DESCRIPTION] designed for [TARGET AUDIENCE].",
    steps: [
      {
        title: "Step 1 — [ACTION VERB]",
        description: "[WHAT THEY DO FIRST — one sentence]",
      },
      {
        title: "Step 2 — [ACTION VERB]",
        description: "[WHAT HAPPENS NEXT — one sentence]",
      },
      {
        title: "Step 3 — [ACTION VERB]",
        description: "[THE PAYOFF — one sentence linking to main result]",
      },
    ],
  },

  benefits: [
    {
      feature: "[FEATURE #1]",
      headline: "[BENEFIT HEADLINE #1]",
      payoff: "So you can [EMOTIONAL PAYOFF #1]",
    },
    {
      feature: "[FEATURE #2]",
      headline: "[BENEFIT HEADLINE #2]",
      payoff: "So you can [EMOTIONAL PAYOFF #2]",
    },
    {
      feature: "[FEATURE #3]",
      headline: "[BENEFIT HEADLINE #3]",
      payoff: "So you can [EMOTIONAL PAYOFF #3]",
    },
  ],

  testimonials: [
    {
      name: "[NAME], [ROLE/CITY]",
      before: "Before, I [BEFORE STATE]...",
      change:
        "After [TIMEFRAME] with [PRODUCT NAME], [WHAT CHANGED]...",
      result: "Now I [SPECIFIC RESULT].",
    },
    {
      name: "[NAME], [ROLE/CITY]",
      before: "I was skeptical because [OBJECTION]...",
      change: "But [SPECIFIC CHANGE THEY NOTICED]...",
      result: "[MEASURABLE OR EMOTIONAL RESULT].",
    },
    {
      name: "[NAME], [ROLE/CITY]",
      before: "[RELATABLE STRUGGLE]...",
      change:
        "[PRODUCT NAME] [SPECIFIC FEATURE] made the difference...",
      result: "I'd tell anyone who [SITUATION] to try it.",
    },
  ],

  urgency: {
    headline: "Why [ACT NOW VERB] today?",
    body: "[BELIEVABLE URGENCY REASON — e.g., limited batch, price increase, seasonal relevance, bonus expiring]. [DEADLINE OR SCARCITY DETAIL].",
    riskReversal:
      "[GUARANTEE OR LOW-RISK FRAMING — e.g., Backed by a [X]-day guarantee]",
    cta: "Yes — I want to [MAIN RESULT] →",
    microCopy:
      "Secure checkout on the official [PRODUCT NAME] site · [PRICE]",
  },
} as const;