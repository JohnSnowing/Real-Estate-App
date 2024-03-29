import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import React from "react";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import ImageScrollBar from "../../components/ImageScrollBar";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

const PropertyDetails = ({
    propertyDetails: {
        price,
        rentFrequency,
        rooms,
        title,
        area,
        isVerified,
        description,
        purpose,
        amenities,
        photos,
        agency,
        bath,
        type,
        furnishingStatus,
    },
}) => {
    return (
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollBar data={photos} />}
            <Box width="full" p="6">
                <Flex
                    paddingTop="2"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">
                            {isVerified && <GoVerified />}
                        </Box>
                        <Text fontWeight="bold" fontSize="lg">
                            AED {millify(price)}
                            {rentFrequency && `/${rentFrequency}`}
                        </Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex
                    alignItems="center"
                    p="1"
                    justifyContent="space-between"
                    w="250px"
                    color="blue.400"
                >
                    {rooms} <FaBed /> | {bath} <FaBath /> | {millify(area)} sqft{" "}
                    <BsGridFill />
                </Flex>
                <Box marginTop="2">
                    <Text fontSize="lg" marginBottom="2" fontWeight="bold">
                        {title}
                    </Text>
                    <Text lineHeight="2" color="gray.600">
                        {description}
                    </Text>
                    <Box>
                        <Flex
                            flexWrap="wrap"
                            textTransform="uppercase"
                            justifyContent="space-between"
                        >
                            <Flex
                                justifyContent="space-between"
                                w="400px"
                                borderBottom="1px"
                                borderColor="gray.100"
                                p="3"
                            >
                                <Text>Type</Text>
                                <Text fontWeight="bold">{type}</Text>
                            </Flex>
                            <Flex
                                justifyContent="space-between"
                                w="400px"
                                borderBottom="1px"
                                borderColor="gray.100"
                                p="3"
                            >
                                <Text>Purpose</Text>
                                <Text fontWeight="bold">{purpose}</Text>
                            </Flex>
                            {furnishingStatus && (
                                <Flex
                                    justifyContent="space-between"
                                    w="400px"
                                    borderBottom="1px"
                                    borderColor="gray.100"
                                    p="3"
                                >
                                    <Text>Furnishing Status</Text>
                                    <Text fontWeight="bold">
                                        {furnishingStatus}
                                    </Text>
                                </Flex>
                            )}
                        </Flex>
                        <Box>
                            {amenities.length && (
                                <Text
                                    fontWeight="black"
                                    fontSize="2xl"
                                    marginTop="5"
                                >
                                    Amenities
                                </Text>
                            )}
                            <Flex flexWrap="wrap">
                                {amenities.map((item) =>
                                    item.amenities.map((amenity) => (
                                        <Text
                                            key={amenity.text}
                                            fontWeight="bold"
                                            color="blue.400"
                                            fontSize="l"
                                            p="2"
                                            bg="gray.200"
                                            m="1"
                                            borderRadius="5"
                                        >
                                            {amenity.text}
                                        </Text>
                                    )),
                                )}
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(
        `${baseUrl}/properties/detail?externalID=${id}`,
    );

    return {
        props: {
            propertyDetails: data,
        },
    };
}
