import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from "@chakra-ui/react";
import { useContext } from "react";
import {GlobalContext} from '../../context';

export default function TransactionForm({onClose, isOpen}) {
    const {formData, setFormData, value, setValue, handleFormSubmit} = useContext(GlobalContext);
    
    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(formData);
    }
    
    return (
    <Modal onClose={onClose} isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color={'blue.300'}>Add New Transaction</ModalHeader>
                <ModalCloseButton color={'red.300'}/>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Enter Description</FormLabel>
                        <Input
                        placeholder="Enter Transcation Description"
                        name="description"
                        type="text"
                        onChange={handleFormChange}
                        />
                        <FormLabel mt={'2'}>Enter Amount</FormLabel>
                        <Input
                        placeholder="Enter Transcation Amount"
                        name="amount"
                        type="number"
                        onChange={handleFormChange}
                        />
                    </FormControl>
                    <RadioGroup mt={'5'} value={value} onChange={setValue}>
                        <Radio 
                        checked={formData.type === 'income'}
                        colorScheme="blue" 
                        name="type" 
                        value="income"
                        mr={'4'}
                        onChange={handleFormChange}
                        >Income</Radio>
                        <Radio 
                        checked={formData.type === 'expense'}
                        colorScheme="red" 
                        name="type" 
                        value="expense"
                        onChange={handleFormChange}
                        >Expense</Radio>
                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button mr={'4'} onClick={onClose} bg={'red.300'}>Cancel</Button>
                    <Button onClick={onClose} type="submit" bg={'blue.300'}>Add</Button>
                </ModalFooter>
            </ModalContent>
        </form>
    </Modal>
    )
}