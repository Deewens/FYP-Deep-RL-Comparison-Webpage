import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ReactNode } from 'react'

type Props = {
  title: string
  icon?: IconProp
  className?: string
  children: ReactNode
}

function Card(props: Props) {
  return (
    <div className={`card ${props.className}`}>
      {props.icon ?
        <div className="card__icon">
          <FontAwesomeIcon size="2x" icon={props.icon} />
        </div> :
        null
      }

      <div className="card__title">
        {props.title}
      </div>

      <div className="card__description">
        {props.children}
      </div>
    </div>
  )
}

export default Card