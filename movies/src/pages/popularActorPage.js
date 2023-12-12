import React, {useState} from "react";
import { useQuery } from "react-query";
import { getPopularActors } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import PopularActor from "../components/popularActor";
import { Pagination } from "@mui/material";
import FilterPersonCard from "../components/filterPersonCard";

const PopularActorPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");

    const {data, isLoading, error, isError, refetch} = useQuery(
        ["Popular Actor", {page: currentPage}],
        getPopularActors)

    if (isLoading) {
        return <Spinner />
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }
      
      let displayedPeople = data.results
        .filter((person) => {
          return person.name.toLowerCase().search(searchValue.toLowerCase()) !== -1;
        })

      const handleChange = (event, page) => {
        setCurrentPage(page)
        refetch({ page: currentPage})
      } 

      const handleFilterChange = (type, value) => {
        if (type === "name") setSearchValue(value)
      }

    console.log(data.results)

    return (
        <>
            <FilterPersonCard 
              searchValue={searchValue}
              onUserInput={handleFilterChange}
            />
            <PopularActor data={displayedPeople} />
            <Pagination count={10} color="primary" onChange={handleChange} page={currentPage} />
        </>
    );
}

export default PopularActorPage;