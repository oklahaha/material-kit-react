import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmModal({ show, handleClose, handleDelete, athleteId }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Athlete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this Athlete?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDelete(athleteId)}>
          Confirm Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;