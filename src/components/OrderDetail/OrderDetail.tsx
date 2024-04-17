import { BtnClose } from '../BtnClose/BtnClose';
import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchDetailOrder } from '../../store/api';
import { isDetailOrder } from '../../store/slices';
import { PopUp } from '../PopUp/PopUp';
import { ProductShort } from '../Product/ProductShort';
import { IProduct } from '../../types/types';
import './OrderDetail.scss';
import { useAppDispatch } from '../../store/appDispatch';

type ParamsType = {
  id: string;
  title: string;
};

export const OrderDetail: FC = () => {
  const { id, title } = useParams<ParamsType>();
  const dispatch = useAppDispatch();

  const isDelete: boolean = useSelector((state: RootState) => state.dzenCode.isDelete);

  const orderDetail: IProduct[] = useSelector(
    (state: RootState) => state.dzenCode.detailOrder
  );

  const handleCloseDetailOrder = (): void => {
    dispatch(isDetailOrder());
  };

  useEffect(() => {
    dispatch(fetchDetailOrder(id));
  }, [dispatch, id]);

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

      {isDelete && <PopUp />}
    </>
  );
};
