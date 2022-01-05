import {useEffect , useState} from 'react'
import {Box, Flex , Icon ,Button , Select, Text, Input, Spinner} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import { MdCancel} from 'react-icons/md'
import Image from 'next/image'
import { filterData , getFilterValues } from '../utils/filterData'

const SearchFilters = () =>{
    const [filters , setFilters] = useState(filterData)
    const searchProperties = (filterValues) =>{

    }
    return (
        <Flex color="gray.400" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) => {
                <Box key={filter.queryName}>
                    <Select 
                    onChange={(e) => searchProperties({[filter.queryName] : e.target.value})}
                    placeholder={filter.placeholder}
                    w="fit-content"
                    p="2">

                    </Select>
                </Box>
            })}
        </Flex>

    )
}

export default SearchFilters;