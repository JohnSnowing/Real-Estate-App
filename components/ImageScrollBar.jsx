import { Flex, Icon } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={scrollPrev}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleRight}
                onClick={scrollNext}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    );
};

const ImageScrollBar = () => {
    return (
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            style={{ overflow: "hidden" }}
        ></ScrollMenu>
    );
};

export default ImageScrollBar;
