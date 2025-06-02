'use client';

import { useState } from 'react';
import ResultsTable from '../components/ResultsTable.component';

export default function ResultsViewer({ initialYear = 2024, initialCategory = 'Regular', data2023, data2024 }) {
    const [activeYear, setActiveYear] = useState(initialYear);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const currentData = activeYear === 2023 
        ? (activeCategory === 'Regular' ? data2023.regular : data2023.advanced)
        : (activeCategory === 'Regular' ? data2024.regular : data2024.advanced);

    const totalPages = Math.ceil(currentData.length / rowsPerPage);
    const paginatedData = currentData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Year Selector */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                        onClick={() => {
                            setActiveYear(2023);
                            setCurrentPage(1);
                        }}
                        className={`px-6 py-3 text-sm font-medium ${
                            activeYear === 2023
                                ? 'bg-[#4380eb] text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                    >
                        2023 Results
                    </button>
                    <button
                        onClick={() => {
                            setActiveYear(2024);
                            setCurrentPage(1);
                        }}
                        className={`px-6 py-3 text-sm font-medium ${
                            activeYear === 2024
                                ? 'bg-[#4380eb] text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                    >
                        2024 Results
                    </button>
                </div>
            </div>

            {/* Category Selector */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                        onClick={() => {
                            setActiveCategory('Regular');
                            setCurrentPage(1);
                        }}
                        className={`px-6 py-3 text-sm font-medium ${
                            activeCategory === 'Regular'
                                ? 'bg-[#4380eb] text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                    >
                        Regular
                    </button>
                    <button
                        onClick={() => {
                            setActiveCategory('Advanced');
                            setCurrentPage(1);
                        }}
                        className={`px-6 py-3 text-sm font-medium ${
                            activeCategory === 'Advanced'
                                ? 'bg-[#4380eb] text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                    >
                        Advanced
                    </button>
                </div>
            </div>

            {/* Results Table */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    {activeYear} {activeCategory} Results
                </h2>
                <ResultsTable data={paginatedData} />
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                    <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-l-md text-sm font-medium ${
                                currentPage === 1
                                    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }`}
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 text-sm font-medium ${
                                    currentPage === page
                                        ? 'bg-[#4380eb] text-white'
                                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-r-md text-sm font-medium ${
                                currentPage === totalPages
                                    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }`}
                        >
                            Next
                        </button>
                    </nav>
                </div>
            )}
        </>
    );
}