import about1 from '../../public/about1.png';
import about2 from '../../public/about2.png';

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id='about'>
        <div className="flex md:flex-row flex-col justify-between items-center gap-8">
            <div className="md:w-1/2">
                <img src={about1} alt="about Image 1" />
            </div>

            {/* about content */}

            <div className="md:w-2/5">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We have been improving our products <span className="text-secondary">for many years.</span></h2>
                <p className="text-tartiary mb-7 text-lg">
                    We are the best and trusted planning partner in Sri lanka. We hope to cover all the areas in sri lanka as wish as near few years also. So, we always give a best support for all of you develop and plan your carrier path aso and your wishes too...

                </p>
                <button className="btnPrimary">Get Started</button>
            </div>
        </div>



        {/* second part of about */}
        <div className="flex md:flex-row-reverse flex-col justify-between items-center gap-8">
            <div className="md:w-1/2">
                <img src={about2} alt="about Image 1" />
            </div>

            {/* about content */}

            <div className="md:w-2/5">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We give our advices and skill for anyone <span className="text-secondary">for many years.</span></h2>
                <p className="text-tartiary mb-7 text-lg">
                    We are the best and trusted planning partner in Sri lanka. We hope to cover all the areas in sri lanka as wish as near most years also. So, again we always give a best support for all of you develop and plan your carrier path aso and your wishes too...

                </p>
                <button className="btnPrimary">Get Started</button>
            </div>
        </div>
      
      
    </div>
  )
}

export default About
