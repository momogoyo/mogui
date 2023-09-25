export type ScaleInputKeys =
  | 'pl'
  | 'pr'
  | 'pb'
  | 'pt'
  | 'px'
  | 'py'
  | 'ml'
  | 'mr'
  | 'mb'
  | 'mt'
  | 'mx'
  | 'my'
  | 'width'
  | 'height'
  | 'font'

export type ScaleProps = {
  pl?: string | number,
  pr?: string | number,
  pb?: string | number,
  pt?: string | number,
  px?: string | number,
  py?: string | number,
  ml?: string | number,
  mr?: string | number,
  mb?: string | number,
  mt?: string | number,
  mx?: string | number,
  my?: string | number,
  padding?: string | number,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingBottom?: string | number,
  paddingTop?: string | number,
  margin?: string | number,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginBottom?: string | number,
  marginTop?: string | number,
  w?: string | number,
  h?: string | number,
  width?: string | number,
  height?: string | number,
  font?: string | number,
  unit?: string | number
}

export type DynamicScalePipe = (scale1x: number, defaultValue?: string | number) => string
export type DynamicScale = { [key in ScaleInputKeys]: DynamicScalePipe }
export type GetScalePropsFunction = (key: keyof ScaleProps) => ScaleProps[keyof ScaleProps]
export type GetAllScalePropsFunction = () => ScaleProps

export interface ScaleConfig {
  SCALES: DynamicScale
  getScaleProps: GetScalePropsFunction
  getAllScaleProps: GetAllScalePropsFunction
  unit: string
}