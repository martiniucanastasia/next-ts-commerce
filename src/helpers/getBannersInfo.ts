export const getBannersInfo = async () => {
    const response = await fetch(`http://localhost:4000/bannersInfo`, {
      cache: "no-store",
    });
    return response.json();
  };
  