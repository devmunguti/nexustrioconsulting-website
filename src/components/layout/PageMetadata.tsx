import { useEffect } from 'react'

type PageMetadataProps = {
  title: string
  description: string
}

function PageMetadata({ title, description }: PageMetadataProps) {
  useEffect(() => {
    const previousTitle = document.title
    const metadata = [
      { selector: 'meta[name="description"]', attribute: 'name', key: 'description', content: description },
      { selector: 'meta[property="og:title"]', attribute: 'property', key: 'og:title', content: title },
      { selector: 'meta[property="og:description"]', attribute: 'property', key: 'og:description', content: description },
      { selector: 'meta[property="og:type"]', attribute: 'property', key: 'og:type', content: 'website' },
    ]
    const previousMetadata = metadata.map((item) => {
      const element = document.querySelector<HTMLMetaElement>(item.selector)
      return { element, content: element?.content }
    })

    document.title = title

    metadata.forEach((item, index) => {
      let element = previousMetadata[index].element
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(item.attribute, item.key)
        document.head.append(element)
      }
      element.content = item.content
    })

    return () => {
      document.title = previousTitle
      previousMetadata.forEach(({ element, content }, index) => {
        if (element && content !== undefined) element.content = content
        else document.querySelector<HTMLMetaElement>(metadata[index].selector)?.remove()
      })
    }
  }, [description, title])

  return null
}

export default PageMetadata
