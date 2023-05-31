import { unified } from 'unified'
import { describe, test, expect } from 'vitest'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { rehypePluginPreWrapper } from '../plugin-mdx/rehypePlugins/preWrapper'
import { rehypePluginShiki } from '../../node/plugin-mdx/rehypePlugins/shiki'
import shiki from 'shiki'
import remarkMdx from 'remark-mdx'
import remarkStringify from 'remark-stringify'
import { remarkPluginToc } from 'node/plugin-mdx/remarkPlugins/toc'

describe('Markdown compile cases', async () => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePluginPreWrapper)
    .use(rehypePluginShiki, {
      highlighter: await shiki.getHighlighter({ theme: 'monokai' })
    })
    .use(rehypeStringify)

  test('Compile title', async () => {
    const mdContent = '# 123'
    const result = processor.processSync(mdContent)
    expect(result.value).toMatchInlineSnapshot('"<h1>123</h1>"')
  })

  test('Compile code', async () => {
    const mdContent = 'I am using `3mdoc.js`'
    const result = processor.processSync(mdContent)
    expect(result.value).toMatchInlineSnapshot('"<p>I am using <code>3mdoc.js</code></p>"')
  })

  test('Compile code block', async () => {
    const mdContent = '```js\nconsole.log(123);\n```'
    const result = processor.processSync(mdContent)
    expect(result.value).toMatchInlineSnapshot(`
      "<div class=\\"language-js\\"><span class=\\"lang\\">js</span><pre class=\\"shiki monokai\\" style=\\"background-color: #272822\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #F8F8F2\\">console.</span><span style=\\"color: #A6E22E\\">log</span><span style=\\"color: #F8F8F2\\">(</span><span style=\\"color: #AE81FF\\">123</span><span style=\\"color: #F8F8F2\\">);</span></span>
      <span class=\\"line\\"></span></code></pre></div>"
    `)
  })

  test('Compile TOC', async () => {
    const remarkProcessor = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(remarkPluginToc)
      .use(remarkStringify)
    const mdContent = '## title `xxx` [link](/path)'
    const result = remarkProcessor.processSync(mdContent)
    expect(result.value.toString().replace(mdContent, ''))
      .toMatchInlineSnapshot()
  })
})