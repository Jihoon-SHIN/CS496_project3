import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/coffee', (req, res) => {
    res.json({success: true});
});

export default router;
