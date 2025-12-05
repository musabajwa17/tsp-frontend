const FormTextarea = ({ label, id, placeholder, value, onChange, className = '', disabled = false }) => (
    <div className={`flex flex-col space-y-2 ${className}`}>
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
        </label>
        <textarea
            id={id}
            placeholder={placeholder}
            rows="5"
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`w-full p-4 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 placeholder-gray-500 transition duration-150 ease-in-out resize-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
        />
    </div>
);

export default FormTextarea;
