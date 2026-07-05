import * as userService from "../services/user.service.js";

export async function signUp(req, res) {
  try {
    const user = await userService.signUp(req.user, req.body);

    return res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}