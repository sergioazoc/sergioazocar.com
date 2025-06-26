---
title: 'What I Learned Building Design Systems and What I Would Do Differently'
description: I’ll share my experience creating Design Systems and tell you what I would do differently so you don’t make the same mistakes I did.
author: Sergio Azócar
tags:
  - design system
  - frontend
  - components
  - best practices
union: what-i-learned-building-design-systems-and-what-i-would-do-differently
date: 25/06/2025
img: /images/blog/what-i-learned-building-design-systems-and-what-i-would-do-differently.png
published: true
---

## What is a Design System?

Simply put, it's a collection of **rules**, **components**, and **guidelines** that act as a **single source of truth** for designing and building interfaces.

A good Design System defines everything from **colors**, **typography**, and **spacing**, to how **buttons**, **forms**, **alerts**, and more should behave. But it goes far beyond the visual: it also defines how design and development communicate, how patterns are documented, and how the product evolves consistently.

> The goal is for the entire team to speak the same language, design faster, and build products that feel coherent—without reinventing the wheel on every screen.

It’s not just a component library. It’s a way of working that seeks to **align design, code, and user experience**.

I'll go into more detail about how I built mine and what I learned, but first I want to tell you what it was like to face this idea from scratch.

## How I Ended Up Building Design Systems

After working on different projects and teams, I began to notice patterns that kept repeating:

* The same button designed three different ways
* Inconsistent behavior in similar components
* Duplicated or hard-to-maintain code
* Misunderstandings between design and development
* Interfaces that looked great in Figma, but not in production

Every time a product grew, so did the visual and technical chaos. And with it, the time we lost solving the same problems over and over again.

That’s when I realized we needed more than just a component library. We needed a **shared way to build interfaces**, with clear rules, centralized decisions, and a source of truth for all teams.

## Expectations vs. Reality

Remember when you had to do group projects at school?
Everyone did their part separately, put it all together at the end… and the result was a total "Frankenstein."

Well, building a Design System often feels like that 😅.

At first, you think it’s going to organize everything, magically uniting design and development. But in practice, misunderstandings, shortcuts, and crossed decisions appear, and what should be a coherent system starts to fall apart.

Here are some of the biggest differences I experienced between what I imagined… and what actually happened:

### 🧠 Expectation:

> “I'll create a reusable component library and the team will happily use it.”

**🧱 Reality:**
Some devs ignore it, others break it, and others don’t know how to use it.
Without documentation, onboarding, and internal support, no one adopts it as you expected.

### 🎨 Expectation:

> “The design is in Figma, I just have to replicate it.”

**⚠️ Reality:**
The design doesn’t consider states, errors, focus, interaction, loading...
I ended up making a lot of technical decisions that weren’t defined.

### 🧪 Expectation:

> “Once the components are done, we won’t need to touch them again.”

**🔄 Reality:**
Design evolves, new requirements come up, and each change affects multiple parts of the system.
A Design System needs constant maintenance.

### 🧩 Expectation:

> “I’ll create generic and reusable components for everything.”

**🧨 Reality:**
Overly flexible components end up being hard to maintain, test, or understand.
Sometimes it’s better to have clear variants than a single component with 15 props.

### 👥 Expectation:

> “Design and development will work as one team.”

**📉 Reality:**
Without clear processes and a common language, misunderstandings happen all the time.
Collaboration isn’t automatic—you have to build those bridges intentionally.

### 📦 Expectation:

> “With Tailwind, I can do everything without a Design System.”

**🔍 Reality:**
Tailwind helps, but without shared design decisions, tokens, and a clear structure, your project still becomes inconsistent.

### ⏳ Expectation:

> “I'll have the system ready in a few weeks.”

**📆 Reality:**
A Design System is never finished. It’s a living system that grows, adapts, and needs to evolve alongside your product.

## Design and Development Needs

When you set out to build a Design System—whether from scratch or based on an existing foundation—there are always two sides of the same coin: what **Design** and **Development** want and need. That’s where all the ~~problems~~ challenges begin.

