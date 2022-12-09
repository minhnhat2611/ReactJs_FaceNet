import { useState } from "react";

function Search({ searchItemName }) {

    const [valueSearch, setValueSearch] = useState("");
    const searchItemComponent = () => {
        searchItemName(valueSearch);
    };

    return (
        <>
        </>
    );
}

export default Search;