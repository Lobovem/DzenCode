import { FC, useEffect } from 'react';
import { SelectType } from '../Selects/SelectType';
import { SelectSpecification } from '../Selects/SelectSpecification';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { fetchProductList } from '../../store/api';
import { PopUp } from '../PopUp/PopUp';
import './ProductList.scss';
import { IProduct } from '../../types/types';
import { useAppDispatch } from '../../store/appDispatch';
import { Product } from '../Product/Product';

export const ProductList: FC = () => {
  const dispatch = useAppDispatch();
  const productList: IProduct[] = useSelector(
    (state: RootState) => state.dzenCode.productList
  );

  const isDelete: boolean = useSelector((state: RootState) => state.dzenCode.isDelete);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <>
      <div className="productList animation">
        <div className="productList__header">
          <p className="productList__headerTitle">Products / {productList.length}</p>

          <SelectType title="Type" />
          <SelectSpecification title="Specification" />
        </div>

        <div className="productList__listWrap">
          <div className="productList__list">
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
