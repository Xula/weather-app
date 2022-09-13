import React, { useState } from "react";
import { Button, Text } from "react-native";
import { Container, Gradient, GradientColors } from "./styles";


export const MainScreen = () => {
    const [day, setDay] = useState(true);

    return (
        <Container>
            <Gradient colors={day ? GradientColors.day : GradientColors.night} />
            <Button title="Switch" onPress={() => setDay(!day)}/>
            <Text>Teste main screen</Text>
        </Container>
    )
}