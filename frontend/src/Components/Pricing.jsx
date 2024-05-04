import { useState } from "react"


const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {name:"Start", monthlyPrice:350, yearlyPrice:4500, description:"The best and startup plan for all of you and anyone can easy to get in touch with us.",green:'../../public/green.png',red:"../../public/red.png"},
        {name:"Advance", monthlyPrice:550, yearlyPrice:6000, description:"The best and trending plan for all of you and anyone can most fastly track and touch with us.", green:'../../public/green.png',red:"../../public/red.png"},
        {name:"Premium", monthlyPrice:750, yearlyPrice:8500, description:"The wonderful and super plan for all of you and anyone VIP and fast in touch with us.", green:'../../public/green.png',red:"../../public/red.png"}
    ]


  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10">
        <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
            Here are all our plans
        </h2>

        <p className="text-tartiary md:w-1/3 mx-auto px-4">
            You can choose any plan for you in free way as your needs and feasible guidings as well. So hurry up and get with us.
        </p>

        {/* toggle pricing */}

        <div className="mt-16">
            <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                <span className="mr-8 text-2xl font-semibold">Monthly</span>
                <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                    <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                </div>
                <span className="ml-8 text-2xl font-semibold">Yearly</span>
            </label>

            <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={()=>
                setIsYearly(!isYearly)
            } />

        </div>

        </div>

        {/* pricing cards */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
            {
                packages.map((pkg,index)=>
                <div key={index} className="border py-10 md:px-6 px-4 rounded-lg">
                    <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                    <p className="text-tartiary text-center my-5">{pkg.description}</p>
                    <p className="text-4xl mt-5 text-center text-secondary font-bold">
                        {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}<span className="text-base text-tartiary"> /{isYearly ? 'year':'month'}</span>
                    </p>
                    <ul className="mt-5 space-y-2 px-4">
                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="green dot" className="w-5 h-5"/>Videos of Lessons</li>

                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="green dot" className="w-5 h-5"/>Homework Check</li>

                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="green dot" className="w-5 h-5"/>Additional Practical Task</li>

                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="green dot" className="w-5 h-5"/>Monthly Conferences</li>

                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="green dot" className="w-5 h-5"/>Personal Advice Altime</li>
                    </ul>

                    <div className="w-full mx-auto mt-8 flex items-center justify-center">
                        <button className="btnPrimary">Get Started</button>
                    </div>
                </div>
                )
            }
        </div>
      
    </div>
  )
}

export default Pricing
