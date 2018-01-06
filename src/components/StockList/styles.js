import styled from 'styled-components';

const styles = {};

styles.ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 3em 0;
  padding: 0;
`;

styles.stock = styled.div`
  box-sizing: border-box;
  text-align: center;
  flex-grow: 1;
  width: 100%; // Default to full width
  padding: 0.8em 1.2em;
  overflow: hidden; // Or flex might break
  list-style: none;
  border: solid @bw white;
  background: fade(slategrey, 20%);
  background-color: ${props => (props.diff === 0 ? 'inherit' : props.diff === 1 ? '#32CD32' : '#FF4500')};
  width: 33.33%;
  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    margin: 0;
  }
`;
export default styles;
