export type className = string | boolean | number

const useClasees = (...classNames: Array<className>): string => {
  let classes = ''
  const classLength = classNames.length

  if (classLength === 0) return classes

  for (let i = 0; i < classLength; i++) {
    const classValue = classNames[i]
    
    if (!classValue) continue
    
    classes += `${String(classValue).trim()}`
    console.log(classes)
  }

  return classes.trim()
}

export default useClasees