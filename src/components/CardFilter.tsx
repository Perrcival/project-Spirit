import React from 'react';

interface CardFilterProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    filterColor: string;
    setFilterColor: (color: string) => void;
    filterType?: string;
    setFilterType?: (type: string) => void;
    sortBy?: string;
    setSortBy?: (sort: 'id' | 'cost') => void;
    layout?: 'gallery' | 'deckbuilder';
}

export const CardFilter: React.FC<CardFilterProps> = ({
    searchTerm, setSearchTerm,
    filterColor, setFilterColor,
    filterType, setFilterType,
    sortBy, setSortBy,
    layout = 'gallery'
}) => {
    if (layout === 'deckbuilder') {
        return (
            <div className="flex gap-2 flex-1 w-full md:max-w-md">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Name, ID, or Family..."
                    className="flex-1 p-2 bg-slate-800 w-[500px] border border-slate-600 rounded text-sm text-white focus:border-cyan-400 outline-none transition-colors"
                />
                <select value={filterColor} onChange={e => setFilterColor(e.target.value)} className="p-2 bg-slate-800 w-[100px] border border-slate-600 rounded text-sm text-white outline-none cursor-pointer">
                    <option value="All">All Colors</option>
                    <option value="Red">Red</option>
                    <option value="Purple">Purple</option>
                    <option value="Green">Green</option>
                    <option value="White">White</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Blue">Blue</option>
                </select>
                {filterType !== undefined && setFilterType && (
                    <select value={filterType} onChange={e => setFilterType(e.target.value)} className="p-2 bg-slate-800 border border-slate-600 rounded text-sm text-white outline-none cursor-pointer">
                        <option value="All">All Types</option>
                        <option value="Spirit">Spirit</option>
                        <option value="Nexus">Nexus</option>
                        <option value="Magic">Magic</option>
                    </select>
                )}
                {sortBy !== undefined && setSortBy && (
                    <select value={sortBy} onChange={e => setSortBy(e.target.value as 'id' | 'cost')} className="p-2 bg-slate-800 border border-slate-600 rounded text-sm text-white outline-none cursor-pointer">
                        <option value="id">ID</option>
                        <option value="cost">Cost</option>
                    </select>
                )}
            </div>
        );
    }

    return (
        <div className="bg-slate-800 p-4 rounded-xl mb-8 shadow-md border border-slate-700 flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-semibold text-slate-400 mb-1">Search</label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Name, ID, or Family..."
                    className="w-full p-2 bg-slate-900 border border-slate-600 rounded-lg text-sm text-white focus:border-cyan-400 outline-none transition-colors"
                />
            </div>
            <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Color</label>
                <select value={filterColor} onChange={e => setFilterColor(e.target.value)} className="p-2 bg-slate-900 border border-slate-600 rounded-lg text-sm text-white outline-none cursor-pointer">
                    <option value="All">All Colors</option>
                    <option value="Red">Red</option>
                    <option value="Purple">Purple</option>
                    <option value="Green">Green</option>
                    <option value="White">White</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Blue">Blue</option>
                </select>
            </div>
            {filterType !== undefined && setFilterType && (
                <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Card Type</label>
                    <select value={filterType} onChange={e => setFilterType(e.target.value)} className="p-2 bg-slate-900 border border-slate-600 rounded-lg text-sm text-white outline-none cursor-pointer">
                        <option value="All">All Types</option>
                        <option value="Spirit">Spirit</option>
                        <option value="Nexus">Nexus</option>
                        <option value="Magic">Magic</option>
                    </select>
                </div>
            )}
            {sortBy !== undefined && setSortBy && (
                <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Sort By</label>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value as 'id' | 'cost')} className="p-2 bg-slate-900 border border-slate-600 rounded-lg text-sm text-white outline-none cursor-pointer">
                        <option value="id">Card ID</option>
                        <option value="cost">Cost (Low to High)</option>
                    </select>
                </div>
            )}
        </div>
    );
};
