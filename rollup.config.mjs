
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
  let outputFileDir = `dist`;
  let outputFileName = `js-utils`;

  if (!isCombined) {
    outputName += `_${_upperFirst(_camelCase(pkg.name))}`;
    outputFileDir += `/${pkg.name}`;
    outputFileName += `.${pkg.name}`;
  }

  pkgs.push({
    input: inputPath,
    output: [
      {
        name: outputName,
        file: `${outputFileDir}/${outputFileName}.cjs.js`,
        format: 'cjs'
      },
      {
        name: outputName,
        file: `${outputFileDir}/${outputFileName}.esm.js`,
        format: 'esm'
      },

      {
        name: outputName,
        file: `${outputFileDir}/${outputFileName}.iife.js`,
        format: 'iife'
      },
      {
        name: outputName,
        file: `${outputFileDir}/${outputFileName}.iife.min.js`,
        format: 'iife',
        plugins: [terser()]
      },

      {
        name: outputName,
        file: `${outputFileDir}/${outputFileName}.umd.js`,
        format: 'umd'
      },
      {
        name: outputName,
        file: `${outputFileDir}/${outputFileName}.umd.min.js`,
        format: 'umd',
        plugins: [terser()]
      }
    ],
  });
});

export default pkgs;
