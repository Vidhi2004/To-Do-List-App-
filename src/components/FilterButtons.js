import React from 'react';

function FilterButtons({ filter, setFilter }) {
    return (
        <div className="filter-buttons">
            <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button
                className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                onClick={() => setFilter('active')}
            >
                Active
            </button>
            <button
                className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
        </div>
    );
}

export default FilterButtons;