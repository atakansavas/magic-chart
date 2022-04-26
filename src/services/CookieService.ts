import { Entity } from '../@types/Entity';

const list_key = 'magic_list';

class CookieService {
  //Save entity list to cookie
  static saveEntityList(entityList: Entity[]) {
    const entityListString = JSON.stringify(entityList);
    window.localStorage.setItem(list_key, entityListString);
  }

  //Get entity list from cookie
  static getEntityList(): Entity[] {
    const item = window.localStorage.getItem(list_key);
    return item ? JSON.parse(item) : [];
  }
}

export default CookieService;
