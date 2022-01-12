// Code your solution here

const findMatching = (arr , str) => {
  return arr.filter(name => {
    return name.toUpperCase() === str.toUpperCase()
  })
}

const fuzzyMatch = (arr, letters) => {
  return arr.filter(name => {
    return name.startsWith(letters)
  })
}

const matchName = (arr, str) => {
  return arr.filter(driver => {
    return driver.name === str
  })
}