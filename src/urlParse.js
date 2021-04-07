export const urlParse = (url) => {
  if (!url) { return null }
  let stepOne = url.split('?')
  let query = {}
  stepOne.map(item => {
    let queryItem = item.split('=')
    query[queryItem[0]] = queryItem[1]
  })

  return {
    fullUrl: url,
    queryString: stepOne[1],
    query
  }
}
