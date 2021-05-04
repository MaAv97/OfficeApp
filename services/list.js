export function getList() {
    return fetch("http://localhost:3333/list").then((data) => data.json());
  }

  export function setItem(item) {
    console.log({ item });
    return fetch("http://localhost:3333/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((data) => data.json());
  }
  export function deteleItem(itemId) {
    console.log(itemId)
    return fetch("http://localhost:3333/list/" + itemId, {
      method: "DELETE",
    }).then(res => res.text()) // or res.json()
    .then(res => console.log(res))
  }