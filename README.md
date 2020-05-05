# Debug Dependency Graph

```
create-nx-workspace debug-nx-deps-problem --preset angular --appName debug-nx-deps-problem --style=css --cli=nx
cd debug-nx-deps-problem

yarn nx g @nrwl/angular:lib a --publishable --style=css
yarn nx g @nrwl/angular:lib b --publishable --style=css
yarn nx g @nrwl/angular:lib c --publishable --style=css
yarn nx g @nrwl/angular:lib d --publishable --style=css


# Prepare: Add actual dependencies to a (dep on b) and c (dep on d).

```
## Debugging
Added some console logs in lieu of a verbose report by Nx. You will get this output per package:

```
> nx run a:build
---- checkDependentProjectsHaveBeenBuilt: [
  '/debug-nx-deps-problem/dist/libs/b/package.json'
]
---- updatePaths. dependencies: [
  {
    name: '@debug-nx-deps-problem/b',
    outputs: [ 'dist/libs/b' ],
    node: { name: 'b', type: 'lib', data: [Object] }
  }
]
```

## Context: OSX
### Flat

```
git co scenario-flat
yarn nx dep-graph

```

![v1-not-nested.png](docs/v1-not-nested.png)

Build works:
```
yarn nx run-many --target=build --projects=a,c --with-deps --skip-nx-cache

# some console logs from nx
yarn debug-nx-build
```


### Nested

Graph looks good. The option "group by folder" is supported in the graph viewer. So it's kind of expected to introduce folders for grouping ?

```
git co scenario-nested
yarn nx dep-graph
```

![v2-nested.png](docs/v2-nested.png)

Build works:
```
yarn nx run-many --target=build --projects=a,c --with-deps --skip-nx-cache

# same but with some console logs from nx
yarn debug-nx-build
```




## Context: Windows <TODO>