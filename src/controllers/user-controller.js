const FSUserRepository = require("../repositories/userRepo");
const createUser = require("../use-cases/user/create-user");
const getUsers = require("../use-cases/user/get-users");
const getReqData = require("../utils/req-utils");


class UserController {

  userRepo

  constructor() {
    this.userRepo = new FSUserRepository();
  }

  async get(req, res) {
    try {


      const users = await getUsers({ userRepo: this.userRepo, payload: "" });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(users))
      res.end();
    } catch (error) {
      console.log(error);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error.message }));
    }
  }

  async create(req, res) {
    try {

      const body = await getReqData(req)
      const user = await createUser({ userRepo: this.userRepo, payload: body });

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    } catch (error) {
      console.log(error);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error.message }));
    }
  }
}

module.exports = UserController
