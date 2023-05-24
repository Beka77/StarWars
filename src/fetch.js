export default class SwapiServices {
  _api = "https://swapi.dev/api/";
  async getResourse(url) {
    const res = await fetch(`${this._api}${url}`);
    if (!res.ok) {
      throw new Error(
        `не смогли связаться с сервером ${url}` + ` , получено ${res.status}`
      );
    }
    return await res.json();
  }
  async getAllPeople() {
    const res = await this.getResourse("/people/");
    return res.results;
  }
  getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }
  async getAllStarShip() {
    const res = await this.getResourse("/starships/");
    return res.results;
  }
  getStarShip(id) {
    return this.getResourse(`/startshpis/${id}`);
  }
  async getAllPlanets() {
    const res = await this.getResourse("/planets/");
    return res.results;
  }
  getPlanets(id) {
    return this.getResourse(`/planets/${id}`);
  }
}
const swapi = new SwapiServices();
swapi.getAllPeople().then((people) => {
  console.log(people);
  people.forEach((p) => {
    console.log(p.name);
  });
});
