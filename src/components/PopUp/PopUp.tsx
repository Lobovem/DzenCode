import { FC } from 'react';
import imgMonitor from '../../assets/img/monitor.png';
import { Button, Image, Modal } from 'react-bootstrap';
import { BtnClose } from '../BtnClose/BtnClose';
import iconTrush from '../../assets/icon/iconTrushRed.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { deleteProduct } from '../../store/api';
import { addDeleteItem, handleDelete } from '../../store/slices';
import './PopUp.scss';
import { useAppDispatch } from '../../store/appDispatch';

export const PopUp: FC = () => {
  const dispatch = useAppDispatch();
  const deleteItem = useSelector((state: RootState) => state.dzenCode.deleteItem);

  const isDelete = (): void => {
    dispatch(handleDelete());
    dispatch(addDeleteItem(''));
  };

  const handleDeleteItem = (): void => {
    dispatch(deleteProduct(deleteItem.id));
    isDelete();
  };

  return (
    <div className="modal show animation">
      <Modal.Dialog className="popUp">
        <BtnClose onClick={isDelete} />

        <Modal.Header className="popUp__header">
          <Modal.Title className="popUp__title">
            Are you sure you want to delete this product?
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="popUp__body">
          <div className="popUp__product product">
            <div
              className={
                deleteItem.isNew
                  ? 'product__status product__status_smActive '
                  : 'product__status product__status_smNoActive'
              }
            ></div>
            <Image className="product__img" src={imgMonitor} />

            <div className="product__titleWrap">
              <p className="product__title">{deleteItem.title}</p>
              <p className="product__titleDesc">{deleteItem.serialNumber}</p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="popUp__footer">
          <Button variant="secondary" className="popUp__btnClose" onClick={isDelete}>
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
