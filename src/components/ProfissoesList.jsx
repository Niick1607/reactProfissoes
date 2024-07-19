import React, { useState, useRef } from 'react';
import star from '../assets/star.png'
import ProfissoesFavoritas from './Favoritos';

function ProfissoesList() {
    const [profissoes, setProfissoes] = useState([
        // Saúde
        { profissao: 'Médico', descricao: 'Profissional que diagnostica e trata doenças.', fav: false },
        { profissao: 'Enfermeiro', descricao: 'Profissional que cuida de pacientes em hospitais e clínicas.', fav: false },
        { profissao: 'Dentista', descricao: 'Profissional que cuida da saúde bucal.', fav: false },
        { profissao: 'Fisioterapeuta', descricao: 'Profissional que ajuda na recuperação física de pacientes.', fav: false },
        { profissao: 'Psicólogo', descricao: 'Profissional que estuda e trata o comportamento humano.', fav: false },
        { profissao: 'Nutricionista', descricao: 'Profissional que orienta sobre alimentação saudável.', fav: false },
        { profissao: 'Farmacêutico', descricao: 'Profissional que prepara e dispensa medicamentos.', fav: false },
        { profissao: 'Fonoaudiólogo', descricao: 'Profissional que trata problemas de fala e audição.', fav: false },
        { profissao: 'Terapeuta Ocupacional', descricao: 'Profissional que ajuda pacientes a desenvolver habilidades para a vida diária.', fav: false },
        { profissao: 'Veterinário', descricao: 'Profissional que cuida da saúde de animais.', fav: false },

        // Engenharia
        { profissao: 'Engenheiro Civil', descricao: 'Profissional que projeta e supervisiona construções.', fav: false },
        { profissao: 'Engenheiro Mecânico', descricao: 'Profissional que projeta e mantém sistemas mecânicos.', fav: false },
        { profissao: 'Engenheiro Elétrico', descricao: 'Profissional que trabalha com sistemas elétricos.', fav: false },
        { profissao: 'Engenheiro de Software', descricao: 'Profissional que desenvolve programas de computador.', fav: false },
        { profissao: 'Engenheiro Químico', descricao: 'Profissional que trabalha com processos químicos industriais.', fav: false },
        { profissao: 'Engenheiro de Produção', descricao: 'Profissional que otimiza processos produtivos.', fav: false },
        { profissao: 'Engenheiro Ambiental', descricao: 'Profissional que trabalha com a proteção do meio ambiente.', fav: false },
        { profissao: 'Engenheiro de Alimentos', descricao: 'Profissional que desenvolve e controla a produção de alimentos.', fav: false },
        { profissao: 'Engenheiro de Materiais', descricao: 'Profissional que desenvolve novos materiais.', fav: false },
        { profissao: 'Engenheiro de Petróleo', descricao: 'Profissional que trabalha com a extração de petróleo.', fav: false },

        // Tecnologia da Informação
        { profissao: 'Desenvolvedor de Software', descricao: 'Profissional que cria programas de computador.', fav: false },
        { profissao: 'Analista de Sistemas', descricao: 'Profissional que projeta e implementa sistemas de informação.', fav: false },
        { profissao: 'Administrador de Redes', descricao: 'Profissional que gerencia redes de computadores.', fav: false },
        { profissao: 'Especialista em Segurança da Informação', descricao: 'Profissional que protege dados e sistemas.', fav: false },
        { profissao: 'Cientista de Dados', descricao: 'Profissional que analisa grandes volumes de dados.', fav: false },
        { profissao: 'Gerente de Projetos de TI', descricao: 'Profissional que coordena projetos na área de TI.', fav: false },
        { profissao: 'Arquiteto de Software', descricao: 'Profissional que define a estrutura de sistemas de software.', fav: false },
        { profissao: 'Desenvolvedor Web', descricao: 'Profissional que cria e mantém websites.', fav: false },
        { profissao: 'Desenvolvedor de Jogos', descricao: 'Profissional que cria jogos eletrônicos.', fav: false },
        { profissao: 'Administrador de Banco de Dados', descricao: 'Profissional que gerencia bancos de dados.', fav: false },

        // Direito
        { profissao: 'Advogado', descricao: 'Profissional que defende clientes em questões legais.', fav: false },
        { profissao: 'Juiz', descricao: 'Profissional que julga casos em tribunais.', fav: false },
        { profissao: 'Promotor de Justiça', descricao: 'Profissional que representa o estado em processos criminais.', fav: false },
        { profissao: 'Defensor Público', descricao: 'Profissional que defende pessoas sem condições de pagar por um advogado.', fav: false },
        { profissao: 'Escrivão', descricao: 'Profissional que auxilia na documentação de processos judiciais.', fav: false },
        { profissao: 'Tabelião', descricao: 'Profissional que autentica documentos e contratos.', fav: false },
        { profissao: 'Procurador', descricao: 'Profissional que representa legalmente o governo.', fav: false },
        { profissao: 'Notário', descricao: 'Profissional que realiza atos jurídicos públicos.', fav: false },
        { profissao: 'Mediador', descricao: 'Profissional que auxilia na resolução de conflitos.', fav: false },
        { profissao: 'Arbitro', descricao: 'Profissional que decide questões fora do judiciário.', fav: false },

        // Educação
        { profissao: 'Professor de Ensino Fundamental', descricao: 'Profissional que ensina crianças no ensino fundamental.', fav: false },
        { profissao: 'Professor de Ensino Médio', descricao: 'Profissional que ensina adolescentes no ensino médio.', fav: false },
        { profissao: 'Professor Universitário', descricao: 'Profissional que ensina em instituições de ensino superior.', fav: false },
        { profissao: 'Pedagogo', descricao: 'Profissional que atua na gestão e planejamento educacional.', fav: false },
        { profissao: 'Orientador Educacional', descricao: 'Profissional que orienta alunos no desenvolvimento acadêmico e pessoal.', fav: false },
        { profissao: 'Coordenador Pedagógico', descricao: 'Profissional que coordena atividades pedagógicas em instituições de ensino.', fav: false },
        { profissao: 'Diretor Escolar', descricao: 'Profissional que administra instituições de ensino.', fav: false },
        { profissao: 'Bibliotecário', descricao: 'Profissional que organiza e gerencia bibliotecas.', fav: false },
        { profissao: 'Instrutor de Idiomas', descricao: 'Profissional que ensina línguas estrangeiras.', fav: false },
        { profissao: 'Instrutor de Cursos Profissionalizantes', descricao: 'Profissional que ministra cursos técnicos e profissionalizantes.', fav: false },

        // Comunicação
        { profissao: 'Jornalista', descricao: 'Profissional que reporta notícias e informações.', fav: false },
        { profissao: 'Relações Públicas', descricao: 'Profissional que gerencia a imagem pública de indivíduos e organizações.', fav: false },
        { profissao: 'Publicitário', descricao: 'Profissional que cria e implementa campanhas publicitárias.', fav: false },
        { profissao: 'Redator', descricao: 'Profissional que escreve textos para diversos meios.', fav: false },
        { profissao: 'Editor', descricao: 'Profissional que revisa e organiza conteúdos escritos.', fav: false },
        { profissao: 'Fotógrafo', descricao: 'Profissional que captura imagens.', fav: false },
        { profissao: 'Cinegrafista', descricao: 'Profissional que grava imagens em movimento.', fav: false },
        { profissao: 'Designer Gráfico', descricao: 'Profissional que cria elementos visuais.', fav: false },
        { profissao: 'Social Media', descricao: 'Profissional que gerencia redes sociais.', fav: false },
        { profissao: 'Produtor de Conteúdo', descricao: 'Profissional que cria materiais informativos e de entretenimento.', fav: false },

        // Artes
        { profissao: 'Artista Plástico', descricao: 'Profissional que cria obras de arte.', fav: false },
        { profissao: 'Músico', descricao: 'Profissional que compõe e executa música.', fav: false },
        { profissao: 'Ator', descricao: 'Profissional que interpreta personagens.', fav: false },
        { profissao: 'Diretor de Cinema', descricao: 'Profissional que dirige filmes.', fav: false },
        { profissao: 'Roteirista', descricao: 'Profissional que escreve roteiros.', fav: false },
        { profissao: 'Cenógrafo', descricao: 'Profissional que projeta cenários.', fav: false },
        { profissao: 'Coreógrafo', descricao: 'Profissional que cria coreografias de dança.', fav: false },
        { profissao: 'Bailarino', descricao: 'Profissional que dança em apresentações.', fav: false },
        { profissao: 'Maestro', descricao: 'Profissional que dirige orquestras.', fav: false },
        { profissao: 'Curador de Arte', descricao: 'Profissional que organiza exposições de arte.', fav: false },

        // Ciências
        { profissao: 'Biólogo', descricao: 'Profissional que estuda os seres vivos.', fav: false },
        { profissao: 'Químico', descricao: 'Profissional que estuda substâncias químicas.', fav: false },
        { profissao: 'Físico', descricao: 'Profissional que estuda as leis da natureza.', fav: false },
        { profissao: 'Geólogo', descricao: 'Profissional que estuda a composição da Terra.', fav: false },
        { profissao: 'Astrônomo', descricao: 'Profissional que estuda os corpos celestes.', fav: false },
        { profissao: 'Meteorologista', descricao: 'Profissional que estuda o clima e o tempo.', fav: false },
        { profissao: 'Ecologista', descricao: 'Profissional que estuda os ecossistemas.', fav: false },
        { profissao: 'Botânico', descricao: 'Profissional que estuda as plantas.', fav: false },
        { profissao: 'Geneticista', descricao: 'Profissional que estuda a genética.', fav: false },
        { profissao: 'Oceanógrafo', descricao: 'Profissional que estuda os oceanos.', fav: false },

        // Administração e Negócios
        { profissao: 'Administrador', descricao: 'Profissional que gerencia empresas e organizações.', fav: false },
        { profissao: 'Contador', descricao: 'Profissional que cuida das finanças de empresas e indivíduos.', fav: false },
        { profissao: 'Economista', descricao: 'Profissional que estuda a economia e suas tendências.', fav: false },
        { profissao: 'Gerente de Recursos Humanos', descricao: 'Profissional que gerencia pessoas em organizações.', fav: false },
        { profissao: 'Analista Financeiro', descricao: 'Profissional que analisa e planeja finanças.', fav: false },
        { profissao: 'Consultor de Negócios', descricao: 'Profissional que aconselha empresas em suas operações.', fav: false },
        { profissao: 'Empreendedor', descricao: 'Profissional que inicia e gerencia novos negócios.', fav: false },
        { profissao: 'Gestor de Projetos', descricao: 'Profissional que coordena projetos em diversas áreas.', fav: false },
        { profissao: 'Especialista em Marketing', descricao: 'Profissional que desenvolve estratégias de mercado.', fav: false },
        { profissao: 'Auditor', descricao: 'Profissional que verifica a conformidade de operações financeiras.', fav: false },

        // Turismo e Hospitalidade
        { profissao: 'Guia Turístico', descricao: 'Profissional que guia visitantes em locais turísticos.', fav: false },
        { profissao: 'Agente de Viagens', descricao: 'Profissional que organiza viagens para clientes.', fav: false },
        { profissao: 'Recepcionista de Hotel', descricao: 'Profissional que atende hóspedes em hotéis.', fav: false },
        { profissao: 'Gerente de Hotel', descricao: 'Profissional que administra hotéis.', fav: false },
        { profissao: 'Chef de Cozinha', descricao: 'Profissional que prepara alimentos e gerencia cozinhas.', fav: false },
        { profissao: 'Maitre', descricao: 'Profissional que coordena o serviço de salão em restaurantes.', fav: false },
        { profissao: 'Sommelier', descricao: 'Profissional especializado em vinhos.', fav: false },
        { profissao: 'Bartender', descricao: 'Profissional que prepara e serve bebidas.', fav: false },
        { profissao: 'Organizador de Eventos', descricao: 'Profissional que planeja e executa eventos.', fav: false },
        { profissao: 'Camarero', descricao: 'Profissional que atende clientes em restaurantes.', fav: false },

        // Construção e Arquitetura
        { profissao: 'Arquiteto', descricao: 'Profissional que projeta edifícios e espaços.', fav: false },
        { profissao: 'Engenheiro Civil', descricao: 'Profissional que projeta e supervisiona construções.', fav: false },
        { profissao: 'Mestre de Obras', descricao: 'Profissional que coordena a execução de obras.', fav: false },
        { profissao: 'Pedreiro', descricao: 'Profissional que realiza construções e reformas.', fav: false },
        { profissao: 'Carpinteiro', descricao: 'Profissional que trabalha com madeira na construção.', fav: false },
        { profissao: 'Eletricista', descricao: 'Profissional que instala e mantém sistemas elétricos.', fav: false },
        { profissao: 'Encanador', descricao: 'Profissional que instala e repara sistemas de encanamento.', fav: false },
        { profissao: 'Pintor de Construção', descricao: 'Profissional que pinta edifícios.', fav: false },
        { profissao: 'Topógrafo', descricao: 'Profissional que realiza levantamentos topográficos.', fav: false },
        { profissao: 'Desenhista Técnico', descricao: 'Profissional que cria desenhos técnicos para construção.', fav: false },

        // Transporte e Logística
        { profissao: 'Motorista', descricao: 'Profissional que dirige veículos.', fav: false },
        { profissao: 'Piloto de Avião', descricao: 'Profissional que pilota aeronaves.', fav: false },
        { profissao: 'Comissário de Bordo', descricao: 'Profissional que atende passageiros em voos.', fav: false },
        { profissao: 'Marinheiro', descricao: 'Profissional que trabalha em embarcações.', fav: false },
        { profissao: 'Mecânico de Veículos', descricao: 'Profissional que repara e mantém veículos.', fav: false },
        { profissao: 'Logístico', descricao: 'Profissional que gerencia o transporte e armazenamento de mercadorias.', fav: false },
        { profissao: 'Controlador de Tráfego Aéreo', descricao: 'Profissional que coordena o tráfego de aeronaves.', fav: false },
        { profissao: 'Operador de Empilhadeira', descricao: 'Profissional que opera empilhadeiras.', fav: false },
        { profissao: 'Despachante Aduaneiro', descricao: 'Profissional que auxilia na importação e exportação de mercadorias.', fav: false },
        { profissao: 'Gerente de Frota', descricao: 'Profissional que gerencia frotas de veículos.', fav: false },

        // Agricultura e Meio Ambiente
        { profissao: 'Agrônomo', descricao: 'Profissional que trabalha com a produção agrícola.', fav: false },
        { profissao: 'Veterinário', descricao: 'Profissional que cuida da saúde de animais.', fav: false },
        { profissao: 'Zootecnista', descricao: 'Profissional que trabalha com a criação de animais.', fav: false },
        { profissao: 'Engenheiro Florestal', descricao: 'Profissional que trabalha com a gestão de florestas.', fav: false },
        { profissao: 'Pesquisador Ambiental', descricao: 'Profissional que estuda e preserva o meio ambiente.', fav: false },
        { profissao: 'Geógrafo', descricao: 'Profissional que estuda o espaço geográfico.', fav: false },
        { profissao: 'Técnico Agrícola', descricao: 'Profissional que presta assistência técnica em atividades agrícolas.', fav: false },
        { profissao: 'Apicultor', descricao: 'Profissional que trabalha com a criação de abelhas.', fav: false },
        { profissao: 'Silvicultor', descricao: 'Profissional que trabalha com o cultivo de florestas.', fav: false },
        { profissao: 'Horticultor', descricao: 'Profissional que cultiva plantas e flores.', fav: false }
    ]);
    const [favoritos, setFavoritos] = useState([]);
    const [novaProfissao, setNovaProfissao] = useState({ profissao: '', descricao: '' });
    const imgRefs = useRef([]);

    const toggleFavorite = (index) => {
        const newProfissoes = [...profissoes];
        newProfissoes[index].fav = !newProfissoes[index].fav;
        setProfissoes(newProfissoes);

        if (newProfissoes[index].fav) {
            setFavoritos([...favoritos, newProfissoes[index].profissao]);
        } else {
            setFavoritos(favoritos.filter(profissao => profissao !== newProfissoes[index].profissao));
        }

        if (imgRefs.current[index]) {
            imgRefs.current[index].style.filter = newProfissoes[index].fav ? 'grayscale(0)' : 'grayscale(1)';
        }
    };

    const handleAddProfissao = () => {
        setProfissoes([...profissoes, { ...novaProfissao, fav: false }]);
        setNovaProfissao({ profissao: '', descricao: '' });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovaProfissao(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <section className="table-container">
            <h1>Lista de profissões</h1>
            <div className='text'>
                <p>
                    Escolher uma profissão é uma decisão importante que pode influenciar muitos aspectos da sua vida. É essencial considerar seus interesses, habilidades e valores ao explorar diferentes opções de carreira. Pesquisar sobre as diversas profissões disponíveis, entender o mercado de trabalho e refletir sobre o que realmente lhe traz satisfação pode ajudar a tomar uma decisão mais informada e consciente.

                    Na nossa aplicação, você encontrará uma lista diversificada de profissões, cada uma com uma breve descrição para ajudá-lo a entender melhor cada campo de atuação. Ao explorar a lista, você pode marcar como favoritas as profissões que mais despertam seu interesse. Isso facilitará o processo de comparação e ajudará a manter suas opções preferidas sempre à mão.

                    Navegue pela lista e descubra as profissões que mais lhe interessam. Clique no ícone de estrela ao lado de cada profissão para favoritar aquelas que você considera mais atrativas. Boa sorte na sua jornada de descoberta profissional!

                    Para ver a lista completa e favoritar as profissões de seu interesse, explore nossa aplicação abaixo;)


                </p>
            </div>
            <ProfissoesFavoritas favoritos={favoritos} />
            <h2>Adicionar Profissões:</h2>
            <div className="form">
            <input 
                    type="text" 
                    name="profissao" 
                    placeholder="Nova profissão" 
                    value={novaProfissao.profissao} 
                    onChange={handleInputChange} 
                />
                <input 
                    type="text" 
                    name="descricao" 
                    placeholder="Descrição da profissão" 
                    value={novaProfissao.descricao} 
                    onChange={handleInputChange} 
                />
                <button onClick={handleAddProfissao}>Adicionar Profissão</button>
            </div>
            <h1>Lista de Profissões:</h1>
            <ul className="table">
                <li className="table-header">
                    <span>Profissões</span>
                    <span>Descrição</span>
                    <span>Favorito</span>
                </li>
                {profissoes.map((profissao, index) => (
                    <li className="table-item" key={profissao.profissao}>
                        <span>{profissao.profissao}</span>
                        <span>{profissao.descricao}</span>
                        <span>
                            <button onClick={() => toggleFavorite(index)}>
                                <img
                                    src={star}
                                    alt="Star icon"
                                    style={{ filter: `grayscale(${profissao.fav ? 0 : 1})` }}
                                    ref={(el) => (imgRefs.current[index] = el)}
                                />
                            </button>
                        </span>
                    </li>
                ))}
            </ul>

        </section>
    );
}

export default ProfissoesList;