
type Lang = "TypeScript" | "JavaScript" | "Ruby" | "Go";
type FrameWork = "Svelte" | "React" | "Sveltekit" | "Rails";
type OtherTechStack = "GithubAction" | "GraphQL" | "ESLint";

interface Project {
  name: string;
  description: string;
  techStack: (Lang | FrameWork | OtherTechStack)[];
  link: string;
}

export const projects: Project[] = [
    {
      name: "blog",
      description: "This blog. Made with Sveltekit and Hosted on Vercel",
      techStack: ["Svelte", "Sveltekit"],
      link: "https://github.com/K-Sato1995/blog",
    },
    {
      name: "react-toc",
      description:
        "React component for creating a table of contents from the given markdown text.",
      techStack: ["TypeScript", "React"],
      link: "https://github.com/K-Sato1995/react-toc",
    },

    {
      name: "eslint-plugin-no-jp",
      description:
        "ESLint plugin that helps the team(you) stick to English throuout the codebase",
      techStack: ["TypeScript", "ESLint"],
      link: "https://github.com/K-Sato1995/eslint-plugin-no-jp",
    },
    {
      name: "md-to-json-converter",
      description:
        "Node module that converts your markdown files to a single json file so that you can use it as a static api.",
      techStack: ["TypeScript"],
      link: "https://github.com/K-Sato1995/md-to-json-converter",
    },
    {
      name: "webpack-bundle-analyzer-action",
      description:
        "GitHub action that injects webpack-bundle-analyzer in your webpack config and post the result on Pull requests.",
      techStack: ["TypeScript", "GithubAction"],
      link: "https://github.com/K-Sato1995/webpack-bundle-analyzer-action",
    },
    {
      name: "qiita-enhancer",
      description: "Google plugin to make Qiita better for me",
      techStack: ["TypeScript"],
      link: "https://github.com/K-Sato1995/qiita-enhancer",
    },
    {
      name: "spell-generator",
      description:
        "Super simple ruby gem. I made it to help out other people start/practice contributing OSS projects.",
      techStack: ["Ruby"],
      link: "https://github.com/K-Sato1995/spell_generator",
    },
    {
      name: "my-journey-of-go",
      description: "My Journey of learning the Go programming language",
      techStack: ["Go"],
      link: "https://github.com/K-Sato1995/my_journey_of_go",
    },
  ];