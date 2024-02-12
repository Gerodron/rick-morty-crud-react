export const GetRickMortyApi = async () => {
    try {
      const urlBase = await fetch(`https://rickandmortyapi.com/api/character`);
      const resp = await urlBase.json();
      const { results: characters } = resp;
      return characters;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
  