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
  addEntity: (entity: Entity) => {},
});

export const GlobalContextProvider = ({
  children,
  value = {} as IGlobalContextProps,
}: {
  children: React.ReactNode;
  value?: Partial<IGlobalContextProps>;
}) => {
  const [currentEntities, setCurrentEntities] = useState<Entity[]>([]);

  //Use useCallback, add new entity to currentEntities
  const addEntity = (entity: Entity) => {
    debugger;
    setCurrentEntities([...currentEntities, entity]);
  };

  //Use useCallback, update entity in currentEntities
  const updateEntity = (entity: Entity) => {
    debugger;
    setCurrentEntities(
      currentEntities.map((currentEntity) =>
        currentEntity.id === entity.id ? entity : currentEntity
      )
    );
  };

  //Remove entity from currentEntities
  const removeEntity = (id: number) => {
    debugger;
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
      {children}
    </GlobalContext.Provider>
  );
};
