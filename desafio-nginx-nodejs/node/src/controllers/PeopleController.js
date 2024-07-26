import PeopleService from "../services/PeopleService.js";

class PeopleController {
  async index(request, response) {
    const { title, people } = await PeopleService.index();

    response.send(title + people);
  }
}

export default new PeopleController();
