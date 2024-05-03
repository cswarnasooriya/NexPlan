import logo4 from '../../public/logo4.png';
import logo5 from '../../public/logo5.png';
import logo6 from '../../public/logo6.png';

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
       <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

        <div className="lg:w-1/4">
            <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
                Why we are better than others
            </h3>
            <p className="text-base text-tartiary">
                We are the best and trending planning supporter in Sri lanka. So, you can join with us now!
            </p>
        </div>

        {/* feature card */}

        <div className="w-full lg:w-3/4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">


                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                    <img src={logo4} alt="logo4" className="h-[100px] " />
                    <h5 className="text-xl font-semibold text-primary px-1 text-center mt-5">Conventient Study Shedule</h5>
                </div>

            
                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                    <img src={logo5} alt="logo4" className="h-[100px] " />
                    <h5 className="text-xl font-semibold text-primary px-1 text-center mt-5">Friendly Work Experiences</h5>
                </div>

                     
                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                    <img src={logo6} alt="logo4" className="h-[100px] " />
                    <h5 className="text-xl font-semibold text-primary px-1 text-center mt-5">Good Leadership Qualities</h5>
                </div>   

            </div>
        </div>
       </div>
      
    </div>
  );
};

export default Features;
