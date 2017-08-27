const LIMIT = 20;

export default {
  create({ data, page }) {
    let storage = localStorage["data"];
    if (storage) storage = JSON.parse(storage);
    if (!storage || storage.length === 0) {
      data.id = 0;
      storage = [];
    } else {
      data.id = storage[storage.length - 1].id + 1;
    }
    storage.push(data);
    localStorage.setItem("data", JSON.stringify(storage));

    return {
      data: storage.slice(LIMIT*(page-1), LIMIT*page),
      total_count: storage.length,
    };
  },
  read({ page }) {
    if (localStorage.getItem("data")) {
      let storage = JSON.parse(localStorage.getItem("data"))
      return {
        data: storage.slice(LIMIT*(page-1), LIMIT*page),
        total_count: storage.length,
      };
    }
    else
    return { data: [] };
  },
  update(data) {

  },
  delete({ id, page }) {
    let storage = JSON.parse(localStorage["data"]).filter((n) => {
      if (n.id != id) return n;
    });

    localStorage.setItem("data", JSON.stringify(storage));

    return {
      data: storage.slice(LIMIT*(page-1), LIMIT*page),
      total_count: storage.length,
    }
  }
}
