import { NextFunction, Request, Response } from 'express';
import UserService from '../service/userService';
import asyncHandler from '../../../middlewares/asyncHandler';
import { validateUser } from '../validation/userValidation';
import messages from '../../../config/i18n/en'

const msg = messages.src.components.user.controller;

export default class UserController {
    public static getAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const users = await UserService.getAllUsers();

        res.status(200).json({
            status: 'success',
            message: msg.usersFetched,
            data: users,
        });
    });

    public static createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const userData = req.body;

        validateUser(userData);
        
        const user = await UserService.createUser(userData);

        res.status(201).json({
            status: 'success',
            message: msg.userCreated,
            data: user,
        });
    });

    public static getUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const user = await UserService.getUser(req.params.id);

        res.status(200).json({
            status: 'success',
            message: msg.userFetched,
            data: user,
        });
    });

    public static updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const userData = req.body;

        validateUser(userData);

        const user = await UserService.updateUser(req.params.id, userData);

        res.status(200).json({
            status: 'success',
            message: msg.userUpdated,
            data: user,
        });
    });

    public static deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const user = await UserService.deleteUser(req.params.id);

        res.status(204).json({
            status: 'success',
            message: msg.userDeleted,
            data: user,
        });
    });
}