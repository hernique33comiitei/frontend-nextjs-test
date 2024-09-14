**Importante: Configuração da `BASE_URL` para Build e Desenvolvimento**

Ao realizar o build do código, lembre-se de atualizar a variável `NEXT_PUBLIC_BASE_URL` no arquivo `.env` com a porta correspondente ao ambiente de build.

-   **Porta de Desenvolvimento**: `:8080`

    -   Configuração no `.env` para desenvolvimento:
        ```plaintext
        NEXT_PUBLIC_BASE_URL=http://localhost:8080
        ```

-   **Porta de Produção (Build)**: `:3000`
    -   Configuração no `.env` para produção:
        ```plaintext
        NEXT_PUBLIC_BASE_URL=http://localhost:3000
        ```

Se estiver utilizando portas diferentes em qualquer um dos ambientes (desenvolvimento ou produção), ajuste a configuração de `NEXT_PUBLIC_BASE_URL` no arquivo `.env` de acordo.
