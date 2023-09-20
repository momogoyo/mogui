# mogui

## Tooltip

### Props

- **text**: 툴팁에 표시될 텍스트
  - type: `string \| React.ReactNode`
  - default: ''
  
- **visible**: 툴팁의 표시 여부
  - type: `boolean`
  - default: `false`

- **initialVisible**: 초기 툴팁 표시 여부
  - type: `boolean`
  - default: `false`

- **type**: 스타일 type
  - type: `TooltipTypes`
  - default: `default`

- **placement**: 타겟에 대한 툴팁의 위치
  - type: `Placement`
  - default: `top`

- **trigger**: 툴팁을 트리거
  - type: `'click' \| 'hover'`
  - default: `hover`

- **enterDelay(ms)**: 툴팁이 표시 전 지연 시간(ms)
  - type: `number`
  - default: `100`

- **leaveDelay(ms)**: 툴팁이 사라지기 전 지연 시간(ms)
  - type: `number`
  - default: `100`

- **offset(px)**: 팝업과 타겟 사이의 거리(px)
  - type: `number`
  - default: `12`

- **onVisibleChange**: 툴팁 표시 상태가 변경될 때 호출되는 함수
  - type: `(visible: boolean) => void`
  - default: 없음

- **...props**: native props
  - type: `HTMLAttributes`
