# Design_Home_Automation

A simple tool para automação de dispositivos domésticos, desenvolvido em TypeScript. O objetivo deste projeto é fornecer uma base leve e extensível para controlar e orquestrar dispositivos IoT em uma casa (por exemplo: lâmpadas, tomadas, sensores), integrando protocolos e serviços comuns (MQTT, HTTP, etc.) de forma modular.

## Principais funcionalidades
- Estrutura em TypeScript com tipagem e arquitetura modular.
- Integração com brokers MQTT e/ou APIs REST de dispositivos.
- Gerenciamento básico de dispositivos e regras de automação.
- Extensível para adicionar drivers de novo hardware ou serviços.

## Tecnologias
- TypeScript
- Node.js
- (Opcional) MQTT, HTTP, WebSocket
- (Opcional) Banco de dados leve (ex.: SQLite, JSON, ou outro configurável)

## Requisitos
- Node.js >= 16 (recomendado >= 18)
- npm ou yarn
- Broker MQTT ou serviço externo (dependendo da integração que você for usar)

## Instalação rápida
1. Clone o repositório:
   ```bash
   git clone https://github.com/alysson97/Design_Home_Automation.git
   cd Design_Home_Automation
   ```
2. Instale dependências:
   ```bash
   npm install
   # ou
   # yarn install
   ```
3. Copie o arquivo de exemplo de variáveis de ambiente e ajuste conforme necessário:
   ```bash
   cp .env.example .env
   # edite .env com as credenciais e URLs necessárias
   ```

## Scripts comuns
(Os nomes dos scripts abaixo são convencionais — adapte conforme o package.json do projeto.)
- Desenvolvimento (hot-reload):
  ```bash
  npm run dev
  ```
- Build (compilação TypeScript):
  ```bash
  npm run build
  ```
- Executar (produção):
  ```bash
  npm start
  ```
- Testes:
  ```bash
  npm test
  ```

## Configuração (exemplo .env)
Exemplo de variáveis que você pode precisar definir em `.env`:
```env
PORT=3000
MQTT_BROKER_URL=mqtt://broker.hivemq.com:1883
MQTT_USERNAME=
MQTT_PASSWORD=
DATABASE_URL=./data/db.sqlite
DEVICE_API_KEY=seu_token_aqui
```
Ajuste de acordo com as integrações que você utilizar.

## Uso (exemplos)
- Exemplo de chamada HTTP para listar dispositivos:
  ```bash
  curl http://localhost:3000/devices
  ```
- Exemplo de publicar comando via MQTT (para acender uma lâmpada):
  ```bash
  mosquitto_pub -h broker.hivemq.com -t "home/livingroom/light/1/set" -m '{"state":"ON"}'
  ```

Observação: os tópicos MQTT, endpoints HTTP e payloads dependem da implementação dos módulos de dispositivo no projeto.

## Estrutura sugerida do projeto
- src/ — código-fonte TypeScript
  - modules/ — módulos de integração (MQTT, HTTP, drivers)
  - controllers/ — lógica de orquestração e APIs
  - services/ — serviços de negócio (gerenciamento de dispositivos, regras)
  - config/ — carregamento de variáveis de ambiente e configurações
- tests/ — testes automatizados
- .env.example — exemplo de variáveis de ambiente

## Contribuição
Contribuições são bem-vindas! Algumas orientações:
1. Abra uma issue descrevendo a proposta antes de grandes mudanças.
2. Faça fork do repositório e crie uma branch com a sua feature/fix:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Adicione testes quando possível.
4. Envie um Pull Request com uma descrição clara das mudanças.

## Licença
Este projeto está disponível sob a licença MIT. Veja o arquivo LICENSE para detalhes.

## Contato
Mantenedor: [alysson97](https://github.com/alysson97)

Se quiser, posso gerar um arquivo `.env.example`, um template de configuração para um broker MQTT, exemplos de drivers para um dispositivo (ex.: lâmpada MQTT) ou um README em inglês. Diga qual dos itens você prefere em seguida.
