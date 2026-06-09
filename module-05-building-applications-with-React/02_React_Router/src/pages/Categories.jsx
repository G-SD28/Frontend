import { useParams } from 'react-router';
import { translations } from '../data/translations';

const Categories = () => {
  const { lang } = useParams();
  console.log(lang);

  const defaultContent = {
    title: 'Categories',
    items: ['Electronics', 'Books', 'Clothing'],
  };

  const content = lang
    ? (translations[lang] ?? { title: 'Unknown Language', items: [] })
    : defaultContent;

  return (
    <div>
      <h2>{content.title}</h2>
      <ul>
        {content.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
