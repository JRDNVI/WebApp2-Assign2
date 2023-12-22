import userDataModel from "./userDataModel";
import asyncHandler from "express-async-handler";
import express from "express";

const router = express.Router();

router.get('/:username', asyncHandler(async (req, res) => {
    const username = req.params.username;
    const userData = await userDataModel.findByUsername(username);
    if (userData) {
        res.status(200).json(userData);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.put('/:username/addId', asyncHandler(async (req, res) => {
    const username = req.params.username;
    const { arrayName, id } = req.body;

    try {
        const update = { $addToSet: { [arrayName]: id } };
        const userData = await userDataModel.findOneAndUpdate({ username: username }, update, { new: true });

        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ message: 'User not found.', status_code: 404 });
        }
    } catch (error) {
        res.status(500).json({ message: error.message, status_code: 500 });
    }
}));


router.put('/:username/removeId', asyncHandler(async (req, res) => {
    const username = req.params.username;
    const { arrayName, id } = req.body;

    try {
        const update = { $pull: { [arrayName]: id } };
        const userData = await userDataModel.findOneAndUpdate({ username: username }, update, { new: true });

        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ message: 'User not found.', status_code: 404 });
        }
    } catch (error) {
        res.status(500).json({ message: error.message, status_code: 500 });
    }
}));


export default router;