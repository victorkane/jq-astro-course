# James Q Quick Astro 3 Course

- [course repo](https://github.com/jamesqquick/astro-course-demo)

## Intro to Astro and Project Setup

- Basic page routing based on layout and components
- css is local unless specified as global in layout, for example
- typescript: strict
- tailwind integration

```bash
victor@victorpc:jq-astro-course$ npx astro add tailwind
victor@victorpc:jq-astro-course$ npx astro add tailwind
✔ Resolving packages...

  Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭────────────────────────────────────────────────────╮
 │ npm install @astrojs/tailwind tailwindcss@^3.0.24  │
 ╰────────────────────────────────────────────────────╯

✔ Continue? … yes
✔ Installing dependencies...

  Astro will generate a minimal ./tailwind.config.mjs file.

✔ Continue? … yes

  Astro will make the following changes to your config file:

 ╭ astro.config.mjs ─────────────────────────────╮
 │ import { defineConfig } from 'astro/config';  │
 │                                               │
 │ import tailwind from "@astrojs/tailwind";     │
 │                                               │
 │ // https://astro.build/config                 │
 │ export default defineConfig({                 │
 │   integrations: [tailwind()]                  │
 │ });                                           │
 ╰───────────────────────────────────────────────╯

✔ Continue? … yes

   success  Added the following integration to your project:
  - @astrojs/tailwind
```

- core scaffolding for layout, header and footer
- complete section
- [commit chore(core header and footer components): scaffold](https://github.com/victorkane/jq-astro-course/commit/4f5966afd46c2aeef071c6ededae39689e11895c)

## Working with Markdown and Content Collections

- Introduction to markdown and frontmatter
  - [StackEdit (markdown playground)](https://stackedit.io/app#)
  - [Markdown Documentation](https://www.markdownguide.org/getting-started/)
- Introduction to Content Collections
  - [Documentation](https://docs.astro.build/en/guides/content-collections/)
  - [Sample Blog Posts](https://github.com/jamesqquick/astro-course-demo/tree/main/src/content/posts)
    - different in ssg and main branches (first and second parts of course)
  - [Sample Images](https://github.com/jamesqquick/astro-course-demo/tree/main/public/images)
  - vk Coding in Public excellent astro content creator also!
    - Also recommended by James Q Quick, **excellent Astro Collections aware VS Code based open source CMS** [Front Matter CMS](https://frontmatter.codes/)
      - [Front Matter CMS docs Generate content types from Astro Content Collection(s)](<https://frontmatter.codes/docs/getting-started#step-2.2-(optional):-generate-content-types-from-astro-content-collection(s)>)
    - [YT Coding in Public 2023-10-17 You may not ACTUALLY understand Content Collections…](https://youtu.be/Fcw4c3wzm7I?si=SDDxJ2t1MxV9F7n1) excellent video tut on Content Collections
    - [YT Coding in Public 2023-10-23 THE Astro App for Content Collections](https://youtu.be/byjO06X-LJw?si=kEQX5gGNxJgccc0L) shameless plug by same author for (non-open source, Mac based desktop app 😢 otherwise excellent astro collections CMS [Darkmatter](https://getdarkmatter.dev/))
- Configuring Content Collections with Zod
  - [commit: chore(posts content collection) configure with zod](https://github.com/victorkane/jq-astro-course/commit/b7ad008070ea0699ba142522a9e62aedf9888b2f)
  - [Zod Documentation](https://zod.dev/)
  - [Date Fns](https://date-fns.org/)
- Querying and Displaying List of Blog Posts
  - [commit: chore(posts content collection): query and display list of blog posts on a blog page](https://github.com/victorkane/jq-astro-course/commit/01ea54856d05c98c60523d8f6f3618695edd7ceb)

## Dynamic Routes and Pagination

## SEO and Meta Tags

## Updating the Home Page and Clean Up

## Image Optimization

## Deploying

## Original README auto created: Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
