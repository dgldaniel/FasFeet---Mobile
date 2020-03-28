import styled from 'styled-components/native';

import Button from '~/components/Button';

export const InputProblem = styled.TextInput.attrs({
  multiline: true,
  placeholder: 'Inclua aqui o problema que ocorreu na entrega',
  textAlignVertical: 'top',
})`
  height: 40%;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #b2b2b2;
  padding: 10px;
  font-size: 16px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background-color: #7159c1;
`;
