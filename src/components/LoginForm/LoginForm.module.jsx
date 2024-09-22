import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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
  font-weight: 600;
  font-size: 18px;

  margin-top: 24px;
  padding: 1.063em 1.5em;
  cursor: pointer;
`;

export const LoggedLink = styled(NavLink)`
  margin-top: 8px;

  cursor: pointer;
  }
`;
