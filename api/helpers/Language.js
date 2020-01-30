class Language {
  static compare(a, b, options) {
    const { sort, order } = options;

    const order_value = order === 'asc' ? 1 : -1;
    let compare_value;

    switch (sort) {
      case 'repos_count':
        {
          compare_value = a.repositoriesCount - b.repositoriesCount;
          if (compare_value !== 0) break;
        }

      case 'name': {
        compare_value = a.name.localeCompare(b.name);
        break;
      }

      default: {
        compare_value = 1;
        break;
      }
    }

    return compare_value * order_value;
  }

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
      description: reference.description,
      stars: reference.stars,
      forks: reference.forks
    };
  }
}

module.exports = Language;
