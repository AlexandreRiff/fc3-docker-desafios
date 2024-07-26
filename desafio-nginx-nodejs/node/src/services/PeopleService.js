import pool from "../database/database.js";

class PeopleService {
  async index() {
    const title = "<h1>Full Cycle</h1>";

    await this.createNamePeople("Alexandre");
    const peoplesName = await this.getNameAllPeople();

    let people = "";
    peoplesName.forEach(({ name }) => {
      people += `<p>${name}<p>`;
    });

    return { title, people };
  }

  async createNamePeople(name) {
    const sql = "INSERT INTO people (name) values (?)";
    await pool.query(sql, name);
  }

  async getNameAllPeople() {
    const sql = `SELECT name FROM people`;
    const [rows] = await pool.query(sql);
    return rows;
  }
}

export default new PeopleService();
