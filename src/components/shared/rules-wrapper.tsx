import { ReactNode } from 'react'
import Title, { TitleLevel } from './title'

interface RulesWrapperProps {
    title: string
    subtitle?: string
    children: ReactNode
}

const RulesWrapper = ({ title, subtitle, children }: RulesWrapperProps) => (
  <div className='flex flex-col sm:ml-4 sm:mr-12 w-full sm:w-11/12 px-4 mt-4'>
    <Title level={TitleLevel.H1} className='text-center'>
      {title}
    </Title>
    {subtitle && <p className='text-center text-xl mt-2 mb-6'>{subtitle}</p>}
    <div className='flex flex-col space-y-5'>{children}</div>
  </div>
);

export default RulesWrapper
