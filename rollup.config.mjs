
import _camelCase from 'lodash-es/camelCase.js';
import _upperFirst from 'lodash-es/upperFirst.js';

import { terser } from 'rollup-plugin-terser';

const pkgs = [];

[
  {name: 'is'},
].forEach((pkg) => {
  const inputPath = `src/${pkg.name}.js`;
  const outputName = `JsUtils_${_upperFirst(_camelCase(pkg.name))}`;

  pkgs.push({
    input: inputPath,
    output: [
      {
        name: outputName,
        file: `dist/js-utils.${pkg.name}.cjs.js`,
        format: 'cjs'
      },
      {
        name: outputName,
        file: `dist/js-utils.${pkg.name}.esm.js`,
        format: 'esm'
      },

      {
        name: outputName,
        file: `dist/js-utils.${pkg.name}.iife.js`,
        format: 'iife'
      },
      {
        name: outputName,
        file: `dist/js-utils.${pkg.name}.iife.min.js`,
        format: 'iife',
        plugins: [terser()]
      },

      {
        name: outputName,
        file: `dist/js-utils.${pkg.name}.umd.js`,
        format: 'umd'
      },
      {
        name: outputName,
        file: `dist/js-utils.${pkg.name}.umd.min.js`,
        format: 'umd',
        plugins: [terser()]
      }
    ],
  });
});

export default pkgs;
