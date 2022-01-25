import { Box } from "@chakra-ui/react";
import React from "react";
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
    },
}) => {
    return (
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollBar />}
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
