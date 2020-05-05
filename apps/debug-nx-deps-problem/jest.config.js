module.exports = {
  name: 'debug-nx-deps-problem',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/debug-nx-deps-problem',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
