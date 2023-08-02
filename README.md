# Script de Combinação e Edição de Vídeos

Este é um script Node.js que permite combinar e editar dois vídeos fornecidos pelo usuário. O script utiliza a biblioteca `ffmpeg` para manipulação de vídeos e `ytdl-core-discord` para baixar vídeos do YouTube. Ele oferece a possibilidade de cortar trechos específicos dos vídeos, combinar os vídeos em um único arquivo e redimensionar o vídeo combinado.

## Pré-requisitos

Antes de executar o script, você precisa ter o Node.js instalado em seu sistema. Caso ainda não o tenha, você pode baixá-lo no site oficial: [Node.js](https://nodejs.org/).

Além disso, é necessário que o executável do `ffmpeg` esteja disponível no PATH do sistema, ou seja, acessível globalmente. Caso não tenha o `ffmpeg` instalado ou não esteja no PATH, você pode seguir as etapas abaixo para adicioná-lo ao PATH:

Claro! Abaixo está o passo a passo detalhado em formato de README de como adicionar o `ffmpeg` ao PATH em sistemas Windows:

## Como adicionar o FFmpeg ao PATH no Windows

O FFmpeg é uma ferramenta poderosa para manipulação de arquivos de áudio e vídeo, e para utilizá-lo de forma mais conveniente no Windows, é recomendado adicionar o caminho do executável ao PATH do sistema. Isso permitirá que você execute comandos do FFmpeg em qualquer diretório do prompt de comando.

### Passo 1: Baixe o FFmpeg

1. Acesse o site oficial do FFmpeg: [ffmpeg Download](https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip)

2. Baixe a versão apropriada para o seu sistema operacional (provavelmente será a versão 64 bits).

3. Extraia o conteúdo do arquivo ZIP baixado para um diretório de sua escolha, por exemplo: `C:\ffmpeg`.

### Passo 2: Adicione o FFmpeg ao PATH

1. Abra o Menu Iniciar e pesquise por "Editar as variáveis de ambiente do sistema" e selecione a opção correspondente.

2. Na janela que se abre, clique no botão "Variáveis de Ambiente...".

3. Na seção "Variáveis do Sistema", selecione a variável "Path" e clique no botão "Editar...".

4. Clique no botão "Novo" e adicione o caminho do diretório onde o FFmpeg foi extraído. Por exemplo, adicione `C:\ffmpeg`.

5. Clique em "OK" para confirmar e fechar todas as janelas.

### Passo 3: Verifique a instalação

1. Abra o prompt de comando (cmd) ou o PowerShell.

2. Digite `ffmpeg -version` e pressione Enter.

3. Se a instalação tiver sido bem-sucedida, você verá a versão do FFmpeg e outras informações relacionadas.

Agora você está pronto para usar o FFmpeg em qualquer diretório do prompt de comando sem precisar digitar o caminho completo até o executável.

Observação: Caso você já tenha o prompt de comando aberto durante a instalação, será necessário fechá-lo e abri-lo novamente para que as alterações no PATH sejam aplicadas.

## Como Usar o Script

Este script foi desenvolvido para combinar, cortar e redimensionar vídeos a partir de arquivos locais ou URLs do YouTube. Para utilizá-lo, siga os passos abaixo:

### 1. Clone ou Faça o Download

Clone este repositório para o seu computador ou faça o download como arquivo ZIP e extraia-o para um diretório de sua escolha.

### 2. Instale as Dependências

Certifique-se de que o Node.js esteja instalado em seu computador. Em seguida, abra o terminal ou prompt de comando e navegue até o diretório do projeto. Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

Isso irá instalar as bibliotecas `ffmpeg-static`, `fluent-ffmpeg`, `ytdl-core-discord`, `fs`, e `readline`.

### 3. Execute o Script

Para iniciar o script, execute o seguinte comando no terminal ou prompt de comando, no diretório do projeto:

```bash
node index.js
```

### 4. Informe os Dados Necessários

O script solicitará o seguinte:

1. **Caminho do Primeiro Vídeo ou URL do YouTube:** Digite o caminho completo do arquivo de vídeo local ou a URL do vídeo do YouTube que você deseja utilizar como o primeiro vídeo.

2. **URL do Segundo Vídeo:** Insira a URL do segundo vídeo do YouTube que você deseja combinar com o primeiro vídeo.

3. **Tempo de Início e Duração para Cada Vídeo:** Para cada vídeo, insira o tempo de início no formato HH:mm:ss e a duração em segundos que você deseja cortar a partir desse ponto.

### 5. Processamento dos Vídeos

O script irá combinar os dois vídeos, cortar os trechos especificados e redimensionar o vídeo resultante. O vídeo final será salvo na pasta `result/` com o nome `resultadoFinal_{número}.mp4`, onde `{número}` será a numeração do vídeo com base nos arquivos existentes.

### Observação sobre o Visual Studio Code

Você pode utilizar o Visual Studio Code como sua IDE para executar o script. Abra o projeto no Visual Studio Code, navegue até o arquivo `index.js` e clique com o botão direito do mouse. Selecione a opção "Run Code" para executar o script diretamente no terminal integrado do VS Code. Certifique-se de que o Node.js e o npm estejam corretamente configurados em sua máquina para utilizar essa funcionalidade.

### Importante: Configuração do FFmpeg

Lembre-se de que este script utiliza a biblioteca `ffmpeg` para realizar as manipulações nos vídeos. Portanto, é necessário que o `ffmpeg` esteja corretamente instalado e configurado no seu sistema. Caso você ainda não tenha o `ffmpeg` configurado, siga as instruções no passo a passo detalhado fornecido anteriormente neste README.
## Licença

Este script é fornecido sob a Licença MIT. Leia o arquivo [LICENSE](LICENSE) para obter mais detalhes sobre os termos da licença.
