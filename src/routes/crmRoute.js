import * as Controller from "./../controllers/crmController.js"

const routes = (app) => {
    /// end-point to get all contact //
    app.route('/contact', )
    .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type ${req.method}`);
            next()
    }, Controller.getContact)

    /// end-point to create new contact //
    .post(Controller.addContact)

    app.route('/contact/:contactId')

    /// end-point to update contact //
    .put(Controller.update)

    /// end-point to delete contact //
    .delete(Controller.deleteContact)

    /// end-point to get specific contact //
    .get(Controller.getById)
}

export default routes;

