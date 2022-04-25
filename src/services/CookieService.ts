import { Entity } from '../@types/Entity';

const tokenKey = 'magic_list';

class CookieService {
  //Save entity list to cookie
  static saveEntityList(entityList: Entity[]) {
    const entityListString = JSON.stringify(entityList);
    document.cookie = `${tokenKey}=${entityListString}; path=/`;
  }

  //Get entity list from cookie
  static getEntityList(): Entity[] {
    const entityListString = document.cookie.replace(
      new RegExp(`(?:(?:^|.*;\\s*)${tokenKey}\\s*\\=\\s*([^;]*).*$)|^.*$`),
      '$1'
    );
    if (entityListString) {
      return JSON.parse(entityListString);
    }
    return [];
  }
}

export default CookieService;
