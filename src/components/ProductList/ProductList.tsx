import { FC } from 'react';
import { SelectType } from '../Selects/SelectType';
import { SelectSpecification } from '../Selects/SelectSpecification';
import { Product } from '../Product/Product';
import './ProductList.scss';

export const ProductList: FC = () => {
  return (
    <div className="productList">
      <div className="productList__header">
        <p className="productList__headerTitle">Products / 25</p>

        <SelectType title="Type" />
        <SelectSpecification title="Specification" />
      </div>

      <div className="productList__list">
        <div className="productList__product ">
          <Product />
        </div>
      </div>
    </div>
  );
};
