# Desafio de programação

Para realizar este desafio de programação utilizei a linguagem JavaScript, por estar mais familiarizado com ela. Mas já estou estudando e pretendo reescrever o código em Java até o dia 20/02/22.

## Questão 1

A Questão 1 constroi uma escada de '*', com declive da direita para a esquerda com tamanho 'n x n'. Foram utilizados dois laços de repetição 'for' e 'while' para construir a escada. Para rodar a aplicação, basta entrar com um número na variável 'n' e executar o código em ambiente CLI.

## Questão 2

A Questão 2 faz a validação de senhas. A senha deve ter ao menos um número, uma letra maiúscula, uma letra minúscula, um caractere especial (!@#$%^&*()-+) e possuir no mínimo 6 dígitos. O algorítmo retorna quantos caracteres ainda precisam ser preenchidos ou substituídos. Utilizei a função 'validaSenha' para fazer esta validação comparando com RegEx. Para rodar a aplicação, basta entrar com uma senha na variável 'senha' e executar o código em ambiente CLI. Também fiz um teste unitário para esta questão.

## Questão 3

A Questão 3 faz a contagem de substrings que são anagramas em uma palavra. Utilizei as funções 'geraSubstrings', para gerar todas as substrings da palavra, 'eAnagrama', para comparar se duas substrings são anagramas entre si e 'contaAnagrama', para contar quantas substrings são anagramas na palavra. Para rodar a aplicação, basta entrar com uma palavra na variável 'palavra' e executar o código em ambiente CLI. Também fiz um teste unitário para esta questão.

* Obs: Na Questão 3, Exemplo 1, a saída é 3. Porém, ao rodar o algoritmo, verifiquei ser correta a saída 2. 

## Como rodar os testes

Usei `Jasmine` para escrever os testes. Para rodar os testes, digite o seguinte comando:

```
npm test
```
