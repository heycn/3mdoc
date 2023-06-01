import { VitePluginConfig } from 'unocss/vite'
import { presetAttributify, presetWind, presetIcons } from 'unocss'

const options: VitePluginConfig = {
  presets: [presetAttributify(), presetWind({}), presetIcons()],
  shortcuts: {
    'flex-center': 'flex justify-center items-center'
  },
  theme: {
    colors: {
      brandLight: 'var(--blogsify-c-brand-light)',
      brandDark: 'var(--blogsify-c-brand-dark)',
      brand: 'var(--blogsify-c-brand)',
      text: {
        1: 'var(--blogsify-c-text-1)',
        2: 'var(--blogsify-c-text-2)',
        3: 'var(--blogsify-c-text-3)',
        4: 'var(--blogsify-c-text-4)'
      },
      divider: {
        default: 'var(--blogsify-c-divider)',
        light: 'var(--blogsify-c-divider-light)',
        dark: 'var(--blogsify-c-divider-dark)'
      },
      gray: {
        light: {
          1: 'var(--blogsify-c-gray-light-1)',
          2: 'var(--blogsify-c-gray-light-2)',
          3: 'var(--blogsify-c-gray-light-3)',
          4: 'var(--blogsify-c-gray-light-4)'
        }
      },
      bg: {
        default: 'var(--blogsify-c-bg)',
        soft: 'var(--blogsify-c-bg-soft)',
        mute: 'var(--blogsify-c-bg-mute)'
      }
    }
  },
  rules: [
    [
      /^divider-(\w+)$/,
      ([, w]) => ({
        [`border-${w}`]: '1px solid var(--blogsify-c-divider-light)'
      }),
    ],
    [
      'menu-item-before',
      {
        'margin-right': '12px',
        'margin-left': '12px',
        width: '1px',
        height: '24px',
        'background-color': 'var(--blogsify-c-divider-light)',
        content: '" "',
      },
    ]
  ]
}

export default options
