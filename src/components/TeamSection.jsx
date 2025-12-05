
import SectionTitle from './ui/SectionTitle';

const TeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Michael Dean",
            role: "Chef Master",
            image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Arnold Taylor",
            role: "Room Cleane",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Michael Dean",
            role: "Assistant Chef",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "Michael Dean",
            role: "Supervisor",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-20 bg-[#fefefe]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-teal-600 font-medium tracking-wider text-sm uppercase mb-3">
                        <SectionTitle tag="FIXYLAND STAFF" title="Expert Staff Persons" align="center" />
                    </p>
                    {/* <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Expert Staff Persons
                    </h2> */}
                </div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Plus Button */}
                                <button className="absolute bottom-4 right-4 w-12 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300 shadow-lg">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <div className="flex items-center">
                                    <div className="w-8 h-0.5 bg-teal-600 mr-3"></div>
                                    <p className="text-gray-500 text-sm">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;