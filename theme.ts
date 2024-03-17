import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const medzikTheme: CustomThemeConfig = {
    name: 'medzik',
    properties: {
        // =~= Theme Properties =~=
        '--theme-font-family-base': `system-ui`,
        '--theme-font-family-heading': `system-ui`,
        '--theme-font-color-base': '0 0 0',
        '--theme-font-color-dark': '255 255 255',
        '--theme-rounded-base': '9999px',
        '--theme-rounded-container': '8px',
        '--theme-border-base': '1px',
        // =~= Theme On-X Colors =~=
        '--on-primary': '0 0 0',
        '--on-secondary': '0 0 0',
        '--on-tertiary': '0 0 0',
        '--on-success': '0 0 0',
        '--on-warning': '0 0 0',
        '--on-error': '0 0 0',
        '--on-surface': '0 0 0',
        // =~= Theme Colors  =~=
        // primary | #8ff0a4
        '--color-primary-50': '238 253 241', // #eefdf1
        '--color-primary-100': '233 252 237', // #e9fced
        '--color-primary-200': '227 251 232', // #e3fbe8
        '--color-primary-300': '210 249 219', // #d2f9db
        '--color-primary-400': '177 245 191', // #b1f5bf
        '--color-primary-500': '143 240 164', // #8ff0a4
        '--color-primary-600': '129 216 148', // #81d894
        '--color-primary-700': '107 180 123', // #6bb47b
        '--color-primary-800': '86 144 98', // #569062
        '--color-primary-900': '70 118 80', // #467650
        // secondary | #57e389
        '--color-secondary-50': '230 251 237', // #e6fbed
        '--color-secondary-100': '221 249 231', // #ddf9e7
        '--color-secondary-200': '213 248 226', // #d5f8e2
        '--color-secondary-300': '188 244 208', // #bcf4d0
        '--color-secondary-400': '137 235 172', // #89ebac
        '--color-secondary-500': '87 227 137', // #57e389
        '--color-secondary-600': '78 204 123', // #4ecc7b
        '--color-secondary-700': '65 170 103', // #41aa67
        '--color-secondary-800': '52 136 82', // #348852
        '--color-secondary-900': '43 111 67', // #2b6f43
        // tertiary | #99c1f1
        '--color-tertiary-50': '240 246 253', // #f0f6fd
        '--color-tertiary-100': '235 243 252', // #ebf3fc
        '--color-tertiary-200': '230 240 252', // #e6f0fc
        '--color-tertiary-300': '214 230 249', // #d6e6f9
        '--color-tertiary-400': '184 212 245', // #b8d4f5
        '--color-tertiary-500': '153 193 241', // #99c1f1
        '--color-tertiary-600': '138 174 217', // #8aaed9
        '--color-tertiary-700': '115 145 181', // #7391b5
        '--color-tertiary-800': '92 116 145', // #5c7491
        '--color-tertiary-900': '75 95 118', // #4b5f76
        // success | #84cc16
        '--color-success-50': '237 247 220', // #edf7dc
        '--color-success-100': '230 245 208', // #e6f5d0
        '--color-success-200': '224 242 197', // #e0f2c5
        '--color-success-300': '206 235 162', // #ceeba2
        '--color-success-400': '169 219 92', // #a9db5c
        '--color-success-500': '132 204 22', // #84cc16
        '--color-success-600': '119 184 20', // #77b814
        '--color-success-700': '99 153 17', // #639911
        '--color-success-800': '79 122 13', // #4f7a0d
        '--color-success-900': '65 100 11', // #41640b
        // warning | #ffbe6f
        '--color-warning-50': '255 245 233', // #fff5e9
        '--color-warning-100': '255 242 226', // #fff2e2
        '--color-warning-200': '255 239 219', // #ffefdb
        '--color-warning-300': '255 229 197', // #ffe5c5
        '--color-warning-400': '255 210 154', // #ffd29a
        '--color-warning-500': '255 190 111', // #ffbe6f
        '--color-warning-600': '230 171 100', // #e6ab64
        '--color-warning-700': '191 143 83', // #bf8f53
        '--color-warning-800': '153 114 67', // #997243
        '--color-warning-900': '125 93 54', // #7d5d36
        // error | #f66151
        '--color-error-50': '254 231 229', // #fee7e5
        '--color-error-100': '253 223 220', // #fddfdc
        '--color-error-200': '253 216 212', // #fdd8d4
        '--color-error-300': '251 192 185', // #fbc0b9
        '--color-error-400': '249 144 133', // #f99085
        '--color-error-500': '246 97 81', // #f66151
        '--color-error-600': '221 87 73', // #dd5749
        '--color-error-700': '185 73 61', // #b9493d
        '--color-error-800': '148 58 49', // #943a31
        '--color-error-900': '121 48 40', // #793028
        // surface | #2ec27e
        '--color-surface-50': '224 246 236', // #e0f6ec
        '--color-surface-100': '213 243 229', // #d5f3e5
        '--color-surface-200': '203 240 223', // #cbf0df
        '--color-surface-300': '171 231 203', // #abe7cb
        '--color-surface-400': '109 212 165', // #6dd4a5
        '--color-surface-500': '46 194 126', // #2ec27e
        '--color-surface-600': '41 175 113', // #29af71
        '--color-surface-700': '35 146 95', // #23925f
        '--color-surface-800': '28 116 76', // #1c744c
        '--color-surface-900': '23 95 62' // #175f3e
    }
};
