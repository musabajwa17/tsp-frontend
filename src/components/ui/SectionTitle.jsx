const SectionTitle = ({ tag, title, align = "left", light = false }) => (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'}`}>
        <span className={`uppercase tracking-wider text-xs font-bold py-1 px-2 mb-2 inline-block rounded-lg bg-white text-[#2da77a]`}>
            {tag}
        </span>
        <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight ${light ? 'text-white' : 'text-gray-900'}`}>
            {title}
        </h2>
    </div>
);

export default SectionTitle;
