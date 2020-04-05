import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { showSignatureImage } from '~/store/modules/delivery/actions';

import {
  Container,
  ContainerPending,
  Camera,
  ContentCamera,
  Capture,
  CaptureText,
} from './styles';

function PendingView() {
  return (
    <ContainerPending>
      <Text>Waiting</Text>
    </ContainerPending>
  );
}

export default function CameraModal() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const takePicture = useCallback(
    camera => {
      const options = { quality: 0.5 };

      camera.takePictureAsync(options).then(data => {
        dispatch(showSignatureImage(data.uri));
        navigation.goBack();
      });
    },
    [dispatch, navigation]
  );

  return (
    <Container>
      <Camera
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        {({ camera, status }) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <ContentCamera>
              <Capture onPress={() => takePicture(camera)}>
                <CaptureText>SNAP</CaptureText>
              </Capture>
            </ContentCamera>
          );
        }}
      </Camera>
    </Container>
  );
}
