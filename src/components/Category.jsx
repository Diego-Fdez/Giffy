import { Link } from 'wouter';
import '../styles/Category.css';

const Category = ({ name, options = [] }) => {
  return (
    <section>
      <h3 className='Category-title'>{name}</h3>
      <ul className='Category-list'>
        {options?.map((singleOption, index) => (
          <li key={singleOption} index={index} type='primary'>
            <Link className='Category-link' to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
