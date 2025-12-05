import { ChevronDown } from 'lucide-react';

const FormSelect = ({ label, id, options, value, onChange, className = '', disabled = false }) => (
    <div className={`flex flex-col space-y-2 ${className}`}>
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="relative">
            <select
                id={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`w-full h-12 appearance-none px-4 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-500 transition duration-150 ease-in-out ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
            >
                <option value="" disabled>Select {label.split(' ')[1]}</option>
                {options.map((option) => (
                    <option key={option} value={option} className="text-gray-800">{option}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>
    </div>
);

export default FormSelect;
