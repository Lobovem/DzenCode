import { FC, useEffect } from 'react';
import { SelectType } from '../Selects/SelectType';
import { SelectSpecification } from '../Selects/SelectSpecification';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { fetchProductList, fetchproductListBySelect } from '../../store/api';
import { PopUp } from '../PopUp/PopUp';
import './ProductList.scss';
import { IProduct } from '../../types/types';
import { useAppDispatch } from '../../store/appDispatch';
import { Product } from '../Product/Product';

export const ProductList: FC = () => {
  const dispatch = useAppDispatch();
  const productList = useSelector((state: RootState) => state.dzenCode.productList);
  const deleteProduct = useSelector((state: RootState) => state.dzenCode.deleteProduct);
  const isDelete = useSelector((state: RootState) => state.dzenCode.isDelete);
  const isLoading = useSelector((state: RootState) => state.dzenCode.isLoading);
  const error = useSelector((state: RootState) => state.dzenCode.error);
  const dataSelect = useSelector((state: RootState) => state.dzenCode.dataSelect);
  console.log(productList);

  //TODO check out three fetch productList and two selects
  useEffect(() => {
    dispatch(fetchproductListBySelect(dataSelect));
  }, [dispatch, dataSelect]);

  // useEffect(() => {
  //   dispatch(fetchProductList());
  // }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

      {isDelete && <PopUp deleteItem={deleteProduct} />}
    </>
  );
};
