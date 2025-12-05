const PRIMARY_GREEN = "bg-[#2da77a]";
const StatsSection = () => (
    <section className={`${PRIMARY_GREEN} py-24`}>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                {[
                    { num: "305 +", label: "Luxury Rooms" },
                    { num: "650 +", label: "Regular Guests" },
                    { num: "80 +", label: "Team Member" },
                    { num: "75 +", label: "Beaches" }
                ].map((stat, i) => (
                    <div key={i} className="border-r last:border-0 border-white/20">
                        <div className="text-4xl md:text-5xl font-bold font-outline-2 mb-2" style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.1)' }}>{stat.num}</div>
                        <div className="text-sm uppercase tracking-wider font-light">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default StatsSection;    