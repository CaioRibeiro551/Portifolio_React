import './project.scss';
export function Projects() {
  return (
    <div className="container-projects">
      <div className="project-contents">
        <img id="project1" src="./pagar-me.png" alt="" />
        <h3>Pagar-me</h3>
        <p>
          Plataforma para gerenciamento de pagamentos e clientes inadimplentes
        </p>
        <div className="btn-project">
          <a href="">
            <p>Ver projeto</p>
          </a>
        </div>
      </div>
      <div className="project-contents">
        <img src="./Dindin.png" alt="" />
        <h3>Dindin</h3>
        <p>Gerenciador de finanças</p>
        <div className="btn-project">
          <a href="">
            <p>Ver projeto</p>
          </a>
        </div>
      </div>
      <div className="project-contents">
        <img src="./spiderman.png" alt="" />
        <h3>Spider-man | Multiverso</h3>
        <p>Nostalgia filmes Spider-man</p>
        <div className="btn-project">
          <a href="">
            <p>Ver projeto</p>
          </a>
        </div>
      </div>
    </div>
  );
}
