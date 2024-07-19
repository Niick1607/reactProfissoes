function ProfissoesFavoritas({ favoritos }) {
    return (
        <div>
            <section className="table-container">
            <h1>♡ Profissões Favoritas ♡</h1>
            <ul className="table-fav">
                {favoritos.map((profissao, index) => (
                    <li className="table-fav-item" key={index}>
                        <span>{profissao}</span>
                    </li>
                ))}
            </ul>
            </section>
        </div>
    );
}

export default ProfissoesFavoritas;
