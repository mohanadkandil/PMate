

type IProps = {
    image?: string;
    text: string;
    type: 'title' | 'content';
}
export const Slide = (props: IProps) => {
    const {text, image, type} = props
 return (
        <>
            <div className="h-full w-full">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-3xl text-white">Here is the presentation</span>
                    <div className="pt-10">
                        <div className="w-[1280px] h-[720px] bg-green-600 relative flex overflow-hidden">
                            <div className="flex p-20 absolute w-full h-full overflow-hidden items-center">
                                <div className="text-[80px] text-white font-semibold outline-none w-full text-center" contentEditable={true}>
                                    {text} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}