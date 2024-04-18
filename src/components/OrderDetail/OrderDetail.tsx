import { BtnClose } from '../BtnClose/BtnClose';
import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { handleDetailOrder } from '../../store/slices';
import { ProductShort } from '../Product/ProductShort';
import { useAppDispatch } from '../../store/appDispatch';
import './OrderDetail.scss';
import { fetchDetailOrder } from '../../store/api';

type ParamsType = {
  id: string;
  title: string;
};

const OrderDetail: FC = () => {
  const { id, title } = useParams<ParamsType>();
  console.log('id', id, 'title', title);

  const dispatch = useAppDispatch();
  const orderDetail = useSelector((state: RootState) => state.dzenCode.detailOrder);
  console.log('orderDetail', orderDetail);

  const isLoading = useSelector((state: RootState) => state.dzenCode.isLoadingDetail);
  const deleteItem = useSelector((state: RootState) => state.dzenCode.deleteItem);
  const errorOrderDetail = useSelector(
    (state: RootState) => state.dzenCode.errorOrderDetail
  );

  console.log('deleteItem===>', deleteItem?.id);

  const handleCloseDetailOrder = (): void => {
    dispatch(handleDetailOrder());
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
    </>
  );
};

export default OrderDetail;
