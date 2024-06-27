
exports.handler = async (event, context) => {
  try {
    console.log('Mensaje enviado correctamente!');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Mensaje enviado correctamente' })
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error al enviar el mensaje' })
    };
  }
};