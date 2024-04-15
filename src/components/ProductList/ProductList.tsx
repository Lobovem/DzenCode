import { FC, useEffect } from 'react';
import { SelectType } from '../Selects/SelectType';
import { SelectSpecification } from '../Selects/SelectSpecification';
import { IProduct, Product } from '../Product/Product';
import './ProductList.scss';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../store/api/api';

export const ProductList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector((state: RootState) => state.dzenCode.productList);

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  console.log('productList', productList);
  return (
    <div className="productList">
      <div className="productList__header">
        <p className="productList__headerTitle">Products / {productList.length}</p>

        <SelectType title="Type" />
        <SelectSpecification title="Specification" />
      </div>

      <div className="productList__list">
        <div className="productList__product ">
          {productList?.map((product: IProduct) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
