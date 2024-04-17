import { FC, useEffect } from 'react';
import { SelectType } from '../Selects/SelectType';
import { SelectSpecification } from '../Selects/SelectSpecification';
import { IProduct, Product } from '../Product/Product';
import './ProductList.scss';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../store/api';
import { PopUp } from '../PopUp/PopUp';

export const ProductList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productList: IProduct[] = useSelector(
    (state: RootState) => state.dzenCode.productList
  );

  const isDelete: boolean = useSelector((state: RootState) => state.dzenCode.isDelete);

  useEffect(() => {
    dispatch(fetchProductList());
    // dispatch(deleteProduct('1'));
  }, [dispatch]);

  console.log('productList', productList);

  return (
    <>
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

      {isDelete && <PopUp />}
    </>
  );
};
