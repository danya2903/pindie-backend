const usersRouter = require('express').Router();

const { checkAuth } = require('../middlewares/auth.js');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users');
const { findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    filterPassword,
    hashPassword } = require('../middlewares/users');


usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);
usersRouter.get('/users/:id', findUserById, filterPassword, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post('/users', findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendUserCreated);
usersRouter.put('/users/:id', checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
