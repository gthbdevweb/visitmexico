import React from 'react';  
// import { Context } from '../../Context';
import Share from '../Share';
// import dataEs from '../../assets/data/blog/es/index.json';
// import dataEn from '../../assets/data/blog/en/index.json';
// import dataDe from '../../assets/data/blog/de/index.json';
// import dataFr from '../../assets/data/blog/fr/index.json';
// import dataJp from '../../assets/data/blog/jp/index.json';
// import dataPt from '../../assets/data/blog/pt/index.json';
// import dataCn from '../../assets/data/blog/cn/index.json';
import './style.css';

const Privacity = () => {
  // const { isLanguage } = useContext(Context);
  // const [language, setLanguage] = useState({});

  // useEffect(() => {
  //   isLanguage === 'MX' ? setLanguage(dataEs)
  //   : isLanguage === 'USA' ? setLanguage(dataEn)
  //   : isLanguage === 'DE' ? setLanguage(dataDe)
  //   : isLanguage === 'FR' ? setLanguage(dataFr)
  //   : isLanguage === 'JP' ? setLanguage(dataJp)
  //   : isLanguage === 'PT' ? setLanguage(dataPt)
  //   : isLanguage === 'CN' ? setLanguage(dataCn)
  //   : setLanguage(dataEs);
  // }, [isLanguage]);

  // const languageSort = language?.blogs?.sort(function(a, b){return b.id - a.id});

  // const listBlogs = () => (
  //   languageSort?.map((blog, index) => (
  //     <div className="privacity-item-ctn" key={index}>
  //       <img
  //         className="privacity-item-img"
  //         src={require(`../../assets/img/blog/${blog?.urlImg}`)}
  //         alt={blog?.title}
  //       />
  //       <h2 className="privacity-item-text-title">{blog?.title} </h2>
  //       {blog?.description?.map((item, index) => item.list
  //         ?
  //           <ul key={`list${index}`}>
  //             {item.list.map((li, index) => <li key={`li${index}`}>
  //               <h5 className="privacity-item-tex-subtitle">{li.title}</h5>
  //               {li.description.map((desc, index) => <p className="privacity-item-text-desc" key={`desc${index}`}>
  //                 {desc.text}
  //               </p>)}
  //             </li>)}
  //           </ul>
  //         : <p className="privacity-item-text-desc" key={item.text}>{item.text}</p>)
  //       }
  //       <Share 
  //         urlFaceboock = "https://visitmexico.com/aviso-de-privacidad/"
  //         urlPinterest = "https://visitmexico.com/aviso-de-privacidad/"
  //         urlTwitter = "https://visitmexico.com/aviso-de-privacidad/"
  //         urlWhatsapp = "https://visitmexico.com/aviso-de-privacidad/"
  //       />
  //     </div>
  //   ))
  // );

  return (
    <section className="privacity-ctn sliceLeft">
      {/* listBlogs() */}
      <div className="privacity-item-ctn">
        <h2 className="privacity-item-text-title">AVISO DE PRIVACIDAD</h2>
        <p className="privacity-item-text-desc"> Visit México es la página dedicada a la promoción y difusión de los destinos turísticos de México a nivel nacional e internacional, a cargo de la Secretaría de Turismo del Gobierno de México, con domicilio en Avenida Presidente Masaryk No. 172, Col. Polanco, CP 11580, Ciudad de México, que en cumplimiento a las disposiciones legales de Protección de Datos Personales, presenta el Aviso de Privacidad, mediante el cual se notifica el tratamiento que se dará a la información que proporcionen los usuarios a través de este sitio web.
        </p>
        <p className="privacity-item-text-desc">
          En garantía del correcto manejo de los datos e información recabada,
          Visit México se apega a lo establecido en la Ley General de Protección
          de Datos Personales en Posesión de Sujetos Obligados, particularmente
          en el Artículo 2, Fracción V de dicha ley:
        </p>
        <p className="privacity-item-text-desc">
          “Proteger los datos personales en posesión de cualquier autoridad,
          entidad, órgano y organismo de los Poderes Ejecutivo, Legislativo y
          Judicial, órganos autónomos, partidos políticos, fideicomisos y fondos
          públicos, de la Federación, las Entidades Federativas y los
          municipios, con la finalidad de regular su debido tratamiento”.
        </p>
        <p className="privacity-item-text-desc">
          Así como también observará lo previsto en la Ley Federal de Protección
          de Datos Personales en Posesión de los Particulares.
        </p>
        <p className="privacity-item-text-desc">
          Los detalles de ambas Leyes pueden consultarse a detalle en los
          siguientes enlaces:
        </p>
        <a className="privacity-item-link" href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf" target="_blank" rel="noopener noreferrer">
          https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf
        </a>
        <a className="privacity-item-link" href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf" target="_blank" rel="noopener noreferrer">
          https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf
        </a>
        <Share 
          urlFaceboock = "https://visitmexico.com/aviso-de-privacidad/"
          urlPinterest = "https://visitmexico.com/aviso-de-privacidad/"
          urlTwitter = "https://visitmexico.com/aviso-de-privacidad/"
          urlWhatsapp = "https://visitmexico.com/aviso-de-privacidad/"
        />
      </div>
    </section>
  )
};

export default Privacity;
