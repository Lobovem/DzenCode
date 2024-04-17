import { FC } from 'react';
import imgMonitor from '../../assets/img/monitor.png';
import { Button, Image, Modal } from 'react-bootstrap';
import { BtnClose } from '../BtnClose/BtnClose';
import iconTrush from '../../assets/icon/iconTrushRed.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  deleteOrder,
  deleteProduct,
  fetchDetailOrder,
  fetchOrderList,
  fetchProductList,
} from '../../store/api';
import {
  addDeleteOrder,
  addDeleteProduct,
  handleDelete,
  handleDetailOrder,
} from '../../store/slices';
import { useAppDispatch } from '../../store/appDispatch';
import './PopUp.scss';
import { initOrder, initProduct } from '../../store/initObj';
import { IOrder, IProduct, isIOrder, isIProduct } from '../../types/types';

interface IItemProps {
  deleteItem: IProduct | IOrder;
}

export const PopUp: FC<IItemProps> = ({ deleteItem }) => {
  console.log(deleteItem);
  console.log('typeGuard product', isIProduct(deleteItem));
  console.log('typeGuard order', isIOrder(deleteItem));

  const dispatch = useAppDispatch();

  const handleOpenPopUp = (): void => {
    if (isIProduct(deleteItem)) {
      dispatch(addDeleteProduct(initProduct));
    } else if (isIOrder(deleteItem)) {
      dispatch(addDeleteOrder(initOrder));
    }
    dispatch(handleDelete());
  };

  const handleDeleteItem = (): void => {
    // if (isIProduct(deleteItem)) {
    //   dispatch(deleteProduct(deleteItem.id));
    //   // dispatch(fetchDetailOrder());
    //   dispatch(fetchProductList());
    // } else if (isIOrder(deleteItem)) {
    //   dispatch(deleteOrder(deleteItem.id));
    //   // dispatch(fetchOrderList());
    // }
    if (isIProduct(deleteItem)) {
      dispatch(deleteProduct(deleteItem.id));
      dispatch(fetchOrderList());
      dispatch(handleDetailOrder());
    }
    if (isIOrder(deleteItem)) {
      dispatch(deleteOrder(deleteItem.id));
    }

    handleOpenPopUp();
  };

  return (
    <div className="modal show">
      <Modal.Dialog className="popUp">
        <BtnClose onClick={handleOpenPopUp} />

        <Modal.Header className="popUp__header">
          <Modal.Title className="popUp__title">
            Are you sure you want to delete this product?
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="popUp__body">
          {deleteItem?.order ? (
            <div className="popUp__product product">
              <div
                className={
                  deleteItem?.isNew
                    ? 'product__status product__status_smActive '
                    : 'product__status product__status_smNoActive'
                }
              ></div>
              <Image className="product__img" src={imgMonitor} />

              <div className="product__titleWrap">
                <p className="product__title">{deleteItem.title}</p>
                <p className="product__titleDesc">{deleteItem?.serialNumber}</p>
              </div>
            </div>
          ) : (
            <p>{deleteItem.title}</p>
          )}
        </Modal.Body>

        <Modal.Footer className="popUp__footer">
          <Button
            variant="secondary"
            className="popUp__btnClose"
            onClick={handleOpenPopUp}
          >
            Close
          </Button>

          <Button
            variant="primary"
            className="popUp__btnDelete"
            onClick={handleDeleteItem}
          >
            <Image src={iconTrush} className="popUp__btnDeleteIcon" /> Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
