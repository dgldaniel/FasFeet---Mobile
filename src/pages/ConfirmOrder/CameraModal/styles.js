import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #000;
`;

export const ContainerPending = styled.View`
  flex: 1;
  background-color: lightgreen;
  justify-content: center;
  align-items: center;
`;

export const Camera = styled(RNCamera).attrs({
  type: RNCamera.Constants.Type.back,
  flashMode: RNCamera.Constants.FlashMode.on,
})`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ContentCamera = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;

export const Capture = styled.TouchableOpacity`
  flex: 0;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  padding: 0 20px;
  align-self: center;
  margin: 20px;
`;

export const CaptureText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
