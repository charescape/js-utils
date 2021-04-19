
import _camelCase from 'lodash-es/camelCase.js';
import _upperFirst from 'lodash-es/upperFirst.js';

import { terser } from 'rollup-plugin-terser';

const pkgs = [];

[
  {name: 'index'},
  {name: 'is'},
].forEach((pkg) => {
  const isCombined = pkg.name === 'index';

  const inputPath = `src/${pkg.name}.js`;
  let outputName = `JsUtils`;
  let outputFileName = `js-utils`;

  if (!isCombined) {
    outputName += `_${_upperFirst(_camelCase(pkg.name))}`;
    outputFileName += `.${pkg.name}`;
  }

  pkgs.push({
    input: inputPath,
    output: [
      {
        name: outputName,
        file: `dist/${outputFileName}.cjs.js`,
        format: 'cjs'
      },
      {
        name: outputName,
        file: `dist/${outputFileName}.esm.js`,
        format: 'esm'
      },

      {
        name: outputName,
        file: `dist/${outputFileName}.iife.js`,
        format: 'iife'
      },
      {
        name: outputName,
        file: `dist/${outputFileName}.iife.min.js`,
        format: 'iife',
        plugins: [terser()]
      },

      {
        name: outputName,
        file: `dist/${outputFileName}.umd.js`,
        format: 'umd'
      },
      {
        name: outputName,
        file: `dist/${outputFileName}.umd.min.js`,
        format: 'umd',
        plugins: [terser()]
      }
    ],
  });
});

export default pkgs;
