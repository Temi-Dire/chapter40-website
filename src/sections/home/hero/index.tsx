import Button from "../../../components/Button"
import Minicard from "../../../components/Minicard"

const Hero = () => {
  return (
    <>
    <section className='grid grid-cols-2 w-full h-[100vh]'>
        <div className='bg-white pt-[130px] pl-[74.5px]'>
          <Minicard />
            <h1 className="font-playfair mt-8 mb-7 text-8xl">FASHION</h1>
            <p className="text-base font-montserrat text-[#7C7C7C] w-[460px] mb-7">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Button text={'Shop Now'}/>
        </div>
        <div className='bg-[#A15DB3] pt-[130px] pr-[74.5px]'>
          <h1 className="text-white font-playfair mt-[160px] mb-7 text-8xl">OLLECTION</h1>
          <div className="flex justify-end">
            <Minicard />
          </div>
        </div>
    </section>
    </>
  )
}
export default Hero