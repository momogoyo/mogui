export type ClassNameObject = Record<string, boolean | string | number | null | undefined>
export type ClassName = string | ClassNameObject | null | undefined | boolean | number

export const useClasses = (...classNames: Array<ClassName>) => {
  return `` 
}

export default useClasses