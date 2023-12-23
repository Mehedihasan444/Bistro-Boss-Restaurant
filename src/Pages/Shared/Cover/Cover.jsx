

const Cover = ({heading,subHeading,banner}) => {
    return (
        <div className="h-[70vh] flex justify-center items-center text-white text-center bg-cover" style={{backgroundImage: `url(${banner})`}}>
            <div className=" w-1/2 mx-auto bg-[#15151596] py-24">
                <h1 className="text-6xl font-bold  uppercase mb-5">{heading}</h1>
                <p className="font-semibold uppercase text-sm w-3/4 mx-auto">{subHeading}</p>
            </div>
        </div>
    );
};

export default Cover;