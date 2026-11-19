import { useEffect } from 'react'

type PageMetadataProps = {
  title: string
  description: string
}

function PageMetadata({ title, description }: PageMetadataProps) {
  useEffect(() => {
    const previousTitle = document.title
    const previousDescriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = previousDescriptionMeta?.content
    let descriptionMeta = previousDescriptionMeta

    document.title = title

    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.name = 'description'
      document.head.append(descriptionMeta)
    }

    descriptionMeta.content = description

    return () => {
      document.title = previousTitle
      if (previousDescriptionMeta && previousDescription !== undefined) {
        previousDescriptionMeta.content = previousDescription
      } else {
        descriptionMeta?.remove()
      }
    }
  }, [description, title])

  return null
}

export default PageMetadata
