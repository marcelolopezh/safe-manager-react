export const getRegistroPagos = async (ordenamiento) => {
  let url = `${process.env.REACT_APP_API_URL}/transaccion/obtener-${ordenamiento}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
