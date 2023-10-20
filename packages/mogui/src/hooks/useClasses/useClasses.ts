
type value = boolean | string | number | null | undefined
export type classNamesObject = Record<string, value>
export type className = classNamesObject | value

const classObjectToString = (className: classNamesObject) => {
  const keys = Object.keys(className)
  const classLength = keys.length
  let str = ''

  for (let i = 0; i < classLength; i++) {
    const key = keys[i]
    const value = className[key]
    
    if (!value) continue

    str = str ? `${str} ${String(key)}` : String(key) 
  }

  return str
}

const isObjectClassName = (value: className): value is  classNamesObject => typeof value === 'object' && !Array.isArray(value)

const useClasses = (...classNames: Array<className>): string => {
  const classLength = classNames.length
  let classes = ''
  if (classLength === 0) return classes

  for (let i = 0; i < classLength; i++) {
    const classValue = classNames[i]
    if (!classValue) continue
    if (isObjectClassName(classValue)) {
      classes += ` ${classObjectToString(classValue)}`
    } else {
      classes += ` ${String(classValue).trim()}`
    }
  }

  return classes.trim()
}

export default useClasses