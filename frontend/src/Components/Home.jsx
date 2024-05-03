import logo3 from '../../public/logo3.png';

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-h-screen-2xl mx-auto mt-20">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">

                    {/* banner image */}

                    <div>
                        <img src={logo3} alt="logo3" className="lg:h-[420px]" />
                    </div>
                
                   {/* //banner content of home page */}
                    <div className="md:w-3/5">
                        <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">Develop your skills without diligence</h2>
                        <p className="text-[#ebebeb] text-xl mb-8">A good example of a paragraph cotains a topic sentence, details and a conclusion. There are many different kinds of animals that live in Sri Lanka.</p>


                        <div className="space-x-5 space-y-4">
                            <button className="btnPrimary">Get Started</button>
                            <button className='btnPrimary'>Discount</button>
                        </div>

                    </div>
                    

                    
                
            </div>
        </div>
      
    </div>
  )
}

export default Home
