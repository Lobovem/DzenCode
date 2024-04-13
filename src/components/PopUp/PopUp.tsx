import { FC } from 'react';
import './PopUp.scss';
import imgMonitor from '../../assets/monitor.png';
import { Button, Image, Modal } from 'react-bootstrap';
import { BtnClose } from '../BtnClose/BtnClose';
import iconTrush from '../../assets/iconTrushRed.png';

export const PopUp: FC = () => {
  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog className="popUp">
        <BtnClose />

        <Modal.Header className="popUp__header">
          <Modal.Title className="popUp__title">
            Are you sure you want to delete this product?
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="popUp__body">
          <div className="popUp__product product">
            <div className="product__status product__status_sm"></div>
            <Image className="product__img" src={imgMonitor} />

            <div className="product__titleWrap">
              <p className="product__title">
                Samsung 49-inch Odyssey G9 Curved Gaming Monitor with QLED
              </p>
              <p className="product__titleDesc">SN- 9876543210</p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="popUp__footer">
          <Button variant="secondary" className="popUp__btnClose">
            Close
          </Button>

          <Button variant="primary" className="popUp__btnDelete">
            <Image src={iconTrush} className="popUp__btnDeleteIcon" /> Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
