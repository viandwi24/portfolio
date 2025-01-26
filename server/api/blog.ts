import RssParser from 'rss-parser'
import dayjs from 'dayjs'
import jsdom from 'jsdom'

export interface BlogItem {
  title: string
  content: string
  image?: string
  url: string
  source: string
  date: string
  author: string
  categories: string[]
  raw?: any
}

export default defineEventHandler(async (ctx) => {
  const $storage = useStorage()

  // defines
  const items: BlogItem[] = []

  // check cache
  const itemsFromStorage = await $storage.getItem<BlogItem[]>(`blog:items`)
  const configUpdateIn = 60 * 1000 * 60 * 24 // 1 day
  const lastUpdated = await $storage.getItem<string>(`blog:lastUpdated`)
  const needUpdate = lastUpdated && dayjs().diff(dayjs(lastUpdated), 'millisecond') > configUpdateIn
  if (itemsFromStorage && !needUpdate) {
    return {
      items: itemsFromStorage,
    }
  }

  // fecth rss feed
  const rssSources = [
    'https://viandwi24.medium.com/feed',
    // 'https://www.youtube.com/@sxurcecxdeid',
  ]
  for (const source of rssSources) {
    try {
      const parser = new RssParser()
      const feed = await parser.parseURL(source)
      for (const item of feed.items) {
        const date = dayjs(item.pubDate)

        // find img
        let img: string|undefined
        if (!img) {
          const content = item.content || item['content:encoded']
          const dom = new jsdom.JSDOM(content)
          const _img = dom.window.document.querySelector('img')?.src
          if (_img) img = _img
        }


        items.push({
          title: item.title || '-',
          image: img,
          url: item.link || '-',
          source: `medium:${source}`,
          date: date.toISOString(),
          content: item.contentSnippet || item['content:encodedSnippet'] || '-',
          author: item.creator || item['dc:creator'],
          categories: item.categories || [],
          raw: item,
        })
      }
    } catch (e) {
      console.error('Error fetching rss feed', e)
    }
  }
  
  // save to cache
  await $storage.setItem(`blog:items`, items)
  await $storage.setItem(`blog:lastUpdated`, dayjs().toISOString())
  console.log('Blog items updated')

  return {
    items,
  }
})