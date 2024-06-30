import { useState } from "react";
// import { useNavigate } from "react-router-dom";


export const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('');
    // const navigate = useNavigate();

const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setQuery('');
};

const handleChange = event => {
    const newQuery = event.currentTarget.value;
    setQuery(newQuery);
    // navigate(`?query=${newQuery}`, { repplace: true } ) 

}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchName" value={query} onChange={handleChange}></input>
            <button type="submit">Search</button>
        </form>
    )
  
};



