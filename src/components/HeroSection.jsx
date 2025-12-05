const HeroSection = () => (
    <div className="relative w-full h-[450px] bg-black overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* TRUE FIT IMAGE (no crop, no black gaps) */}
        <img
            src="../public/heroImg.jpg"
            alt="Hotel Interior"
            className="
        absolute inset-0
        w-full
        h-full
        object-fit
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
                About Us
            </h1>

            <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-gray-300">Home</span>
                <span >{'>'}</span>
                <span>About Us</span>
            </div>
        </div>

    </div>
);

export default HeroSection;
