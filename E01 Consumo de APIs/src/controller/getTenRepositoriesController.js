const axios = require("axios");

const getTenRepositoriesController = async () => {
  try {
    const repositories = await axios.get("https://api.github.com/users/google/repos", {
      params: {
        sort: "stars",
        per_page: 10,
      },
    });

    if(repositories) {
      const tenRepositories = repositories.data.map(repository => ({
        nombre: repository.name,
        descripcion: repository.description
      }));

      if(tenRepositories) {
        return tenRepositories;
      };
    }; 

  } catch (error) {
    return "Error al obtener los repositorios de Google en la API de GitHub";
  };

};

module.exports = {
  getTenRepositoriesController
};