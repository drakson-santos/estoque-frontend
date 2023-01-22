import React from 'react';
import { Modal } from '@mui/material';
import Label from '../label/Label';
import './styles.css';

export default function ModalCustom({ children, showModal, handlerModal }) {
    return (
        <Modal
            open={showModal}
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
                    onClick={() => handlerModal(false)}
                >
                    X
                </Label>
                {children}
            </div>
        </Modal>
    );
}
