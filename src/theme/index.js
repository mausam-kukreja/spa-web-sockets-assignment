import styled from 'styled-components';

const styles = {};

styles.SpaWebSockApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 960px;
`;

styles.Main = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-height: 100%;
  flex-wrap: nowrap;
  box-sizing: border-box;
  padding-top: 100px;
`;

styles.Content = styled.div`
  position: relative;
  flex: 1;
`;

export default styles;
