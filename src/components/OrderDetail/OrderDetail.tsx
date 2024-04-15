import { Image } from 'react-bootstrap';
import { BtnClose } from '../BtnClose/BtnClose';
import imgMonitor from '../../assets/monitor.png';
import './OrderDetail.scss';
import { FC, useEffect } from 'react';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchDetailOrder } from '../../store/api/api';
import { IProduct } from '../Product/Product';
import { isDetailOrder } from '../../store/slices';

export const OrderDetail: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseDetailOrder = (): void => {
    dispatch(isDetailOrder());
  };

  useEffect(() => {
    dispatch(fetchDetailOrder(id));
  }, [id]);

  const orderDetail: IProduct[] = useSelector(
    (state: RootState) => state.dzenCode.detailOrder
  );

  return (
    <div className="orderDetail">
      <Link to="/orders">
        <BtnClose onClick={handleCloseDetailOrder} />
      </Link>
      <p className="orderDetail__title">
        Long long title name very long order long title name very long order
      </p>

      <div>
        <a href="#" className="orderDetail__btnWrap">
          <p className="orderDetail__btnBox">+</p>
          <p className="orderDetail__btnTitle orderDetail__btnTitle_color">Add Product</p>
        </a>
      </div>

      {orderDetail?.map((product) => (
        <div key={product.id} className="product">
          <div
            className={
              product.isNew
                ? 'product__status product__status_smActive '
                : 'product__status product__status_sm'
            }
          ></div>

          <Image className="product__img" src={imgMonitor} />

          <div className="product__titleWrap">
            <p className="product__title">{product.title}</p>
            <p className="product__titleDesc">{product.serialNumber}</p>
          </div>

          {product.isNew ? (
            <p className="product__status product__status_active">Free</p>
          ) : (
            <p className="product__status">Work</p>
          )}

          <div className="product__btnTrushWrap">
            <BtnTrush />
          </div>
        </div>
      ))}
    </div>
  );
};
