import React, { useState, useEffect } from 'react';

const ArticleFilter = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event: any) => {
    event.persist();
    setSearchText(event.target.value);
  };

  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);

  return (
    <div className="ml-20 mr-20 mt-10 text-center">
      <input
        className="pt-1 pb-1 pl-2 pr-2 border-2 outline-0 rounded-lg input w-full"
        type="text"
        placeholder="Search for articles..."
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
};

export default ArticleFilter;