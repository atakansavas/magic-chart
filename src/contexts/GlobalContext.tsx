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
    const newList = [...currentEntities, entity];
    setCurrentEntities(newList);
    CookieService.saveEntityList(newList);
  };

  //Use useCallback, update entity in currentEntities
  const updateEntity = (entity: Entity) => {
    const updatedList = currentEntities.map((e) =>
      e.id === entity.id ? entity : e
    );
    setCurrentEntities(updatedList);
    CookieService.saveEntityList(updatedList);
  };

  //Remove entity from currentEntities
  const removeEntity = (id: number) => {
    const filteredList = currentEntities.filter((entity) => entity.id !== id);
    setCurrentEntities(filteredList);
    CookieService.saveEntityList(filteredList);
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
