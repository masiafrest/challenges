import { CSSProperties } from 'react'
import './index.scss'

interface Props {
  dir: 'right' | 'left' | 'up' | 'down'
  color?: CSSProperties['color']
}

export default function DropdownArrow({dir='down', color}: Props) {
  return (
    <span className={`arrow ${dir}`} style={{
      [ '--color' as any ]: color
    }}></span>
  )
}
