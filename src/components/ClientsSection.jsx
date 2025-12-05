import ClientLogo from "./ui/ClientLogo";
const ClientsSection = () => (
    <section className="py-20 bg-[#edf2f0]">
        <div className="container mx-auto px-4 text-center">
            <span className="bg-white text-[#2da77a] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm mb-4 inline-block shadow-sm">
                Our Clients
            </span>
            <h2 className="text-3xl font-bold mb-12 text-gray-800">We Have More Then 150+ <br /> Global Clients</h2>

            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center grayscale opacity-60">
                {[1, 2, 3, 4, 5].map(i => (
                    <ClientLogo key={i} />
                ))}
            </div>
        </div>
    </section>
);

export default ClientsSection;
