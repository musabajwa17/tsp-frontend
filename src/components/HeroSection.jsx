const IMAGES = {
    hero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
};

const HeroSection = () => (
    <div className="relative w-full h-[400px] lg:h-[500px] bg-black overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* TRUE FIT IMAGE (no crop, no black gaps) */}
        <img
            src={IMAGES.hero}
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
        left-[20%] 
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
                <span className="text-[#2da77a]">{'>'}</span>
                <span>About Us</span>
            </div>
        </div>

    </div>
);

export default HeroSection;
