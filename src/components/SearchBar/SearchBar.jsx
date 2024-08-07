import { useState } from "react";

export const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('');

const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setQuery('');
};

const handleChange = event => {
    const newQuery = event.currentTarget.value;
    setQuery(newQuery);
}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchName" value={query} onChange={handleChange}></input>
            <button type="submit">Search</button>
        </form>
    )
  
};



