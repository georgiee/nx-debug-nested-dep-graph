# Debug Dependency Graph

```
create-nx-workspace debug-nx-deps-problem --preset angular --appName debug-nx-deps-problem --style=css --cli=nx
cd debug-nx-deps-problem

yarn nx g @nrwl/angular:lib a --publishable --style=css
yarn nx g @nrwl/angular:lib b --publishable --style=css
yarn nx g @nrwl/angular:lib c --publishable --style=css
yarn nx g @nrwl/angular:lib d --publishable --style=css

yarn nx dep-graph

```