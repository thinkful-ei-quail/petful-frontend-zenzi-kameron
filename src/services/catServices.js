import config from "../config";

const CatServices = {
  getAllCats() {
    return fetch(`${config.API_ENDPOINT}/pets/cats`).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      } else {
        return res.json();
      }
    });
  },

  getNextCat() {
    return fetch(`${config.API_ENDPOINT}/pets/cat`)
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null);
  },

  deleteCurrent() {
    return fetch(`${config.API_ENDPOINT}/pets/cat`, {
      method: "DELETE",
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : null
    );
  },
};

export default CatServices;
