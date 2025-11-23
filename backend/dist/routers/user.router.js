"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get('/get_users', user_controller_1.getAllUsers);
router.post('/register_user', user_controller_1.createUser);
router.put('/users/:id', user_controller_1.updateUser);
exports.default = router;
//# sourceMappingURL=user.router.js.map