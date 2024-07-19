# README

## Aplicação de Lista de Profissões

### Arquivos React Principais do Projeto

- **app.js**
- **ProfissoesList.jsx**
- **Favoritos.jsx**

### `app.js`

- Ponto de entrada da aplicação.
- **Função Principal**: Renderiza o componente `ProfissoesList`.

### `ProfissoesList.jsx`

- Gerencia a lista de profissões.
- **Estados**:
  - `profissoes`: Array de objetos representando cada profissão.
  - `favoritos`: Array de strings contendo profissões marcadas como favoritas.
  - `novaProfissao`: Objeto que armazena a nova profissão a ser adicionada.
- **Funções**:
  - `toggleFavorite(index)`: Alterna o estado favorito de uma profissão e atualiza a lista de favoritos.
  - `handleAddProfissao()`: Adiciona uma nova profissão à lista.
  - `handleInputChange(e)`: Atualiza o estado `novaProfissao` conforme o usuário digita nos campos de input.
- **Renderização**:
  - Lista de profissões com botões para marcar/desmarcar como favorita.
  - Formulário para adicionar novas profissões.
  - Componente `ProfissoesFavoritas` para exibir a lista de profissões favoritas.

### `Favoritos.jsx`

- Exibe a lista de profissões favoritas.
- **Props**:
  - `favoritos`: Array de profissões marcadas como favoritas.
- **Renderização**: Lista simples de profissões favoritas.

### Hooks Utilizados

#### `useState`

- `useState` é um hook que permite adicionar estado a componentes funcionais. Ele retorna um array contendo dois elementos: o estado atual e uma função para atualizá-lo.
- **Uso na Aplicação**:
  - `const [profissoes, setProfissoes] = useState([...])`: Gerencia a lista de profissões.
  - `const [favoritos, setFavoritos] = useState([])`: Gerencia a lista de profissões favoritas.
  - `const [novaProfissao, setNovaProfissao] = useState({ profissao: '', descricao: '' })`: Gerencia a nova profissão a ser adicionada.

#### `useRef`

- `useRef` é um hook que retorna um objeto mutável que persiste durante todo o ciclo de vida do componente. Ele é usado principalmente para acessar elementos DOM diretamente.
- **Uso na Aplicação**:
  - `const imgRefs = useRef([])`: Armazena referências aos elementos de imagem para aplicar estilos dinâmicos (como a escala de cinza) ao favoritar/desfavoritar profissões.
