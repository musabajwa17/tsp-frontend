const PRIMARY_GREEN = "bg-[#2da77a]";
const ProgressBar = ({ label, percentage }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
            <span className="font-semibold text-gray-700 text-sm">{label}</span>
            <span className="font-semibold text-[#2da77a] text-sm">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
                className={`${PRIMARY_GREEN} h-1.5 rounded-full transition-all duration-1000`}
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);
export default ProgressBar; 