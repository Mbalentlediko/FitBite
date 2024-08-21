import {connection } from "../Config/index.js"
// import { createConnection } from "../middleware/authenticateuser"
import {compare, hash} from "bcrypt" 

import { createToken } from "../middleware/authenticateuser.js";
class Users {
    fetchUsers(req,res) {
        try {
            const strQry= `SELECT *
            FROM Users`;
        connection.query(strQry, (err, results) => {
        if (err) throw new Error("Issue when retrieving all users.");
        res.json({
            status: res.statusCode,
            results,
        });
        });
    } catch (e) {
        res.json({
        status: 404,
        msg: e.message,
        });
    }
    }

  fetchUser(req, res) {
    try {
      const strQry = `
         SELECT * FROM Users
         WHERE userID = ${req.params.id};
        `;
      connection.query(strQry, (err, result) => {
        if (err) throw new Error(err);
        res.json({
          status: res.statusCode,
          result: result[0],
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      });
    }
  }

  async registerUser(req, res) {
    try {
      let data = req.body;
      data.userPass = await hash(data.userPass, 12);
      // Payload
      let user = {
        emailAdd: data.emailAdd,
        pwd: data.userPass,
      };
      let strQry = `
        INSERT INTO Users
        SET ?;
        `;
      connection.query(strQry, [data], (err) => {
        if (err) {
          res.json({
            status: res.statusCode,
            msg: "This email has already been taken",
          });
        } else {
          const token = createToken(user);
          res.json({
            token,
            msg: "You are now registered.",
          });
        }
      });
    } catch (e) {
      // Unable to add a new user
      res.json({
        status: 404,
        msg: e.message,
      });
    }
  }
  
  async updateUser(req, res) {
    try {
      let data = req.body;
      if (data.pwd) {
        data.pwd = await hash(data.pwd, 12);
      }
      const strQry = `
        update Users
        SET ?
        where userID = ${req.params.id};
        `;
      connection.query(strQry, [data], (err) => {
        if (err) throw new Error("Unable to update user");
        res.json({
          status: res.statusCode,
          msg: "Congartulations you have successfully updated the user!",
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      });
    }
  }

  deleteUser(req, res) {
    try {
      const strQry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `;
      connection.query(strQry, (err) => {
        if (err)
          throw new Error("To delete a user, please review your delete query.");
        res.json({
          status: res.statusCode,
          msg: "A user 's information was removed ",
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      });
    }
  }

}
export {Users}
