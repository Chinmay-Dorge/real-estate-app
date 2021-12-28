import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {Flex, Box , Icon, Text} from '@chakra-ui/react';
import { BsFilter } from "react-icons/bs";

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
            cursor="pointer"
            background="gray.100"
            borderBottom="1px"
            borderColor="gray.200"
            p="2"
            fontWeight="black"
            fontSize="lg"
            justifyContent="center"
            alignItems="center"
            onClick={setSearchFilters((prevFilter) => !prevFilter)}
            >
            <Text>Search Property By Filters</Text>
            <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
        </Box>

    )
}

export default Search;