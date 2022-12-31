export const createRegistroPago = async (dataForm) => {
  const url = `${process.env.REACT_APP_API_URL}/transaccion/crear`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
