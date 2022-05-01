import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Chart from './components/Chart';
import Table from './components/Table';
import { GlobalContext } from './contexts/GlobalContext';
import { Main } from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  //Get addItem from global context
  const { entities, addEntity } = useContext(GlobalContext);

  //Handle add new entity to addItem
  const handleAdd = () => {
    const newEntity = {
      id: Math.floor(Math.random() * 10000),
      label: (entities.length + 1).toString(),
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    };

    addEntity(newEntity);
  };

  return (
    <div className='App'>
      <Main>
        <ThemeProvider theme={theme}>
          <div>
            <Chart />
          </div>
          <div>
            <Button onClick={handleAdd}>Add</Button>
            <Table />
          </div>
        </ThemeProvider>
      </Main>
    </div>
  );
}

export default App;
