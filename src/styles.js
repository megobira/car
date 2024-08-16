import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 300px;   /* Largura reduzida */
  height: 200px;  /* Altura reduzida */
  overflow: hidden;
  margin: 20px auto;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 55, 94, 0.3);  /* Cor #00375E com 30% de transparência */
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.8s ease-in-out;
`;

export const Title = styled.h2`
  color: white;
  font-size: 1.2rem;  /* Ajuste do tamanho da fonte */
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100px;  /* Ajuste do tamanho da imagem */
  object-fit: cover;
  border-radius: 5px;
`;

export const Description = styled.p`
  color: white;
  font-size: 0.9rem;  /* Ajuste do tamanho da fonte */
  margin-top: 5px;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);  /* Cor #FFFFFF com 70% de transparência */
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const PrevButton = styled(NavigationButton)`
  left: -40px;  /* Posicionando fora do carrossel */
`;

export const NextButton = styled(NavigationButton)`
  right: -40px;  /* Posicionando fora do carrossel */
`;

export const IndicatorContainer = styled.div`
  position: relative;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 6px;
`;

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const IndicatorWrapper = styled.div`
  margin-top: -20px;  /* Move as bolinhas para cima */
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 10px; /* Espaço abaixo das bolinhas */
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? '#013A60' : '#6E9DBD')};  /* Cores #013A60 e #6E9DBD */
  border-radius: 50%;
  cursor: pointer;
`;
