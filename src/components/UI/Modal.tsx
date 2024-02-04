import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type PropsType = {
  children: React.ReactNode;
  isOpen: boolean;
};

function BasicModal(props: PropsType) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal
        open={props.isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{props.children}</Box>
      </Modal>
    </div>
  );
}

export default BasicModal;
