import { FC } from 'react';
import imgMonitor from '../../assets/img/monitor.png';
import { Image } from 'react-bootstrap';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import {
  addHandleDeleteItem,
  addItemToDelete,
  handleDetailOrder,
  handlePopUpOpen,
} from '../../store/slices';
import { IProduct } from '../../types/types';
import { useAppDispatch } from '../../store/appDispatch';
import './Product.scss';
import { deleteProduct, fetchOrderList } from '../../store/api';

interface IProductProps {
  product: IProduct;
}

export const ProductShort: FC<IProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleItemDelete = (): void => {
    dispatch(deleteProduct(product.id));
    dispatch(fetchOrderList());
    dispatch(handleDetailOrder());
    console.log('detail delete product');
  };

  const handleDeleteProduct = (): void => {
    console.log('productShortTOdelete', product);

    dispatch(addItemToDelete(product));
    dispatch(handlePopUpOpen());
    dispatch(addHandleDeleteItem(handleItemDelete));
  };

  return (
    <div key={product.id} className="product product_detail">
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

      <div className="product__btnTrushWrap">
        <BtnTrush onClick={handleDeleteProduct} />
      </div>
    </div>
  );
};
