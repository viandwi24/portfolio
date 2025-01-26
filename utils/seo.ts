export const parseSeo = (seoSectionName: string, objRep?: object) => {
  const objDef = getPortfolioConfig(`seo.default`)
  const objSection = getPortfolioConfig(`seo.${seoSectionName}`)
  const obj = {...objDef, ...objSection, ...objRep}

  // give og meta
  const objRes = {
    ...obj,
    ogTitle: obj.ogTitle || obj.title,
    ogDescription: obj.ogDescription || obj.description,
    ogImage: obj.ogImage || obj.image, 
  }

  return objRes
}