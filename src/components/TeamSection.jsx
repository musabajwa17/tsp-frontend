import SectionTitle from "./ui/SectionTitle";
import TeamCard from "./ui/TeamCard";

const IMAGES = {
    team1: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop", // Chef
    team2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", // Suit guy
    team3: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", // Staff woman
    team4: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", // Suit guy 2
};
const TeamSection = () => (
    <section className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 text-center">
            <SectionTitle tag="Fixyland Staff" title="Expert Staff Persons" align="center" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                <TeamCard image={IMAGES.team1} name="Michael Dean" role="Chef Master" />
                <TeamCard image={IMAGES.team2} name="Arnold Taylor" role="Room Cleane" />
                <TeamCard image={IMAGES.team3} name="Michael Dean" role="Assistant Chef" />
                <TeamCard image={IMAGES.team4} name="Michael Dean" role="Supervisor" />
            </div>
        </div>
    </section>
);

export default TeamSection;
