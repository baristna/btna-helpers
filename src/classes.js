export const classes = (...args) => {
  let final = [];

  args.map((item, key) => {
    // if string push directly
    if (typeof item === 'string') {
      final.push(item)

    // else if array first item is class name and the second one condition
    } else if (Array.isArray(item)) {
      if (item[1]) {
        final.push(item[0])
      }
    }
  })

  return final.join(' ')
}
