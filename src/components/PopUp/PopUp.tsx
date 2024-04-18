import { FC, MouseEventHandler } from 'react';
import imgMonitor from '../../assets/img/monitor.png';
import { Button, Image, Modal } from 'react-bootstrap';
import { BtnClose } from '../BtnClose/BtnClose';
import iconTrush from '../../assets/icon/iconTrushRed.png';
import { deleteOrder, deleteProduct, fetchOrderList } from '../../store/api';
import {
  addDeleteOrder,
  addDeleteProduct,
  handlePopUpOpen,
  handleDetailOrder,
} from '../../store/slices';
import { useAppDispatch } from '../../store/appDispatch';
import './PopUp.scss';
import { initOrder, initProduct } from '../../store/initObj';
import { IOrder, IProduct, isIOrder, isIProduct } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface IPopUpProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

// export const PopUp: FC<IItemProps> = ({ deleteItem }) => {
export const PopUp: FC<IPopUpProps> = ({ onClick }) => {
  const isDelete = useSelector((state: RootState) => state.dzenCode.isDelete);
  const deleteItem = useSelector((state: RootState) => state.dzenCode.deleteItem);

  const dispatch = useAppDispatch();
  const handleOpen = (): void => {
    // if (isIProduct(deleteItem)) {
    //   dispatch(addDeleteProduct(initProduct));
    // } else if (isIOrder(deleteItem)) {
    //   dispatch(addDeleteOrder(initOrder));
    // }
    dispatch(handlePopUpOpen());
  };

  const handleDeleteItem = (): void => {
    // if (isIProduct(deleteItem)) {
    //   dispatch(deleteProduct(deleteItem.id));
    //   dispatch(fetchOrderList());
    //   dispatch(handleDetailOrder());
    // }
    // if (isIOrder(deleteItem)) {
    //   dispatch(deleteOrder(deleteItem.id));
    // }

    handleOpen();
  };

  return (
    <div className={isDelete ? 'modal modal_active show' : 'modal show'}>
      <Modal.Dialog className="popUp">
        <BtnClose onClick={handleOpen} />

        <Modal.Header className="popUp__header">
          <Modal.Title className="popUp__title">
            Are you sure you want to delete this product?
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="popUp__body">
          {deleteItem?.isNew ? (
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
          <Button variant="secondary" className="popUp__btnClose" onClick={handleOpen}>
            Close
          </Button>

          <Button variant="primary" className="popUp__btnDelete" onClick={onClick}>
            <Image src={iconTrush} className="popUp__btnDeleteIcon" /> Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
