import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Card } from 'components';
import { CatalogView } from 'components/buttons/button-catalog-view/button-catalog-view.types';
import { useAppSelector } from 'hooks';
import { ContextMainPage } from 'pages';
import { catalogSelector } from 'store/selectors';

import './catalog.scss';

export const Catalog: FC = () => {
  const { category } = useParams();
  const { catalogView, catalogData } = useAppSelector(catalogSelector);
  const { inputSearchValue } = useContext(ContextMainPage);

  const sectionClass = classNames({
    catalog: catalogView === CatalogView.Grid,
    catalog_list: catalogView !== CatalogView.Grid,
  });

  return (
    <section className={sectionClass}>
      {(!catalogData || catalogData.length <= 0) && (
        <h3 className='h3' data-test-id={`${inputSearchValue ? 'search-result-not-found' : 'empty-category'}`}>{`${
          inputSearchValue ? 'По запросу ничего не найдено' : 'В этой категории книг ещё нет'
        }`}</h3>
      )}
      {catalogData &&
        catalogData.length > 0 &&
        catalogData.map((element) => (
          <Card key={element.id} catalogView={catalogView} currentCategory={category} {...element} />
        ))}
    </section>
  );
};
