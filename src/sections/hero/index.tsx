import Button from "../../components/Button"
import Minicard from "../../components/Minicard"

const Hero = () => {
  return (
    <>
    <section className='grid grid-cols-2 w-full'>
        <div className='bg-white pt-[210px] pl-[74.5px]'>
          <Minicard />
            <h1 className="font-playfair mt-9 mb-7 text-8xl">FASHION</h1>
            <p className="text-base font-montserrat text-[#7C7C7C] w-[460px] mb-7">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Button text={"Shop Now"} paddingX={'px-16'} bgColor={'bg-[#36254B]'} textColor={'text-white'} />
        </div>
        <div className='bg-[#A15DB3] pt-[210px] pr-[74.5px]'>
          <h1 className="text-white font-playfair mt-[160px] mb-7 text-8xl">COLLECTION</h1>
          <div className="flex justify-end mt-[117px] mb-60">
            <Minicard />
          </div>
        </div>
    </section>
    </>
  )
}
export default Hero