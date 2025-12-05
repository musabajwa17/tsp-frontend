const HeroSection = ({ title, subtitle1, subtitle2 }) => (
    <div className="relative w-full h-[450px] bg-black overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* TRUE FIT IMAGE (no crop, no black gaps) */}
        <img
            src="/heroImg.jpg"
            alt="Hotel Interior"
            className="
    absolute inset-0
    w-full
    h-full
    object-cover
  "
        />


        {/* TEXT BLOCK (left-centered) */}
        <div
            className="
        absolute 
        top-1/2 
        left-[23%] 
        -translate-y-1/2 
        -translate-x-1/2
        text-white 
        z-20 
        max-w-[450px]
        px-4
      "
        >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                {title}
            </h1>

            <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-gray-300">{subtitle1}</span>
                <span >{'>'}</span>
                <span>{subtitle2}</span>
            </div>
        </div>

    </div>
);

export default HeroSection;
