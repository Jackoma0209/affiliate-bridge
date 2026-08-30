export const ILLUSTRATION_CAPTION =
  "Illustrative mock-up — not a real merchant result or testimonial.";

export const media = {
  celebration: {
    src: "/media/02-celebration.jpg",
    alt: "Smiling person at a laptop under a First Sale banner, with a mocked order confirmation on screen",
    caption:
      "A reminder of the outcome the 7-day plan is aiming at. Illustrative mock-up — not a real merchant result or testimonial.",
  },
  launchPlan: {
    src: "/media/03-7day-launch-plan.jpg",
    mobileSrc: "/media/05-7day-portrait.jpg",
    alt: "Seven-day launch checklist from product idea to review",
    caption:
      "A practical preview of the seven steps. The ticks show the sequence, not a completed store.",
  },
  stall: {
    src: "/media/04-stall.jpg",
    alt: "Laptop on a desk showing a store dashboard with zero sales and zero visitors",
    caption:
      "A $0 dashboard is a missing-step problem, not a reason to buy another course. Illustrative mock-up — not a real merchant result or testimonial.",
  },
  portraitPlan: {
    src: "/media/05-7day-portrait.jpg",
    alt: "Vertical 7-day Shopify launch checklist with empty tick boxes",
    caption: "Print or save the checklist and tick one job a day.",
  },
  playPoster: {
    src: "/media/09-play-poster.jpg",
    alt: "Play-button overlay on a first-store dashboard graphic",
  },
  day2: {
    src: "/media/10-day2-theme.jpg",
    alt: "Beginner choosing a simple Shopify theme on Day 2",
    caption:
      "Open the trial when you have one offer and a few hours, pick Dawn, and do not redesign first. Illustrative mock-up — not a real merchant result or testimonial.",
  },
  og: {
    src: "/media/og-7day-plan.jpg",
    alt: "7-day Shopify launch plan checklist graphic",
    width: 1200,
    height: 630,
  },
  videoPlan: {
    src: "/media/12-7day-plan.mp4",
    poster: "/media/03-7day-launch-plan.jpg",
    captions: "/media/12-7day-plan.vtt",
    title: "Ten-second overview of the 7-day Shopify launch plan",
    caption:
      "Muted 10-second overview. Captions are on. This is a process clip, not a sales result.",
  },
  videoStall: {
    src: "/media/14-stall.mp4",
    poster: "/media/04-stall.jpg",
    captions: "/media/14-stall.vtt",
    title: "Why beginner Shopify stores stall before the first sale",
    caption:
      "Muted 10-second clip. Captions are on. Illustrative mock-up — not a real merchant result or testimonial.",
  },
} as const;

export const copy = {
  heroHelper:
    "Have a product and time this week? Open the trial. Still deciding what to sell? Start with the checklist.",
  day2:
    "Open Shopify, pick a simple theme (Dawn), and stop redesigning before you have visitors.",
  stall:
    "Stores stall when one step is missing: offer, store, checkout, trust, or traffic.",
  stallLine: "Most stalls are a missing step, not a missing course.",
} as const;
