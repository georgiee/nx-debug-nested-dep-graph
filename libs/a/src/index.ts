export * from './lib/a.module';
import {B} from '@debug-nx-deps-problem/b';
console.log(`B works in A: ${B}`);