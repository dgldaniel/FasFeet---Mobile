import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '~/components/Button';

export const ContainerImage = styled.View`
  height: 70%;
  justify-content: flex-end;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background-color: #7159c1;
`;

export const ContainerCameraIcon = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.4);

  justify-content: center;
  align-items: center;
`;

export const CameraIcon = styled(Icon).attrs({
  size: 30,
  color: '#fff',
})``;
