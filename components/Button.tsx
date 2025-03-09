'use client'
import { ButtonProps } from '@/types'
import Image from 'next/image'

const Button = ({
  text,
  containerStyles,
  handleClick,
  btnType,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{text}</span>
    </button>
  )
}

export default Button
