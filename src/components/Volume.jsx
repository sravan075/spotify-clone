import { useStateProvider } from '../utils/StateProvider';
import styled from 'styled-components'
import axios from 'axios';
import { useEffect, React} from 'react';

export default function Volume() {
    const [{ token }] = useStateProvider();
    const setVolume = async (e) => {
        await axios.put(
          "https://api.spotify.com/v1/me/player/volume",
          {},
          {
            params: {
              volume_percent: parseInt(e.target.value),
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
      };
  return (
    <Container>
        <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </Container>
  )
}

const Container = styled.div`
display: flex;
  justify-content: flex-end;
  align-content: center;
  margin-right: 5rem;
  input {{
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 15rem;
  
}
`