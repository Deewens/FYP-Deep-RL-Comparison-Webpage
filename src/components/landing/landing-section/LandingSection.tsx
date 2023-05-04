import './LandingSection.css'
import {forwardRef, ReactNode} from 'react'

type Props = {
    id?: string
    color: 'primary' | 'secondary',
    className?: string
    children: ReactNode
}

const LandingSection = forwardRef<HTMLElement, Props>(function (props: Props, ref) {
    return (
        <section
            id={props.id}
            ref={ref}
            className={
                `landing-section 
                ${props.color === 'primary' ? 'landing-section--color-primary loading-section--text-color-white' : 'landing-section--color-secondary loading-section--text-color-primary'} 
                ${props.className}`
            }>
            {props.children}
        </section>
    )
})

export default LandingSection