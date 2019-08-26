import React from 'react'
import {Form, Button, Label} from 'semantic-ui-react'

const EditClient = (props) => { 
  return (
      <div>
          <h4>Edit Jewelry</h4>
          <Form onSubmit={props.closeAndEdit}>
              <Label>
                  Edit Owner's name: 
                  <Form.Input type='text' name="owner" onChange={props.handleFormChange} value={props.clientToEdit.owner} />
              </Label>
              <Label>
                  Edit price:
                  <Form.Input type="number" name="price" onChange={props.handleFormChange} value={props.clientToEdit.price} />
              </Label>
              <Label>
                Edit description:
                  <Form.Input  name="description" onChange={props.handleFormChange} value={props.clientToEdit.description} />
              </Label>
              <Button type="Submit">Save Changes</Button>
          </Form>
      </div>
  )
}

export default EditClient;