import { blogData } from '../../utils/BlogData';

const Blog = () => {

    const mainData = blogData[0]
    const mainData2 = blogData.slice(1, 4)
    const backgroundColors = [
        // 'bg-[#C0B1FF]',  // Light purple
        'bg-[#FFD1C1]',  // Light coral
        'bg-[#C1FFD1]',  // Light green
        // 'bg-[#D1C1FF]',  // Light lavender
        'bg-[#FFC1D1]'   // Light pink
    ];
    return (
        <div
            // style={{ background: 'url("/public/Round BG.png") no-repeat center center / cover' }} 

            className="section-container pb-8  md:py-8">
            <div>
                <p className="bg-[#A0E2FB] inline-block px-4 py-1 rounded-full">
                    <span className="size bg-orange-400 size-3 inline-block  rotate-45"></span> <span className="text-sm font-semibold">Block</span>
                </p>
                <p className="text-xl md:text-3xl font-bold mt-1">Latest From SM It Solution</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
                <div>
                    <div className='shadow-md rounded-xl'>
                        <img src={mainData.img} alt="" className='max-h-[200px] rounded-t-xl w-full' />
                        <div className='mt-3 space-y-3 px-4 pb-4'>
                            <div>
                                <p className='inline-block bg-[#C0B1FF] text-[#3f3285] text-sm font-semibold px-4 rounded-full py-1'>{mainData.department}</p>
                                <span className='text-xs ms-4'>{mainData.date}</span>
                            </div>
                            <div className='space-y-3'>
                                <h1 className='text-xl md:text-3xl font-bold'>{mainData.title}</h1>
                                <p className='text-sm text-slate-400 '>{mainData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-y-4'>
                    {
                        mainData2.map((item, index) => (
                            <div key={index} className='shadow-md rounded-xl flex justify-between p-2 md:p-4'>
                                <div>
                                    <div>
                                        <p className={`inline-block ${backgroundColors[index % backgroundColors.length]} text-[#3f3285] text-sm font-semibold px-4 rounded-full py-1`}>{item.department}</p>
                                        <span className='text-xs ms-4 text-slate-500'>{item.date}</span>
                                    </div>
                                    <h1 className='text-base md:text-lg font-bold mt-2'>{item.title}</h1>
                                </div>
                                <img src={item.img} alt="" className='size-[100px] rounded-xl' />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Blog;