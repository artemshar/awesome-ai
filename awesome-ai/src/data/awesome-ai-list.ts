import { sortBy } from "@site/src/utils/jsUtils";

export type TagType = "favorite" | "opensource" | "pro";

export type AwesomeAI = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  favorite: {
    label: "Favorite",
    description:
      "Our favorite Docusaurus sites that you must absolutely check out!",
    color: "#e9669e",
  },
  opensource: {
    label: "Open Source",
    description: "This site is open source!",
    color: "#CCCCCC",
  },
  pro: {
    label: "Pro",
    description: "This site is required to be paid!",
    color: "#000000",
  },
};

export const TagList = Object.keys(Tags) as TagType[];

const AwesomeAI: AwesomeAI[] = [
  {
    title: "AI-Speaker",
    description: "Local, reliable, fast and private Audio and IoT gate.",
    preview: require("./showcase/aispeaker.png"),
    website: "https://ai-speaker.com/",
    source: "https://github.com/sviete/AIS-WWW",
    tags: ["opensource"],
  },
];


function sortAwesomeAI() {
  let result = AwesomeAI;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes("favorite"));
  return result;
}

export const sortedAwesomeAI = sortAwesomeAI();
