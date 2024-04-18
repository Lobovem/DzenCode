import { FC, useEffect } from 'react';
import { SelectType } from '../Selects/SelectType';
import { SelectSpecification } from '../Selects/SelectSpecification';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { fetchproductListBySelect } from '../../store/api';
import { IProduct } from '../../types/types';
import { useAppDispatch } from '../../store/appDispatch';
import { Product } from '../Product/Product';
import './ProductList.scss';

export const ProductList: FC = () => {
  const dispatch = useAppDispatch();
  const productList = useSelector((state: RootState) => state.dzenCode.productList);
  const dataSelect = useSelector((state: RootState) => state.dzenCode.dataSelect);
  const isLoading = useSelector((state: RootState) => state.dzenCode.isLoadingProduct);
  const errorProductList = useSelector(
    (state: RootState) => state.dzenCode.errorProductList
  );

  useEffect(() => {
    dispatch(fetchproductListBySelect(dataSelect));
  }, [dispatch, dataSelect]);

  if (errorProductList) {
    return <div>Error: {errorProductList}</div>;
  }

  return (
    <>
      <div className="productList animation">
        <div className="productList__header">
          <p className="productList__headerTitle">Products / {productList.length}</p>

          <SelectType title="Type" />
          <SelectSpecification title="Specification" />
        </div>

        {isLoading ? (
          <p>loading</p>
        ) : (
          <div className="productList__listWrap">
            <div className="productList__list">
              {productList?.map((product: IProduct) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
