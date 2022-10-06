import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

const author = "CodePsy-2001";
const repo = "deno-npm-template";


await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: { // jsdocs에서 더 많은 옵션을 찾아볼 수 있음
    deno: true,
  },
  package: { // package.json properties
    name: `@${author}/${repo}}`,
    author: `@${author}`,
    version: Deno.args[0],
    description: "My package.",
    license: "GNU General Public License v2.0",
    repository: {
      type: "git",
      url: `git+https://github.com/${author}/${repo}.git`,
    },
    publishConfig: {
      registry: "https://npm.pkg.github.com", // 깃허브의 NPM 패키지 저장소
      // access: "public",
    },
    bugs: {
      url: `https://github.com/${author}/${repo}/issues`,
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
