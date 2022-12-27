export const getRegistroPagos = async (ordenamiento) => {
  let url = `http://192.168.1.3:8080/transaccion/obtener-${ordenamiento}`;
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
