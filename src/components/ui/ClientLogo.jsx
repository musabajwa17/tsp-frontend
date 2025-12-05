const ClientLogo = () => (
    <div className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
        {/* SVG Placeholder for Client Logos since we don't have exact assets */}
        <svg viewBox="0 0 100 50" className="h-12 w-auto fill-current text-gray-600">
            <path d="M10,25 Q20,5 30,25 T50,25 T70,25 T90,25" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="20" cy="15" r="3" />
            <circle cx="50" cy="35" r="5" />
            <rect x="75" y="10" width="10" height="10" />
        </svg>
    </div>
);
export default ClientLogo;  