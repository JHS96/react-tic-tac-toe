import Player from './components/Player';

function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player initialName='Player 1' symbol='X' />
          <Player initailName='Player 2' symbol='O' />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
