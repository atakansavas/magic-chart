import React, { useEffect, useState } from 'react';

import { Entity } from '../@types/Entity';
import CookieService from '../services/CookieService';

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

  //Use useEffect, if current entities is null, set current entities from cookie service
  useEffect(() => {
    if (currentEntities.length === 0) {
      const entities = CookieService.getEntityList();
      setCurrentEntities(entities);
    } else {
      console.log('UPDATE');
      CookieService.saveEntityList(currentEntities);
    }
  }, [currentEntities, setCurrentEntities]);

  //Use useCallback, return current entities if is not null. If is null, get entities from cookie service
  // const getEntities = () => {
  //   if (currentEntities.length > 0) {
  //     return currentEntities;
  //   }
  //   return CookieService.getEntityList();
  // };

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
      {children}
    </GlobalContext.Provider>
  );
};
