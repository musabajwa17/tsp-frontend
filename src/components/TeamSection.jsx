// import SectionTitle from "./ui/SectionTitle";
// import TeamCard from "./ui/TeamCard";

// const IMAGES = {
//     team1: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop", // Chef
//     team2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", // Suit guy
//     team3: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", // Staff woman
//     team4: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", // Suit guy 2
// };
// const TeamSection = () => (
//     <section className="py-24 bg-[#f9f9f9]">
//         <div className="container mx-auto px-4 text-center">
//             <SectionTitle tag="Fixyland Staff" title="Expert Staff Persons" align="center" />

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//                 <TeamCard image={IMAGES.team1} name="Michael Dean" role="Chef Master" />
//                 <TeamCard image={IMAGES.team2} name="Arnold Taylor" role="Room Cleane" />
//                 <TeamCard image={IMAGES.team3} name="Michael Dean" role="Assistant Chef" />
//                 <TeamCard image={IMAGES.team4} name="Michael Dean" role="Supervisor" />
//             </div>
//         </div>
//     </section>
// );

// export default TeamSection;


import SectionTitle from "./ui/SectionTitle";
import TeamCard from "./ui/TeamCard";

// NOTE: These image URLs are selected to better match the *content* of the Staff.png file
// 1. Man in apron holding food (Chef Master)
// 2. Young man in bow tie/white shirt (Room Cleaner) - image is grayscale in the example
// 3. Woman in glasses/apron behind counter (Assistant Chef)
// 4. Young man in light suit (Supervisor)
const IMAGES = {
    team1: "https://images.unsplash.com/photo-1579753051280-60b5e7d4469e?q=80&w=400&auto=format&fit=crop",
    team2: "https://images.unsplash.com/photo-1603513251433-28929e74c86b?q=80&w=400&auto=format&fit=crop",
    team3: "https://images.unsplash.com/photo-1517248135465-4d2a912b7027?q=80&w=400&auto=format&fit=crop",
    team4: "https://images.unsplash.com/photo-1610486676118-2830f6b4d455?q=80&w=400&auto=format&fit=crop",
};
const TeamSection = () => (
    <section className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 text-center">
            {/* The SectionTitle component likely renders the "FIXYLAND STAFF" tag and "Expert Staff Persons" title */}
            <SectionTitle tag="FIXYLAND STAFF" title="Expert Staff Persons" align="center" />

            {/* The grid layout ensures responsiveness: 2 columns on medium screens, 4 on large screens */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {/* Card 1: Chef Master */}
                <TeamCard image={IMAGES.team1} name="Michael Dean" role="Chef Master" />

                {/* Card 2: Room Cleane - Note the original image has a grayscale effect */}
                <TeamCard image={IMAGES.team2} name="Arnold Taylor" role="Room Cleane" />

                {/* Card 3: Assistant Chef */}
                <TeamCard image={IMAGES.team3} name="Michael Dean" role="Assistant Chef" />

                {/* Card 4: Supervisor */}
                <TeamCard image={IMAGES.team4} name="Michael Dean" role="Supervisor" />
            </div>
        </div>
    </section>
);

export default TeamSection;
