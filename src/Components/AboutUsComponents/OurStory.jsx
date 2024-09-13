import img1 from '../../assets/our story/business-people-standing-row-with-thumbs-up.jpg';
import img2 from '../../assets/our story/2149008873.jpg';
import img3 from '../../assets/our story/1968.jpg';

const OurStory = () => {
    const smItSolutionOurStory = [
        "At SM IT Solutions, we make technology work for you. Our goal is simple: to provide smart, reliable, and innovative IT solutions that help your business succeed. Whether you need a stunning website, a powerful e-commerce platform, or customized digital tools, we’ve got you covered.",
        "We don’t just offer services—we offer solutions. Our team listens, understands your needs, and delivers tailored results that exceed expectations. From digital marketing and web development to application support and more, we make sure your business stays ahead in the digital world.",
        "Let’s grow together. We’re here to simplify your digital journey and unlock new opportunities for your business. Partner with us and experience how easy and impactful digital transformation can be."
    ];

    return (
        <div className=" section-container  dark:bg-gray-800 py-12 px-6 md:px-12 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
                <div>
                <div className="relative   mb-4  text-primary font-bold ">
                  <h1 className="text-3xl  font-bold mt-7 ">
                    ABOUT{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-amber-500 ">
                      US_
                    </span>
                  </h1>
                  <span className="inline-block bg-orange-400 size-10 rounded-full bg-opacity-60 absolute top-[-12px] left-[-26px] animate-pulse "></span>
                </div>
                    <div className="space-y-6">
                        {smItSolutionOurStory.map((item, index) => (
                            <p
                                key={index}
                                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed ">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex relative justify-center items-center space-x-4">
                    <img src={img2} alt="" className="w-44 h-32 -mb-64 -mr-24 hover:z-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
                    {/* Optionally add an image or a decorative element here */}
                    <img src={img1} alt="" className="w-80 z-10  object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
                    <img src={img3} alt="" className="w-44 h-32 absolute -mb-64 right-0 hover:z-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
                </div>

            </div>
        </div>
    );
};

export default OurStory;
