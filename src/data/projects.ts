
type Lang = "TypeScript" | "JavaScript" | "Ruby" | "Go";
type FrameWork = "Svelte" | "React" | "Sveltekit" | "Rails";
type OtherTechStack = "GithubAction" | "GraphQL" | "ESLint" | "Architecture" | "Linux";

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


  export const articles: Project[] = [
    {
      name: "Understanding Linux Permissions",
      description: "Dint't undernd it at first, so looked them up and wrote a post about them",
      techStack: ["Linux"],
      link: "https://dev.to/k_penguin_sato/understanding-linux-permissions-397e",
    },
    {
      name: "My Journey of Go",
      description: "Made a series of posts about learning th Go programming language.",
      techStack: ["Go"],
      link: "https://dev.to/k_penguin_sato/my-journey-of-go-functions-variables-12n",
    },
    {
      name: "Ruby Getters and Setters",
      description: "Explained what getters and stters are in Ruby.",
      techStack: ["Ruby"],
      link: "https://dev.to/k_penguin_sato/ruby-getters-and-setters-1p30",
    },
    {
      name: "Understand classes in TypeScript",
      description: "Explained how classes work in TypeScript in plain English.",
      techStack: ["TypeScript"],
      link: "https://dev.to/k_penguin_sato/understand-how-classes-work-in-typescript-3ce0",
    },
    {
      name: "Svelteの根本部分を簡単に理解する",
      description: "Svelteとはそもそも何かの基本部分を簡単に説明できたらな〜と思い書いた。",
      techStack: ["Svelte"],
      link: "https://qiita.com/k-penguin-sato/items/3a85f89bf193b63ed740",
    },
    {
      name: "Generics(ジェネリックス)を理解する",
      description: "TypeScriptのGenericsを誰でも簡単に理解できる様書いた。",
      techStack: ["TypeScript"],
      link: "https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4",
    },


    {
      name: "Opaque型を用いたより強力な型構成",
      description: "どんな文字列にも単にstringではなく、それぞれ意味を持たせるにはどうするんだ？と思い調べて書いた。",
      techStack: ["TypeScript"],
      link: "https://qiita.com/k-penguin-sato/items/0adb0d9df35d96d04b1c",
    },
    {
      name: "自分なりにSOLIDの原則を理解する",
      description: "SOLIDの原則を可能な限り簡単に自分に説明してみた。",
      techStack: ["Architecture"],
      link: "https://qiita.com/k-penguin-sato/items/86b8262bfbe189fc72c3",
    },

  ];