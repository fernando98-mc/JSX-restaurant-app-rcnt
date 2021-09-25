import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";


const RestaurantCard = styled(Card)`
    background-color: white;    
    padding: 16px;
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.text.primary};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading},
    font-family: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = "Some nice restaurant",
        icon,
        photos = [
            "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg"
        ],
        address = "Some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporaly,
    } = restaurant;

    return (
        <RestaurantCard>
            <RestaurantCardCover elevation={5} source={{ url: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: "white", padding: 16 },
    cover: { backgroundColor: "white" },
    title: { padding: 16 }
});
