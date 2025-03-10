'use client'
import { ButtonProps } from '@/types'
import Image from 'next/image'

const Button = ({
  text,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{text}</span>
      {rightIcon && (
        <div className='relative w-6 h-6 '>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  )
}

export default Button
