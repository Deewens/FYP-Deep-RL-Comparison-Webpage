import { ReactNode } from 'react'
import './Timeline.css'

type Props = {
  period: string
  title: string
  subtitle: string
  direction?: 'left' | 'right'
  color?: 'primary' | 'secondary'
  className?: string
  children: ReactNode
}

function TimelineItem(props: Props) {
  return (
    <div
      className={`
        timeline-item
        ${props.className}
        ${props.direction === 'left' ? 'timeline-item--direction-left' : 'timeline-item--direction-right'}
        ${props.color === 'secondary' ? 'timeline-item--border-color-secondary' : 'timeline-item--border-color-primary'}
      `}
    >
      <div
        className={`
          timeline-item__content  
        `}
      >
        <div
          className={`timeline-item__period ${props.color === 'secondary' ? 'timeline-item__period--color-secondary' : 'timeline-item__period--color-primary'}`}
        >
          {props.period}
        </div>
        <h3 className="timeline-item__title">{props.title}</h3>
        <h4 className="timeline-item__subtitle">{props.subtitle}</h4>

        <div className="timeline-item__description">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default TimelineItem