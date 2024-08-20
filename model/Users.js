import {connection } from "../Config/index"
// import { createConnection } from "../middleware/authenticateuser"
import {compare, hash} from "bcrypt" 
class Users {
    fetchUsers(req,res) {
        try {
            const strQry= `SELECT firstName, 
            lastName, 
            Gender, userAge, 
            userRole, userEmail, 
            userPass, userProfile
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
         SELECT userID,lastName, 
            Gender, userAge, 
            userRole, userEmail, 
            userPass, userProfile
            FROM Users
         WHERE userID = ${req.params.id};
        `;
      db.query(strQry, (err, result) => {
        if (err) throw new Error("Issue when retrieving a user.");
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
      data.pwd = await hash(data.pwd, 12);
      // Payload
      let user = {
        emailAdd: data.emailAdd,
        pwd: data.pwd,
      };
      let strQry = `
        INSERT INTO Users
        SET ?;
        `;
      db.query(strQry, [data], (err) => {
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
      db.query(strQry, [data], (err) => {
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
      db.query(strQry, (err) => {
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
