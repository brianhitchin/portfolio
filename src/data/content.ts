/**
 * Single source of truth for the site's copy and data.
 * Swap any value below to update copy — nothing else needs to change
 * for it to flow through the whole site.
 */

export const profile = {
  name: "Brian Hitchin",
  role: "Full-Stack Engineer",
  location: "Seattle, WA",
  email: "brianleehitchin@gmail.com",
  availability: "Open to new opportunities",
  resumeUrl: "/resume.pdf",
  linkedin: "https://www.linkedin.com/in/brian-hitchin-940b57268/",
};

export const hero = {
  roleLine: "Full-Stack Engineer · Seattle, WA",
  headline: "I build platforms where applied AI meets careful backend engineering.",
  headlineAccent: "applied AI",
  sub: "React, Java/Spring, and cloud systems serving thousands of internal users — with the operational overhead designed out of them.",
};

export type Project = {
  n: string;
  title: string;
  body: string;
  stack: string[];
  metric: string;
  metricLabel: string;
};

export const projects: Project[] = [
  {
    n: "01",
    title: "AI-Assisted Access Recommendation Engine",
    body: "Rule-based policy paired with a contextual-bandit model that learns from admin grant/deny decisions — so the obvious requests stop waiting on a human.",
    stack: ["Python", "Contextual bandits", "Spring Boot"],
    metric: "−90%",
    metricLabel: "Mean ticket resolution",
  },
  {
    n: "02",
    title: "Access-Control Platform",
    body: "Full-stack platform managing entitlements across several internal applications, with query and cache optimization on the backend path.",
    stack: ["React", "Java / Spring Boot", "SQL Server", "MUI"],
    metric: "5,000+",
    metricLabel: "Users managed",
  },
  {
    n: "03",
    title: "Centralized JWT Auth Gateway",
    body: "A single validation path for Entra-issued tokens across every service — one place to reason about identity instead of five.",
    stack: ["Spring Security", "Entra ID", "Azure"],
    metric: "10M+",
    metricLabel: "Calls, zero incidents",
  },
  {
    n: "04",
    title: "Query Execution Platform + LLM Optimizer",
    body: "Heterogeneous sources behind one interface, with an LLM layer that rewrites user-authored queries before they run.",
    stack: ["Snowflake", "Azure Data Explorer", "PostgreSQL", "MongoDB"],
    metric: "−30%",
    metricLabel: "API response time",
  },
];

export const about = {
  paragraphs: [
    {
      text: "I came to engineering from neuroscience, which is probably why I keep reaching for the same question: where is the system making a human do work it could do itself?",
      accent: "where is the system making a human do work it could do itself?",
    },
  ],
  secondary:
    "Most of my work lives in that gap — access requests that used to sit in a queue, queries that used to need a specialist, tokens that used to be validated five different ways. I like backend design that's boring on purpose and interfaces that make a hard system feel obvious.",
  facts: [
    { label: "Now", value: "Full-Stack Developer, T-Mobile (contract) — Seattle" },
    { label: "Depth", value: "Java / Spring, React + Redux, Node, Python" },
    { label: "Data", value: "SQL Server, Postgres, Mongo, Snowflake, ADX" },
    { label: "Before", value: "App Academy · B.A. Neuroscience, UC Berkeley" },
    { label: "Also", value: "AWS Cloud Practitioner · Korean (professional)" },
  ],
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
