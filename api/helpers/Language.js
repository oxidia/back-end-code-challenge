class Language {
  constructor(name) {
    this._name = name;
    this._repositoriesCount = 0;
    this._repositories = [];
  }

  toJSON() {
    return {
      name: this._name,
      repositoriesCount: this._repositoriesCount,
      repositories: this._repositories
    };
  }

  addRepository(reference) {
    this._repositoriesCount++;

    const repository = this._prepareRepository(reference);

    this._repositories.push(repository);
  }

  _prepareRepository(reference) {
    return {
      name: reference.name,
      url: reference.url,
      stars: reference.stars,
      forks: reference.forks
    };
  }
}

module.exports = Language;
