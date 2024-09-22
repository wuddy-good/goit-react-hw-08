import styled from '@emotion/styled';
import { FaUserPlus } from 'react-icons/fa';

export const AddUserIcon = styled(FaUserPlus)`
  width: 20px;
  height: 20px;

  fill: #fabb18;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 250px;
  padding: 22px 36px;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 18px;

  display: flex;
  align-items: center;
  gap: 14px;
  width: fit-content;

  margin-top: 24px;
  padding: 1.063em 1.5em;
  cursor: pointer;
`;
