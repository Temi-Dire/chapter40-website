import AddCircleIcon from '@mui/icons-material/AddCircle';
import Star from './Star';

const Minicard = () => {
  return (
    <div className='grid grid-cols-[auto,1fr] bg-[#F7F0F6] max-w-max h-[137px] p-4 gap-x-4 relative'>
        <img className='' src="/assets/images/dress2small.png" alt="" />
        <div className='text-base w-44'>
            <p className='font-playfair'>Red ankara gown sumami crimison black</p>
            <p className='font-montserrat'>₦ 30,000</p>
            <Star filled/>
        </div>
        <AddCircleIcon className='absolute bottom-2 right-2' style={{fontSize: 30}}/>
    </div>
  )
}

export default Minicard