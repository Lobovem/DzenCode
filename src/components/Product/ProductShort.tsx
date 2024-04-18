import { FC } from 'react';
import imgMonitor from '../../assets/img/monitor.png';
import { Image } from 'react-bootstrap';
import { BtnTrush } from '../BtnTrush/BtnTrush';
import { addItemToDelete, handleDetailOrder, handlePopUpOpen } from '../../store/slices';
import { IProduct } from '../../types/types';
import { useAppDispatch } from '../../store/appDispatch';
import './Product.scss';
import { deleteProduct, fetchOrderList } from '../../store/api';
import { useGetConfirmation } from '../provider/ConfirmationProvider';

interface IProductProps {
  product: IProduct;
}

export const ProductShort: FC<IProductProps> = ({ product }) => {
  const getConfirmation = useGetConfirmation();
  const dispatch = useAppDispatch();

  const handleDeleteProduct = async (): Promise<void> => {
    dispatch(addItemToDelete(product));
    dispatch(handlePopUpOpen());
    const confirmation = await getConfirmation({});

    if (confirmation) {
      dispatch(deleteProduct(product.id));
      dispatch(fetchOrderList());
      dispatch(handleDetailOrder());
    }
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
