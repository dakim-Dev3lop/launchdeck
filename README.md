# LaunchDeck

LaunchDeck is an original AI workspace concept for solo builders. It helps transform rough startup ideas into launch-ready product plans with structured briefs, feature prioritization, launch checklists, and weekly execution boards.

## Overview

Most early-stage builders do not need another generic chatbot. They need a system that helps them:
- clarify what they are building
- define who it is for
- prioritize what matters first
- prepare a realistic launch plan
- stay focused week to week

LaunchDeck is designed around that workflow.

## Core concept

LaunchDeck sits between ideation and execution.

A user brings in:
- messy notes
- product thoughts
- customer observations
- launch ideas
- half-formed assumptions

The product turns that into:
- a product brief draft
- positioning guidance
- feature priority suggestions
- a launch checklist
- a weekly execution board

## Core features

- **Idea → PRD engine**  
  Turn rough notes into a structured product brief with goals, scope, risks, personas, and success metrics.

- **Launch planning workspace**  
  Generate launch checklists, milestones, messaging angles, and go-to-market tasks.

- **Weekly builder cadence**  
  Keep execution moving with a lightweight board for priorities, blockers, and next actions.

- **Landing page copy helper**  
  Support product messaging and clearer positioning for launch-ready communication.

- **Structured AI outputs**  
  Built to support future JSON-based flows for planning, prioritization, and summarization.

## Why this project exists

Many tools stop at ideation. Many task managers start too late. LaunchDeck focuses on the awkward middle: turning vague momentum into practical execution.

## Why MiMo is a strong fit

MiMo can power the structured generation layer for:
- summarization
- PRD drafting
- product framing
- feature prioritization
- launch planning
- copy refinement

This makes LaunchDeck a good candidate for a planning-first AI product experience rather than a basic chat wrapper.

## Demo structure

Current MVP includes:
- premium landing page
- mock workspace dashboard
- architecture / prompt workflow section
- roadmap section
- submission-ready positioning copy

## Tech stack

- React
- Vite
- Plain CSS

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy to Vercel

This project is Vercel-friendly out of the box.

### Option 1: Deploy with Vercel dashboard
1. Push this repo to GitHub
2. Import the repository in Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

### Option 2: Deploy with Vercel CLI
```bash
npm i -g vercel
vercel
```

For production deployment:
```bash
vercel --prod
```

## Suggested public positioning

**One-line description**
> An AI workspace that turns rough product ideas into launch-ready plans for solo builders.

**Short pitch**
> LaunchDeck helps solo founders move from scattered product notes to structured PRDs, launch checklists, and weekly execution plans. Instead of acting like a generic chatbot, it organizes product thinking into concrete outputs that help builders ship with more clarity.

## Suggested repository sections to add later

- screenshots
- live demo URL
- architecture diagram
- prompt examples
- real MiMo integration notes

## Next iteration ideas

- connect to MiMo API
- add project persistence
- support multiple workspaces
- add structured output templates
- export launch plans and briefs

## Project status

MVP frontend concept complete and production build verified.
