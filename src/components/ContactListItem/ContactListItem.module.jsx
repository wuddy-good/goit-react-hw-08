import styled from '@emotion/styled';
import { FaUser, FaPhoneAlt, FaUserMinus } from 'react-icons/fa';

export const UserIcon = styled(FaUser)`
  padding: 8px;
  width: 20px;
  height: 20px;
  fill: #fabb18;
  border-radius: 12px;
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  padding: 8px;

  width: 20px;
  height: 20px;

  fill: #fabb18;

  border-radius: 12px;

  background-color: rgba(250, 187, 24, 0.1);
`;

export const UserDeletedIcon = styled(FaUserMinus)`
  width: 20px;
  height: 20px;

  fill: #fabb18;
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  padding: 20px 20px;
`;

export const ContactName = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;

  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;

  margin: 0;
  /* margin-left: 10px; */
`;

export const Button = styled.button`
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 14px;

  padding: 0.563em 1em;
  cursor: pointer;
`;
