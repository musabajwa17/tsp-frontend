const PRIMARY_GREEN = "bg-[#2da77a]";
const StatsSection = () => (
    <section className="bg-[#1f8f6a] py-15">
        <div className="container mx-auto px-5">
            <div className="flex flex-wrap justify-center items-center divide-x divide-white/30 text-center text-white">
                {[
                    { num: "305 +", label: "Luxury Rooms" },
                    { num: "650 +", label: "Regular Guests" },
                    { num: "80 +", label: "Team Member" },
                    { num: "75 +", label: "Beaches" }
                ].map((stat, i) => (
                    <div key={i} className="flex-1 min-w-[140px] px-6 py-4">
                        <div
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                            style={{
                                WebkitTextStroke: '2px white',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent',
                                fontWeight: '700',
                                letterSpacing: '1px'
                            }}
                        >
                            {stat.num}
                        </div>
                        <div className="text-sm sm:text-base lg:text-lg font-normal tracking-wide whitespace-nowrap">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default StatsSection; 