import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import Share from '../Share';
import dataEs from '../../assets/data/blog/es/index.json';
import dataEn from '../../assets/data/blog/en/index.json';
import dataDe from '../../assets/data/blog/de/index.json';
import dataFr from '../../assets/data/blog/fr/index.json';
import dataJp from '../../assets/data/blog/jp/index.json';
import dataPt from '../../assets/data/blog/pt/index.json';
import dataCn from '../../assets/data/blog/cn/index.json';
import './style.css';

const Blog = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'DE' ? setLanguage(dataDe)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : isLanguage === 'PT' ? setLanguage(dataPt)
    : isLanguage === 'CN' ? setLanguage(dataCn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  const languageSort = language?.blogs?.sort(function(a, b){return b.id - a.id});

  const listBlogs = () => (
    languageSort?.map((blog, index) => (
      <div className="blog-item-ctn" key={index}>
        <img
          className="blog-item-img"
          src={require(`../../assets/img/blog/${blog?.urlImg}`)}
          alt={blog?.title}
        />
        <h2 className="blog-item-text-title">{blog?.title} </h2>
        {blog?.description?.map((item, index) => item.list
          ?
            <ul key={`list${index}`}>
              {item.list.map((li, index) => <li key={`li${index}`}>
                <h5 className="blog-item-tex-subtitle">{li.title}</h5>
                {li.description.map((desc, index) => <p className="blog-item-text-desc" key={`desc${index}`}>
                  {desc.text}
                </p>)}
              </li>)}
            </ul>
          : <p className="blog-item-text-desc" key={item.text}>{item.text}</p>)
        }
        <Share 
          urlFaceboock = "https://visitmexico.com/blog/"
          urlPinterest = "https://visitmexico.com/blog/"
          urlTwitter = "https://visitmexico.com/blog/"
          urlWhatsapp = "https://visitmexico.com/blog/"
        />
      </div>
    ))
  );

  return (
    <section className="blog-ctn sliceLeft">
      {listBlogs()}
    </section>
  )
};

export default Blog;
