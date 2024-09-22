import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoggedList = styled.ul`
  display: flex;
  gap: 8px;

  margin-left: auto;
`;
export const LoggedItem = styled.li``;
export const LoggedLink = styled(NavLink)`
  display: block;
  font-weight: 600;
  font-size: 18px;
  padding: 22px 28px;
  }
`;
