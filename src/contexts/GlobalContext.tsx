import React, { useState } from 'react';

import { Entity } from '../@types/Entity';

interface IGlobalContextProps {
  entities: Entity[];
  updateEntity: (entity: Entity) => void;
  addEntity: (entity: Entity) => void;
  removeEntity: (id: number) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  entities: [],
  updateEntity: () => {},
  removeEntity: () => {},
  addEntity: () => {},
});

export const GlobalContextProvider = (props: IGlobalContextProps) => {
  const [currentEntities, setCurrentEntities] = useState(props.entities);

  //Use useCallback, add new entity to currentEntities
  const addEntity = (entity: Entity) => {
    setCurrentEntities([...currentEntities, entity]);
  };

  //Use useCallback, update entity in currentEntities
  const updateEntity = (entity: Entity) => {
    setCurrentEntities(
      currentEntities.map((currentEntity) =>
        currentEntity.id === entity.id ? entity : currentEntity
      )
    );
  };

  //Remove entity from currentEntities
  const removeEntity = (id: number) => {
    setCurrentEntities(currentEntities.filter((entity) => entity.id !== id));
  };

  return (
    <GlobalContext.Provider
      value={{
        entities: currentEntities,
        updateEntity,
        removeEntity,
        addEntity,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
