import Banner from "../shared/Banner"
import BannerImg from '../../public/logo_1.png';
const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        {/* use our banner components and pass props */}

        <Banner banner={BannerImg} heading="Each and every Student can get Discount." subheading={"A simple and easy methods for payment for our programms and process also may be help you to develop your carrer palns..!"} btn1={"I have Code"} btn2={"Get a Code"}/>
      
    </div>
  )
}

export default Newsletter
