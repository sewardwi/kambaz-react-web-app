import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
export default function AssignmentDelete({ show, handleClose, aidToDelete}: {
 show: boolean; handleClose: () => void; aidToDelete: string;
 }) {
  const dispatch = useDispatch()
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>Are you sure you want to delete this assignment?</Modal.Title>
   </Modal.Header>
   {/* <Modal.Body>
    <FormControl value={moduleName}
     onChange={(e) => { setModuleName(e.target.value); }} />
   </Modal.Body> */}
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="danger"
     onClick={() => {
      console.log("deleting assignment: " + aidToDelete);
      dispatch(deleteAssignment(aidToDelete));
      handleClose();
     }} > Delete </Button>
   </Modal.Footer>
  </Modal>
);}