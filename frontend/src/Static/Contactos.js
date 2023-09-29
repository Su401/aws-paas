import "../css/TemplatePrimario.css"

export default function Contactos() {
    return (
        <div className="Contactos">
            <div className="body">
                <h1>Contactos</h1>
                <section className="boas-vindas">
                    <article className="primeiro">
                        <address>
                            <p><strong>Morada:</strong> Rua da Empresa, 123<br />5300-123 Bragança<br />Portugal</p>
                            <p><strong>Telefone:</strong> +351 123 456 789</p>
                            <p><strong>Email:</strong> info@empresa-xyz.pt</p>
                        </address>
                    </article>
                </section>

                <section>
                    <h2>Formulário de Contacto</h2>
                    <div class="col-3 contact">

                        <form action="/enviar-mensagem" method="post">
                            <div class="mb-3">
                                <label for="nome" class="form-label">Nome:</label>
                                <input type="text" id="nome" name="nome" class="rounded-2 form-control" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" id="email" name="email" class="rounded-2 form-control" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="mensagem" class="form-label">Mensagem:</label>
                                <textarea id="mensagem" name="mensagem" class="rounded-2 form-control" rows="4"
                                    required></textarea>
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-primary shadow-sm btn-lg-custom" type="submit">Enviar
                                    Mensagem</button>

                            </div>
                        </form>

                    </div>
                </section>

            </div>




        </div>

    )
}