
import SectionTitle from './ui/SectionTitle';
import { useFetchStaff } from '../hooks/useFetchStaff';

const TeamSection = () => {
    const { data: staff, loading, error } = useFetchStaff();
    console.log(staff);

    if (loading) {
        return (
            <section className="py-20 bg-[#fefefe]">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
                    <p className="mt-4 text-gray-600">Loading staff...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-20 bg-[#fefefe]">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-red-600">Error: {error}</p>
                </div>
            </section>
        );
    }
    return (
        <section className="py-20 bg-[#fefefe]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <SectionTitle tag="FIXYLAND STAFF" title="Expert Staff Persons" align="center" />
                </div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                    {staff.map((member) => (
                        <div
                            key={member._id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={member.photo}
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
                                    <p className="text-gray-500 text-sm">{member.title}</p>
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