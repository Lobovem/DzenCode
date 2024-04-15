import { Image } from 'react-bootstrap';
import { BtnClose } from '../BtnClose/BtnClose';
import imgMonitor from '../../assets/monitor.png';
import './OrderDetail.scss';
import { FC, useEffect } from 'react';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchDetailOrder } from '../../store/api/api';

export const OrderDetail: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const orderDetail = useSelector((state: RootState) => state.dzenCode.detailOrder);

  console.log('orderDetail', orderDetail);

  useEffect(() => {
    dispatch(fetchDetailOrder(id));
  }, []);

  return (
    <div className="orderDetail">
      <BtnClose />
      <p className="orderDetail__title">
        Long long title name very long order long title name very long order
      </p>

      <div>
        <a href="#" className="orderDetail__btnWrap">
          <p className="orderDetail__btnBox">+</p>
          <p className="orderDetail__btnTitle orderDetail__btnTitle_color">Add Product</p>
        </a>
      </div>

      <div className="product">
        <div className="product__status product__status_sm"></div>
        <Image className="product__img" src={imgMonitor} />

        <div className="product__titleWrap">
          <p className="product__title">
            Samsung 49-inch Odyssey G9 Curved Gaming Monitor
          </p>
          <p className="product__titleDesc">SN- 9876543210</p>
        </div>

        <p className="product__status">Free</p>

        <div className="product__btnTrushWrap">
          <BtnTrush />
        </div>
      </div>
    </div>
  );
};
