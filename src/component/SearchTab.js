import React from 'react';

const SearchTab = ({ value, getArtist, onChange, setRef }) => {
  return (
    <div className="tab-search">
      <form onSubmit={getArtist}>
        <input value={value} type="text" placeholder="search..." onChange={onChange}
               ref={(ref) => (setRef(ref))} />
      </form>
    </div>
  )
}

export default SearchTab;
