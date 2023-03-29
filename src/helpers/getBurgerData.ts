export const getBurgerData = async () => {
    const response = await fetch(`http://localhost:4000/burgerContents`, {
      cache: "no-store",
    });
    return response.json();
  };
  