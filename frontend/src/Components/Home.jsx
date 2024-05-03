import banner from '../../public/logo3.png';
import Banner from '../shared/Banner';

const Home = () => {
  return (
    
    <div className="md:px-12 p-4 max-h-screen-2xl mx-auto mt-24">
        <Banner banner={banner} heading="Develop Your Skills Without Diligence" subheading="A good and best oppertunity for all of you plan and develop your skills in Sri Lanka. So hurry up and join with us and paln your future as soon as real-life." btn1={"Get Started"} btn2={"Discount"}/>
        
    </div>
    
  );
};

export default Home;
