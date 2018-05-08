import request from "supertest";
import app from "../src/app";

const chai = require("chai");
const expect = chai.expect;

/**
 *  Check Router list
 */

describe("GET /admin", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/admin/")
      .expect(200, done);
  });
});


describe("GET /admin/recruit", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/admin/recruit")
      .expect(200, done);
  });
});


// describe("POST /contact", () => {
//   it("should return false from assert when no message is found", (done) => {
//     request(app).post("/contact")
//       .field("name", "John Doe")
//       .field("email", "john@me.com")
//       .end(function(err, res) {
//         expect(res.error).to.be.false;
//         done();
//       })
//       .expect(302);

//   });
// });