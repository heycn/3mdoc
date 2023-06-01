import { VitePluginConfig } from 'unocss/vite'
import { presetAttributify, presetWind, presetIcons } from 'unocss'

const options: VitePluginConfig = {
  presets: [presetAttributify(), presetWind({}), presetIcons()],
  shortcuts: {
    'flex-center': 'flex justify-center items-center'
  },
  theme: {
    colors: {
      brandLight: 'var(--3mdoc-c-brand-light)',
      brandDark: 'var(--3mdoc-c-brand-dark)',
      brand: 'var(--3mdoc-c-brand)',
      text: {
        1: 'var(--3mdoc-c-text-1)',
        2: 'var(--3mdoc-c-text-2)',
        3: 'var(--3mdoc-c-text-3)',
        4: 'var(--3mdoc-c-text-4)'
      },
      divider: {
        default: 'var(--3mdoc-c-divider)',
        light: 'var(--3mdoc-c-divider-light)',
        dark: 'var(--3mdoc-c-divider-dark)'
      },
      gray: {
        light: {
          1: 'var(--3mdoc-c-gray-light-1)',
          2: 'var(--3mdoc-c-gray-light-2)',
          3: 'var(--3mdoc-c-gray-light-3)',
          4: 'var(--3mdoc-c-gray-light-4)'
        }
      },
      bg: {
        default: 'var(--3mdoc-c-bg)',
        soft: 'var(--3mdoc-c-bg-soft)',
        mute: 'var(--3mdoc-c-bg-mute)'
      }
    }
  },
  rules: [
    [
      /^divider-(\w+)$/,
      ([, w]) => ({
        [`border-${w}`]: '1px solid var(--3mdoc-c-divider-light)'
      }),
    ],
    [
      'menu-item-before',
      {
        'margin-right': '12px',
        'margin-left': '12px',
        width: '1px',
        height: '24px',
        'background-color': 'var(--3mdoc-c-divider-light)',
        content: '" "',
      },
    ]
  ]
}

export default options
