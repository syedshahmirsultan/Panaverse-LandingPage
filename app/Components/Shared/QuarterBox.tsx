import {FC} from 'react'
interface IProps{
    header:string,
    description:string,
    number:number,
    haveBorder?:boolean
}
const QuarterBox:FC<IProps> = ({ header , description ,number,haveBorder = true}) => {
  return (
    <div className={`rounded-md flex-1 relative flex flex-col justify-center px-8 py-16 ${haveBorder &&"border"}`}>
              <h4 className='font-bold text-lg'>{header}</h4>
              <p className="mt-2 text-slate-600 ">{description}</p>
              <span className="absolute right-10 text-gray-200 -z-10 text-[150px] font-bold">{number}</span>
              </div>
  )
}

export default QuarterBox