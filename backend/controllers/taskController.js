const knex = require("knex");

const { tables } = require("../common/tableAlias");
const dbConnection = require("../common/connection");

const deleteTask = async (req, res) => {
  let connectDb = await dbConnection.getDataBaseConnection();
  const databaseConnection = knex(connectDb.connection);
  const { id } = req.body;
  try {
    return databaseConnection(tables.tasks)
      .del()
      .where("id", id)
      .then((data) => {
        databaseConnection ? databaseConnection.destroy() : null;
        return res.status(200).json({
          message: "Task Deleted",
        });
      })
      .catch((e) => {
        throw e;
      });
  } catch (e) {
    databaseConnection ? databaseConnection.destroy() : null;
    console.log("Error in deleteTask main catch block", e);
    return res
      .status(500)
      .json({ message: "Something went wrong please try again." });
  }
};

const getTaskDetails = async (req, res) => {
  let connectDb = await dbConnection.getDataBaseConnection();
  const databaseConnection = knex(connectDb.connection);
  try {
    return databaseConnection(tables.tasks)
      .select("title", "id")
      .orderBy("created_at", "desc")
      .then((data) => {
        databaseConnection ? databaseConnection.destroy() : null;
        return res.status(200).json({
          data: data,
        });
      })
      .catch((e) => {
        throw e;
      });
  } catch (e) {
    databaseConnection ? databaseConnection.destroy() : null;
    console.log("Error in getTaskDetails main catch block", e);
    return res
      .status(500)
      .json({ message: "Something went wrong please try again." });
  }
};

const createTask = async (req, res) => {
  let connectDb = await dbConnection.getDataBaseConnection();
  const databaseConnection = knex(connectDb.connection);
  const { title } = req.body;
  try {
    return databaseConnection(tables.tasks)
      .insert({ title, created_at: new Date().toISOString() })

      .then((data) => {
        databaseConnection ? databaseConnection.destroy() : null;
        return res.status(201).json({
          message: "Task Created.",
        });
      })
      .catch((e) => {
        throw e;
      });
  } catch (e) {
    databaseConnection ? databaseConnection.destroy() : null;
    console.log("Error in createTask main catch block", e);
    return res
      .status(500)
      .json({ message: "Something went wrong please try again." });
  }
};

module.exports = { getTaskDetails, createTask, deleteTask };
