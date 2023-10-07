import React from "react";

interface SidebarProps {
    setFilteredType: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setFilteredType }) => {
    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilteredType(event.target.value);
    };

    return (
        <div className="bg-gray-200 p-4 min-h-screen max-h-full h-full">
            <div className="fixed text-black">
                <h2 className="text-lg font-bold mb-4">Filter</h2>
                <select
                    className="p-2 border border-gray-300 rounded"
                    onChange={handleFilterChange}
                    aria-label="Filter"
                >
                    <option value="">All Types</option>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                </select>
            </div>
        </div>
    );
};

export default Sidebar;
