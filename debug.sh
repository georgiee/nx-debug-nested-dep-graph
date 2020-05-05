echo "Debugging Nx Workspace";

# monkey patch node_modules/@nrwl/workspace/src/utils/buildable-libs-utils.js
# for some console.log during the run
echo "Debug Patch for console output"
patch -p1 node_modules/@nrwl/workspace/src/utils/buildable-libs-utils.js ./debug-files/patch-buildable-libs.patch

# clean dist
echo "Clean Dist Folder"
rm -rf dist/

# run build
yarn nx run-many --target=build --projects=a,c --with-deps  --skip-nx-cache || true

# undo debug patch
echo "Revert Debug Patch"
patch -R node_modules/@nrwl/workspace/src/utils/buildable-libs-utils.js ./debug-files/patch-buildable-libs.patch