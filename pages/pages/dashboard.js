import React, { useEffect, useState } from "react";

function ShoppingList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.smartlist.tech/v2/lists/fetch/", {
      method: "POST",
      body: new URLSearchParams({
        token: global.user.token
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
      .then((res) => res.text())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <ul>{JSON.stringify(items)}</ul>;
  }
}

export default function App() {
  return <ShoppingList />;
}
