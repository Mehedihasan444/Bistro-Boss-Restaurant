
const Cover = ({heading,subHeading,banner}) => {
    return (
        <div className="sm:h-[70vh] flex justify-center items-center text-white text-center bg-cover  object-cover" style={{backgroundImage: `url(${banner})`,backgroundPosition:"center"}}>
            <div className=" w-2/3 lg:w-1/2 sm:mx-auto bg-[#15151596] sm:py-24 py-10 m-5">
                <h1 className="sm:text-6xl text-3xl font-bold  uppercase mb-5">{heading}</h1>
                <p className="font-semibold uppercase text-xs sm:text-sm w-3/4 mx-auto">{subHeading}</p>
            </div>
        </div>
    );
};

export default Cover;