Let’s take a look at what each team needs.

### Design 🎨

* **Visual consistency**: A unified visual language (colors, typography, spacing, iconography, etc.).
* **Speed and efficiency**: The ability to design interfaces without reinventing the same components every time.
* **Scalable designs**: What works on one screen should work on others (web, mobile, responsive...).
* **Clear, reusable design tokens**: Technical definitions for colors, sizes, fonts, z-index, etc.
* **Direct alignment with implementation**: What’s designed should look the same in production.

### Development 💻

* **True component reuse**: A stable, well-documented, and easy-to-use library.
* **Functional and technical consistency**: Same prop patterns, slots, states, accessibility, validation, etc.
* **Ease of maintenance**: Clean code, clear naming, tests, and no duplicated logic.
* **Living documentation**: Storybook (or similar), with real examples—not just theory.
* **Adaptability across contexts**: A button (for example) should work the same in all our applications.

Each team has its own priorities, but for a Design System to work, they must **collaborate**, making decisions based on shared definitions. That’s where the real intersection happens.

### Shared Needs: The Balance Point 🤝

* **Common language**: Tokens, component names, variants, states. Everyone should speak the same language.
* **Smooth design–development process**: Clear handoffs from Figma (or whatever tool is used), efficient handovers, mutual feedback.
* **Versioning and change control**: So that design changes can be implemented and communicated without breaking the system.
* **Cross-team adoption**: It shouldn’t be stuck in one team. It has to be easy to understand and use by everyone.

> In short, a Design System needs to be strict enough to uphold design definitions and prevent undocumented visual changes, but flexible enough to extend and adapt without breaking things.

## How to Drive System Adoption

Having a technically perfect Design System doesn’t mean much if no one uses it.

One of the biggest challenges isn’t building the system—it’s getting the team to actually adopt it. And I don’t just mean “being aware it exists,” I mean **integrating it into their daily workflow**, respecting it, questioning it, and keeping it alive.

Here’s what helped me (and what I learned the hard way):

* **Involve people from the start**: If the system is built in isolation, it will generate resistance. The more voices involved early on, the more ownership it creates.
* **Show value quickly**: A useful, well-documented, easy-to-use component is worth more than a promise of “someday we’ll have everything tidy.”
* **Document with empathy**: It’s not just about how to use a component, it’s about how someone new will understand it. Real examples, screenshots, use cases, FAQs—all of it helps.
* **Provide internal support**: If someone has a problem with a component, there should be a quick way to solve it. Slack, issues, pair programming… whatever it takes, just don’t let people feel alone—and have a clear way to report issues.
* **Celebrate usage**: When someone adopts a component, improves it, or reports a bug—celebrate it. Small recognitions help the system feel alive, collaborative, and valuable.

> Adoption isn’t an event—it’s a process. It takes time, patience, and lots of communication.

## Lessons Learned and Final Recommendations

After all this, here are some takeaways I wish I had known earlier:

* **A Design System isn’t a project—it’s a product**. And like any product, it needs research, design, maintenance, communication, and evolution.
* **Start with what hurts the most**: Don’t try to solve everything from day one. Identify your biggest pain points and start there.
* **Perfection isn’t the goal**: There will always be debt, components to improve, and decisions to revisit. The goal is usefulness and evolution.
* **No adoption, no system**: If the team doesn’t use it, it’s just another folder in your repo.
* **Every team is different**: Don’t copy someone else’s system expecting it to work the same. Get inspired, sure—but adapt it to your context.
* **Anticipate problems**: Your Design System will break. Definitions will change. Plan for that. Build things modular and flexible.
* **Use Atomic Design**: But use it wisely. Every component is a world of its own. The more atomic each one is, the easier it is to update or extend without breaking everything.

> A Design System is a long-term investment. It can be challenging, even frustrating at times, but once it starts working, **the whole team benefits from speed, consistency, and confidence**.
