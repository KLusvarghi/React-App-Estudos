import React from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
import Head from './Head';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduto (url) {
      const response = await fetch(url);
      const json = await response.json();
      setProdutos(json);
      console.log(produtos)
      console.log(produtos)
    };
    fetchProduto('https://ranekapi.origamid.dev/json/api/produto');
  }, []); // passando uma array vazia por que quero que ele faça apenas o fetch inical

  if (produtos === null) return null;
  return (
    <>
      <Head title="Produtos" description="Página de produtos" />
      <section className={`${styles.produtos} animeLeft`}>
        {produtos.map((prod) => (
          <Link to={`prod/${prod.id}`} key={prod.id}> {/* Passando o prod, e depois passando o produto especifico baseado no 'id' dele */}

            {/* Porem enquanto não definir uma rota para ele, não terá nada dentro */}
            
            <img src={prod.fotos[0].src} alt={prod.fotos[0].titulo} />
            <h1 className={styles.nome}>{prod.nome}</h1>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Produtos;
