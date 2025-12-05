import { Plus } from "lucide-react";
const PRIMARY_GREEN = "bg-[#2da77a]";
const TeamCard = ({ image, name, role }) => (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-80 overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute bottom-4 right-4">
                <button className={`${PRIMARY_GREEN} text-white p-2 rounded-md shadow-lg hover:bg-emerald-700 transition-colors`}>
                    <Plus size={20} />
                </button>
            </div>
        </div>
        <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-gray-500 text-sm flex justify-center items-center gap-2">
                <span className="w-4 h-0.5 bg-emerald-500 inline-block"></span>
                {role}
            </p>
        </div>
    </div>
);
export default TeamCard;    