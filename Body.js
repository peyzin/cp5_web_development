import './Body.css'
import {FaUser} from 'react-icons/fa'

function Body() {
  return (
    <div className='funcionalidades'>
      <h2>Depoimentos dos nossos usuários</h2>

      <section className="container">

        <div className="fernando">
          <div className="icon">
            <FaUser />
          </div>
          <h3>Fernando Souza</h3>
          <span>Muito bom para os finais de semana, quando não quero cozinhar. Nota 10!</span>
        </div>

        <div className="cristina">
          <div className="icon">
          <FaUser />
          </div>
          <h3>Cristina Soares</h3>
          <span>sempre peço meu almoço no trabalho para sempre ter uma refeição bem fresca. 5 Estrelas.</span>
        </div>

        <div className="murilo">
          <div className="icon">
          <FaUser />
          </div>
          <h3>Murilo Alvo</h3>
          <span>Adoro pedir meu almoço pelo GourmetOn!</span>
        </div>

        <div className="pelicano">
          <div className="icon">
          <FaUser />
          </div>
          <h3>Gabriel Pelicano</h3>
          <span>Interface amigável e fácil de usar. O único momento que fico perdido é na hora de escolher no meio de tantas opções. hahaha.</span>
        </div>

        <div className="pelle">
          <div className="icon">
          <FaUser />
          </div>
          <h3>Pedro Pelle</h3>
          <span>Muitas opções de comidas! Queria ter conhecido esse aplicativo antes!</span>
        </div>

        <div className="rafael">
          <div className="icon">
          <FaUser />
          </div>
          <h3>Rafael Oytein</h3>
          <span>Me apaixonei desde a primeira experiência. Adoro comprar comida de tudo que é cultura.</span>
        </div>

      </section>

      <section id="funcionalidades">
        <h2>Funcionalidades</h2>
      </section>

      <section className="container">

        <div className="card">
          <h3>Vasta busca por diversos tipos de comidas</h3>
        </div>

        <div className="card">
          <h3>Receitas de qualidade</h3>
        </div>

        <div className="card">
          <h3>Filtro de busca detalhada</h3>
        </div>

        <div className="card">
          <h3>Interface intuitiva</h3>
        </div>

      </section>
    </div>
  );
}

export default Body;