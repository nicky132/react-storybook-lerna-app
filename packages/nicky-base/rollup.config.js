import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
const isProd = process.env.NODE_ENV === 'production';
const packageJson = require('./package.json');

export default [
  {
    input: './index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal({ includeDependencies: !isProd }),
      resolve(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true
      }),
      postcss(),
      // terser(),
      image()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts(), image()]
  }
];
