import { FC } from 'react';
import { Image } from 'react-bootstrap';
import imgMonitor from '../../assets/img/monitor.png';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import { addItemToDelete, handlePopUpOpen } from '../../store/slices';
import {
  formatDateWithSlashFull,
  formatDateWithSlashNameMonthFull,
  formatDateWithSlashSmall,
} from '../../utils/dateFormats';
import './Product.scss';
import { IProduct } from '../../types/types';
import { useAppDispatch } from '../../store/appDispatch';

interface IProductProps {
  product: IProduct;
}

export const Product: FC<IProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  // const handleDeleteProduct = (): void => {
  //   dispatch(fetchDeleteProduct(deleteItem.id));
  //   dispatch(fetchOrderList());
  //   dispatch(handleDetailOrder());
  // };

  const handleDeleteProduct = (): void => {
    dispatch(addItemToDelete(product));
    dispatch(handlePopUpOpen());
    // dispatch(addHandleDeleteItem());
  };

  return (
    <div className="product">
      <div
        className={
          product.isNew
            ? 'product__status product__status_smActive '
            : 'product__status product__status_smNoActive'
        }
      ></div>
      <Image className="product__img" src={imgMonitor} />

      <div className="product__titleWrap">
        <p className="product__title">{product.title}</p>
        <p className="product__titleDesc">{product.serialNumber}</p>
      </div>

      {product.isNew ? (
        <p className="product__statusActive">Free</p>
      ) : (
        <p className="product__statusNoActive">Work</p>
      )}

      <div className="product__textWrap">
        <p className="product__textTitle">
          <span className="product__textTitle product__textTitle_sm">c </span>
          {formatDateWithSlashFull(product.guarantee.start)}
        </p>
        <div>
          <p className="product__textTitle">
            <span className="product__textTitle product__textTitle_sm">по </span>
            {formatDateWithSlashFull(product.guarantee.end)}
          </p>
        </div>
      </div>

      {product.isNew ? (
        <p className="product__statusActive">New</p>
      ) : (
        <p className="product__statusNoActive">Used</p>
      )}

      <div className="product__textWrap product__textWrap_left">
        {product?.price.map((price, index) => (
          <p
            key={index}
            className={
              price.isDefault
                ? 'product__textTitle'
                : 'product__textTitle product__textTitle_sm'
            }
          >
            {`${price.value} ${price.symbol}`}
          </p>
        ))}
      </div>

      <p className="product__title product__title_lg">
        Long long title name very long group Long long title name very long group
      </p>
      <p className="product__title product__title_lg"> Volkov Vladimir</p>
      <p className="product__title product__title_lg">{product.orderName}</p>

      <div className="product__textWrap product__textWrap_center">
        <p className="product__textTitle product__textTitle_sm">
          {formatDateWithSlashSmall(product.date)}
        </p>
        <p className="product__textTitle">
          {formatDateWithSlashNameMonthFull(product.date)}
        </p>
      </div>

      <div className="product__btnTrushWrap">
        <BtnTrush onClick={handleDeleteProduct} />
      </div>
    </div>
  );
};
