const Slides = () => {
    return (
        <>
            <div className="h-full w-full bg-[#303a52]">
                <div className="flex flex-col items-center justify-center pt-20">
                    <span className="text-3xl text-white">Here is the presentation</span>
                    <div className="pt-10">
                        <div className="w-[1280px] h-[720px] bg-green-600 relative flex overflow-hidden">
                            <div className="flex p-20 absolute w-full h-full overflow-hidden items-center">
                                <div className="text-[80px] text-white font-semibold outline-none w-full text-center" contentEditable={true}>
                                    Intro to computer science   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Slides   