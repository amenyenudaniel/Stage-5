import { circle, share, revisit } from "../assets";
export const featureData = [
  {
    id: 1,
    icon: circle,
    title: "Simple Screen Recording",
    content:
      "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
  },
  {
    id: 2,
    icon: share,
    title: "Easy-to-Share URL",
    content:
      "Share your recordings instantly with a single link. No attachments, no downloads.",
  },
  {
    id: 3,
    icon: revisit,
    title: "Revisit Recordings",
    content:
      "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
  },
];

export const howItWorksData = [
  {
    id: 1,
    icon: 1,
    title: "Record Screen",
    content:
      'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
  },
  {
    id: 2,
    icon: 2,
    title: "Share Your Recording",
    content:
      "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
  },
  {
    id: 3,
    icon: 3,
    title: "Learn Effortlessly",
    content:
      "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
  },
];

export const footerData = [
  {
    id: 1,
    title: "Menu",
    links: [
      { id: 1, linkName: "Home" },
      { id: 2, linkName: "Converter" },
      { id: 3, linkName: "How It Works" },
    ],
  },

  {
    id: 2,
    title: "About us",
    links: [
      { id: 1, linkName: "About" },
      { id: 2, linkName: "Contact Us" },
      { id: 3, linkName: "Privacy Policy" },
    ],
  },

  {
    id: 3,
    title: "Screen Record",
    links: [
      { id: 1, linkName: "Browser Window" },
      { id: 2, linkName: "Desktop" },
      { id: 3, linkName: "Application" },
    ],
  },
];
