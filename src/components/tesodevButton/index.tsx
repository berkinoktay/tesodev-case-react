import React, { FC } from 'react'
import styles from './styles.module.scss'

interface TesodevButtonProps {
  title: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}
const TesodevButton: FC<React.PropsWithChildren<TesodevButtonProps>> = ({ title, onClick, className, type }) => {
  return (
    <button type={!!type ? type : 'button'} className={`${styles.button} ${className}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default TesodevButton