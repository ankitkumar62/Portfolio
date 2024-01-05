import image from '../pp/hacker.png'
export default function Avatar() {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <img src={image}width={837} height={778} alt='Loading...' className='translate-z-0 w-full h-full' />
    </div>
  )
}
