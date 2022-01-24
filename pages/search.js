import { useState } from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import Image from "next/image";
import noResult from "../assets/noresult.svg";

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                p="2"
                fontWeight="black"
                fontSize="lg"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilters((prevFilter) => !prevFilter)}
            >
                <Text>Search Propety by Filter</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter}></Icon>
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {[].map((property) => (
                    <Property property={property} key={property.id} />
                ))}
            </Flex>
            {[].length === 0 && (
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    marginTop="5"
                    marginBottom="5"
                >
                    <Image alt="No result" src={noResult} />
                    <Text fontSize="2xl" marginTop="3">
                        No Results Found
                    </Text>
                </Flex>
            )}
        </Box>
    );
};

export default Search;

export async function getStaticProps() {
    const propertyForSale = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`,
    );
    const propertyForRent = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`,
    );

    return {
        props: {
            propertiesForSale: propertyForSale?.hits,
            propertiesForRent: propertyForRent?.hits,
        },
    };
}
