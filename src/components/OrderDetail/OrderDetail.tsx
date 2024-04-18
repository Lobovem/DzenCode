import { BtnClose } from '../BtnClose/BtnClose';
import { FC, memo, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { deleteProduct, fetchDetailOrder, fetchOrderList } from '../../store/api';
import { handleDetailOrder, handlePopUpOpen } from '../../store/slices';
import { ProductShort } from '../Product/ProductShort';
import { useAppDispatch } from '../../store/appDispatch';
import './OrderDetail.scss';
import { PopUp } from '../PopUp/PopUp';

type ParamsType = {
  id: string;
  title: string;
};

const OrderDetail: FC = () => {
  const { id, title } = useParams<ParamsType>();
  console.log(id, title);

  const dispatch = useAppDispatch();
  const orderDetail = useSelector((state: RootState) => state.dzenCode.detailOrder);

  const isLoading = useSelector((state: RootState) => state.dzenCode.isLoadingDetail);
  const deleteItem = useSelector((state: RootState) => state.dzenCode.deleteItem);
  const errorOrderDetail = useSelector(
    (state: RootState) => state.dzenCode.errorOrderDetail
  );

  const handleCloseDetailOrder = (): void => {
    dispatch(handleDetailOrder());
  };

  const handleDeleteProduct = (): void => {
    dispatch(deleteProduct(deleteItem.id));
    dispatch(fetchOrderList());
    dispatch(handleDetailOrder());
    dispatch(handlePopUpOpen());
  };

  useEffect(() => {
    dispatch(fetchDetailOrder(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorOrderDetail) {
    return <div>Error: {errorOrderDetail}</div>;
  }

  return (
    <>
      <div className="orderDetail animation">
        <Link to="/orders">
          <BtnClose onClick={handleCloseDetailOrder} />
        </Link>
        <h2 className="orderDetail__title">{title}</h2>

        <div>
          <a href="#" className="orderDetail__btnWrap">
            <p className="orderDetail__btnBox">+</p>
            <p className="orderDetail__btnTitle orderDetail__btnTitle_color">
              Add Product
            </p>
          </a>
        </div>

        <div className="orderDetail__productWrap">
          {orderDetail?.map((product) => (
            <ProductShort key={product.id} product={product} />
          ))}
        </div>
      </div>

      <PopUp onClick={handleDeleteProduct}></PopUp>
    </>
  );
};

export default memo(OrderDetail);
