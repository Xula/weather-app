import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(SafeAreaView)`
    flex: 1;
    position: relative;
    align-items: 'center';
    justify-content: 'center';
`;

export const Gradient = styled(LinearGradient)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const GradientColors = {
    day: ['#17d8ff', '#0470b8'],
    night: ['#1f1f4d', '#12132e']
};