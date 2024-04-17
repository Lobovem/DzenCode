import { Image } from 'react-bootstrap';
import { BtnClose } from '../BtnClose/BtnClose';
import imgMonitor from '../../assets/monitor.png';
import './OrderDetail.scss';
import { FC, useEffect } from 'react';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchDetailOrder } from '../../store/api';
import { IProduct } from '../Product/Product';
import { addDeleteItem, handleDelete, isDetailOrder } from '../../store/slices';
import { PopUp } from '../PopUp/PopUp';

export const OrderDetail: FC = () => {
  const { id, title } = useParams<{ id: string; title: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const isDelete: boolean = useSelector((state: RootState) => state.dzenCode.isDelete);

  const orderDetail: IProduct[] = useSelector(
    (state: RootState) => state.dzenCode.detailOrder
  );

  const handleCloseDetailOrder = (): void => {
    dispatch(isDetailOrder());
  };

  const handleDeleteProduct = (product: IProduct): void => {
    dispatch(addDeleteItem(product));
    dispatch(handleDelete());
  };

  useEffect(() => {
    dispatch(fetchDetailOrder(id));
  }, [id]);

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
            <div key={product.id} className="orderDetail__product item">
              <div
                className={
                  product.isNew
                    ? 'item__status item__status_smActive '
                    : 'item__status item__status_smNoActive'
                }
              ></div>

              <Image className="item__img" src={imgMonitor} />

              <div className="item__titleWrap">
                <p className="item__title">{product.title}</p>
                <p className="item__titleDesc">{product.serialNumber}</p>
              </div>

              {product.isNew ? (
                <p className="item__status item__status_active">Free</p>
              ) : (
                <p className="item__status">Work</p>
              )}

              <div className="item__btnTrushWrap">
                <BtnTrush onClick={() => handleDeleteProduct(product)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {isDelete && <PopUp />}
    </>
  );
};
