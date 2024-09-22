import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(138.13deg, rgba(34, 34, 34, 0.9) 25.87%, rgba(50, 50, 50, 0.9) 100%);
  z-index: 1200;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 48px);
  padding: 20px 30px;
  background-color: #f0f0f0;
  border: 1px solid #cccccc; 
`;
