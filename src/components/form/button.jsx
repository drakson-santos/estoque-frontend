import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import ProductForm from './ProductForm';
import Label from '../label/Label';

export default function ShowFormModal({ reloadPage }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => {
		reloadPage(true)
        setShowModal(true);
    };

    const handleClose = () => {
		reloadPage(true)
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
				<Label
                        variant="filled"
                        className="cursor"
                        color="error"
                        sx={{
							margin: 1,
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                        }}
						onClick={() => handleClose()}
                    >
                        X
                    </Label>
                    <ProductForm reloadPage={reloadPage} handleClose={handleClose}/>
                </div>
            </Modal>
        </div>
    );
}
