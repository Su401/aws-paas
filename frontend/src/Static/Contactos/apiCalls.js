import axios from "axios";

export async function contatos(dados) {
  try {
    const response = await axios.post(
      "http://localhost:8080/contatos/enviar-mensagem",
      dados  
    );

    return response.data; 
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else if (error.request) {
      throw "Pedido falhou devido a problemas de rede.";
    } else {
      throw error;
    }
  }
}
