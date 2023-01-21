import React, { useState } from 'react';

import {Button, Modal } from '@mui/material';
import ProductForm from './ProductForm';

export default function ShowFormModal() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Cadastrar
      </Button>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="form-modal-title"
        aria-describedby="form-modal-description"
        className="modal-title"
      >
        <div className="modal-content">
          <ProductForm />
        </div>
      </Modal>
    </div>
  );
}
