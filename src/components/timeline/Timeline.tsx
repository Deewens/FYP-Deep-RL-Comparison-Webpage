import { ReactNode } from 'react'
import './Timeline.css'

type Props = {
  color?: 'primary' | 'secondary'
  children: ReactNode
}

function Timeline(props: Props) {
  return (
    <div
      className={`
        timeline 
        ${props.color === 'secondary' ? 'timeline--color-secondary' : 'timeline--color-primary'}
      `}
    >
      {props.children}
    </div>
  )
}

export default Timeline