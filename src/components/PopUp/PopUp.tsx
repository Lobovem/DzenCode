import { FC, HTMLAttributes } from 'react';
import imgMonitor from '../../assets/img/monitor.png';
import { Button, Image, Modal } from 'react-bootstrap';
import { BtnClose } from '../BtnClose/BtnClose';
import iconTrush from '../../assets/icon/iconTrushRed.png';
import { handlePopUpOpen } from '../../store/slices';
import { useAppDispatch } from '../../store/appDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './PopUp.scss';

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  params: {
    onClose: () => void;
    onConfirm: () => void;
  };
}

export const PopUp: FC<IModalProps> = ({ params }) => {
  const { onClose, onConfirm } = params;

  const isDelete = useSelector((state: RootState) => state.dzenCode.isDelete);
  const deleteItem = useSelector((state: RootState) => state.dzenCode.deleteItem);

  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    onClose();
    dispatch(handlePopUpOpen());
  };

  const handleClickSuccess = () => {
    onConfirm();
    dispatch(handlePopUpOpen());
  };

  return (
    <div className={isDelete ? 'modal modal_active show' : 'modal show'}>
      <Modal.Dialog className="popUp">
        <BtnClose onClick={handleClose} />

        <Modal.Header className="popUp__header">
          <Modal.Title className="popUp__title">
            Are you sure you want to delete this product?
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="popUp__body">
          {deleteItem?.serialNumber ? (
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
          <Button variant="secondary" className="popUp__btnClose" onClick={handleClose}>
            Close
          </Button>

          <Button
            variant="primary"
            className="popUp__btnDelete"
            onClick={handleClickSuccess}
          >
            <Image src={iconTrush} className="popUp__btnDeleteIcon" /> Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
