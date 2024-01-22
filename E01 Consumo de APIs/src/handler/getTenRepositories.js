const {getTenRepositoriesController} = require("../controller/getTenRepositoriesController");

const getTenRepositories = async (req, res) => {
  try {
    const response = await getTenRepositoriesController();

    return res.status(200).json(response);

  } catch (error) {
    res.status(500).json({error: error.message});
  };
};

module.exports = {
  getTenRepositories
};